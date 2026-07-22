const STRAPI_BASE = process.env.VUE_APP_STRAPI_BASE

const USER_TOKENS = {
  abuhanifa: process.env.VUE_APP_STRAPI_TOKEN_ABUHANIFA,
  jafar: process.env.VUE_APP_STRAPI_TOKEN_JAFAR,
  silvie: process.env.VUE_APP_STRAPI_TOKEN_SILVIE,
}

const MAX_FOCUS_POINTS = 5

// --- Interne HTTP-helpers ---

async function strapiRequest(method, path, token, body) {
  try {
    const response = await fetch(`${STRAPI_BASE}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-User-Token': token,
      },
      body: body ? JSON.stringify(body) : undefined,
    })
    if (!response.ok) return null
    return await response.json()
  } catch {
    return null
  }
}

const strapiGet = (path, token) => strapiRequest('GET', path, token)
const strapiPost = (path, body, token) => strapiRequest('POST', path, token, body)
const strapiPut = (path, body, token) => strapiRequest('PUT', path, token, body)

// --- Publieke functies ---

export async function resolveUser(username) {
  const token = USER_TOKENS[username.toLowerCase()]
  if (!token) return null

  const query = `filters[username][$eq]=${encodeURIComponent(username.toLowerCase())}&filters[api_token][$eq]=${encodeURIComponent(token)}`
  const result = await strapiGet(`/api/spanish-coach-users?${query}`, token)
  const record = result?.data?.[0]
  if (!record) return null

  const attrs = record.attributes ?? record
  return {
    strapiUserId: record.id,
    documentId: record.documentId,
    token,
    focusPoints: parseFocusPoints(attrs.focus_points),
    currentLevel: attrs.current_level || '',
    totalSessions: attrs.total_sessions || 0,
  }
}

export async function getRecentSessions(strapiUserId, token, limit = 3) {
  const query = [
    `filters[session_user][id][$eq]=${strapiUserId}`,
    'sort=ended_at:desc',
    `pagination[limit]=${limit}`,
    'fields[0]=summary_nl',
    'fields[1]=level_observation',
    'fields[2]=topics_discussed',
    'fields[3]=ended_at',
  ].join('&')

  const result = await strapiGet(`/api/spanish-coach-sessions?${query}`, token)
  const records = result?.data ?? []
  return records.map((r) => r.attributes ?? r)
}

export async function saveSession(strapiUserId, token, sessionData) {
  const result = await strapiPost(
    '/api/spanish-coach-sessions',
    {
      data: {
        session_user: strapiUserId,
        ...sessionData,
      },
    },
    token
  )
  return !!result
}

export async function updateUserProgress(documentId, token, updates) {
  const result = await strapiPut(`/api/spanish-coach-users/${documentId}`, { data: updates }, token)
  return !!result
}

export function buildHistoryPreamble(sessions, focusPoints, currentLevel) {
  if (sessions.length === 0 && focusPoints.length === 0) return ''

  let text = '## Vorige sessies (context voor jou als coach)\n\n'

  if (sessions.length > 0) {
    text += '**Laatste sessies:**\n'
    sessions.forEach((s, i) => {
      const date = s.ended_at ? s.ended_at.slice(0, 10) : '?'
      let line = `${i + 1}. [${date}]`
      if (s.topics_discussed) line += ` Onderwerp: ${s.topics_discussed}.`
      if (s.level_observation) line += ` Niveau: ${s.level_observation}.`
      text += line + '\n'
    })
    text += '\n'
  }

  if (focusPoints.length > 0) {
    text += '**Actieve aandachtspunten (corrigeer strategisch):**\n'
    focusPoints.forEach((p) => {
      text += `- ${p}\n`
    })
    text += '\n'
  }

  if (currentLevel) {
    text += `**Huidig niveau van de student:** ${currentLevel}\n`
  }

  return text
}

// --- Tekst-parsers (voor het analyseren van de Gemini-samenvatting) ---

function extractSection(summaryText, label) {
  const lines = summaryText.split('\n')
  const start = lines.findIndex((l) => l.includes(label))
  if (start === -1) return []
  const items = []
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue
    if (line.startsWith('**') || line.startsWith('##')) break
    items.push(line.replace(/^[-\d.]+\s*/, '').trim())
  }
  return items
}

export function extractFocusPoints(summaryText) {
  if (!summaryText) return []
  return extractSection(summaryText, 'Verbeterpunten').filter(Boolean)
}

export function extractLevelObservation(summaryText) {
  if (!summaryText) return ''
  const line = summaryText.split('\n').find((l) => l.includes('Niveau observatie'))
  if (!line) return ''
  return line.split(':').slice(1).join(':').trim()
}

export function extractTopics(summaryText) {
  if (!summaryText) return ''
  const line = summaryText.split('\n').find((l) => l.includes('Onderwerp'))
  if (!line) return ''
  return line.split(':').slice(1).join(':').trim()
}

export function mergeFocusPoints(existing, newPoints) {
  const merged = [...newPoints, ...existing.filter((p) => !newPoints.includes(p))]
  return merged.slice(0, MAX_FOCUS_POINTS)
}

function parseFocusPoints(raw) {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}
