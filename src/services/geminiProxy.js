const PROXY_URL = process.env.VUE_APP_PROXY_URL

export async function generateContent(prompt, model = 'gemini-2.5-flash') {
  const response = await fetch(PROXY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, model })
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error || `HTTP ${response.status}`)
  }

  const data = await response.json()
  return data.text
}
