# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 application showcasing creative AI experiments and generative art. The site features AI-powered poetry generation using Google's Gemini API and live visual effects using Hydra Synth.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with hot-reload
npm run serve

# Build for production
npm run build

# Lint and fix files
npm run lint
```

## Deployment

### Automatic Deployment (GitHub Pages)

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

**Deployment Workflow** (`.github/workflows/deploy.yml`):
1. Triggers on push to `main` branch
2. Checks out the repository
3. Creates `.env` file from `WEBSITE_ENV_PRODUCTION` secret
4. Installs dependencies (`npm install`)
5. Builds the project (`npm run build`)
6. Deploys `dist/` folder to `gh-pages` branch using peaceiris/actions-gh-pages@v3

**Required GitHub Secrets**:
- `WEBSITE_ENV_PRODUCTION` - Contains environment variables including `VUE_APP_GOOGLE_AP_KEY`
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions

### Manual Deployment

If you need to deploy manually:

```bash
# 1. Ensure environment variables are set in .env file
echo "VUE_APP_GOOGLE_AP_KEY=your_api_key_here" > .env

# 2. Build the project
npm run build

# 3. Deploy the dist/ folder to your hosting service
# For GitHub Pages, you can use gh-pages package:
npm install -g gh-pages
gh-pages -d dist
```

**Note**: The `.env` file is not committed to the repository. For production deployment, environment variables must be configured in GitHub Secrets.

## Architecture

### Technology Stack
- **Framework**: Vue 3 (Composition API and Options API)
- **Router**: Vue Router 4 with lazy-loaded routes
- **UI**: Bootstrap 5 + Bootstrap Vue
- **AI Integration**: Google Generative AI (@google/generative-ai) - Gemini 2.5 Flash Lite model
- **Visual Effects**: Hydra Synth for generative visuals
- **Build Tool**: Vue CLI 5

### Project Structure

```
src/
├── main.js              # App entry point, Bootstrap imports
├── App.vue              # Root component with navigation and footer
├── router/
│   └── index.js         # Route definitions (/, /ai, /zien, /hydra)
├── components/
│   ├── StartPage.vue    # Home page
│   ├── AiPage.vue       # AI poetry generator (Gemini API)
│   ├── AiImages.vue     # AI image features
│   ├── HydraBox.vue     # Hydra visual effects
│   └── SpanishCoach.vue # Spanish conversation practice (Gemini chat)
└── assets/
    └── logo.png         # Application logo
```

### Key Components

**AiPage.vue** - AI Poetry Generator
- Uses Google Gemini API (gemini-2.5-flash-lite model)
- Multi-phase interface: selection → generation → iterative refinement
- API key stored in `process.env.VUE_APP_GOOGLE_AP_KEY`
- Supports multiple poem types (sonnet, limerick, haiku, ode, rap, valentijn)
- Allows users to provide feedback for poem revisions
- Maintains chat session history for iterative improvements

**HydraBox.vue** - Generative Visuals
- Creates fullscreen canvas for Hydra Synth visuals
- Contains 3+ visual presets that rotate every 5 seconds
- Uses setup() composition API pattern
- Integrates webcam input (s0.initCam) and mouse interaction
- Conditionally checks for existing canvas before creating new one

**SpanishCoach.vue** - Spanish Conversation Practice
- Uses Google Gemini API (gemini-2.0-flash-exp model) with chat interface
- Implements persistent chat session with conversation history
- Custom system instruction for B1/B2 level Spanish conversation practice
- Features: real-time corrections, session summaries in Dutch, progress tracking
- Supports Enter to send, Shift+Enter for new lines
- Auto-scrolls to latest message, provides conversation reset functionality

**App.vue** - Layout
- Fixed dark footer with social links and version date
- Navigation with router-link active state styling
- CSS custom properties for theming (--primary-color, --secondary-color, etc.)
- Gradient background from top (darker) to bottom (lighter)

### Routing
- `/` - StartPage (home)
- `/ai` - AiPage (AI poetry generator)
- `/hydra` - HydraBox (Hydra visuals)
- `/spanish` - SpanishCoach (Spanish conversation practice)
- `/zien` - AiImages (AI image features)

All routes except home use lazy-loading via dynamic imports.

### Environment Variables
- `VUE_APP_GOOGLE_AP_KEY` - Google Gemini API key (required for AI features)
- `BASE_URL` - Base URL for routing (set by Vue CLI)

### Styling Conventions
- Global CSS variables defined in App.vue root
- Components use scoped styles
- Bootstrap grid system for layout
- Responsive design with media queries (e.g., container-fluid width changes at 1200px+)

## Important Notes

- The application uses Dutch language for UI and poetry generation
- Hydra canvas styling overrides app height to prevent layout conflicts
- API key must be set in environment variables before running AI features
- Hydra component prevents duplicate canvas creation with existence check
