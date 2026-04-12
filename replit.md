# Renee Dole Consulting

## Overview
A professional services website for Renee Dole Consulting, an executive coaching and career consulting business. The site provides information about executive coaching, career consulting, and group professional development services.

## Architecture
- **Type:** Single-page React application (SPA)
- **Frontend Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
- **UI Components:** Shadcn UI (based on Base UI primitives)
- **AI Integration:** Google Gemini API (`@google/genai`)
- **Fonts:** Geist Variable font
- **Package Manager:** npm

## Project Structure
```
/
├── src/
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # Root component
│   ├── index.css         # Global styles + Tailwind
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── FocusAreas.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/           # Reusable UI components
│   └── lib/
│       └── utils.ts      # Tailwind class utilities
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Development
- **Dev server:** `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build:** `npm run build`
- **Lint/Type check:** `npm run lint`

## Environment Variables
- `GEMINI_API_KEY` - Required for Gemini AI API integration (see `.env.example`)

## Deployment
- **Type:** Static site deployment
- **Build command:** `npm run build`
- **Output directory:** `dist`

## Vite Configuration
The Vite dev server is configured to:
- Host on `0.0.0.0` (required for Replit proxy)
- Port `5000` (required for Replit webview)
- `allowedHosts: true` (required for Replit iframe proxy)
