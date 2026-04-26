# Handle Technologies — Marketing Website

Marketing website for Handle AI, Handle Technologies' omnichannel customer engagement platform. Unifies WhatsApp, Instagram, Facebook, Telegram and more into one AI-powered hub.

## Tech stack

- React 19 + Vite 6
- TailwindCSS 4 (with `@tailwindcss/vite`)
- Framer Motion 12 for animations
- Lucide React for icons
- React Router v6

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview production build
```

## Project structure

```
src/
  main.jsx           # app entry
  App.jsx            # router
  index.css          # design tokens, glass, gradients
  components/
    ui/              # Button, Card, Badge, Counter, Section
    layout/          # Logo, Navbar, Footer
    sections/        # Hero, TrustBar, ValueProposition,
                     # HowItWorks, DashboardPreview, Pricing,
                     # Testimonials, FAQ, FinalCTA
  pages/
    Home.jsx
```

## Design tokens

- Primary: `#41B5E6`  (with `#7FD4F2` and `#2196D4` for gradients)
- Dark surface: `#272727`
- Background: `#000000` / `#0A0A0A`
- Text: white with 65% / 40% / 25% opacity steps
- Fonts: Inter (UI) · JetBrains Mono (numbers only)

## Deployment

This repo deploys to Vercel as a Vite static build. `vercel.json` configures SPA rewrites and security headers.

## Contact

info@handletech.io · 13th Floor, Marina Real Estate Tower, Lusail — Qatar
