# Hruthi Muggalla — Portfolio Website

A production-grade React portfolio built with Vite, CSS Modules, and lucide-react icons.

---

## Quick Start

### Prerequisites
- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node)

### Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot-reload |
| `npm run build` | Build optimized production bundle → `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
src/
├── App.jsx                        ← Root component, assembles all sections
├── main.jsx                       ← React DOM entry point
├── styles/
│   ├── globals.css                ← Design tokens (CSS vars), reset, fonts
│   └── utilities.css             ← Shared layout classes, scroll-reveal
├── data/
│   └── portfolioData.js          ← ✏️  EDIT THIS — all your content lives here
├── hooks/
│   ├── useScrollReveal.js        ← IntersectionObserver scroll animations
│   ├── useTypewriter.js          ← Typewriter cycling animation
│   └── useNavScroll.js           ← Navbar shrink-on-scroll
└── components/
    ├── ui/
    │   ├── Button/               ← Reusable button (primary / ghost / icon)
    │   ├── Badge/                ← Pill chip (accent / violet / coral / default)
    │   └── SectionHeader/       ← Label + Title + Subtitle pattern
    ├── layout/
    │   ├── Navbar/              ← Fixed nav, mobile hamburger
    │   └── Footer/              ← 3-col footer with social links
    └── sections/
        ├── Hero/                ← Typewriter, stats card, CTAs
        ├── Experience/          ← Work history timeline
        ├── Projects/            ← Project cards with hover effects
        ├── Skills/              ← Tabbed skill categories
        ├── Education/           ← Degree cards
        └── Contact/             ← Contact links + message form
```

---

## Personalizing the Site

**All your content is in one file:** `src/data/portfolioData.js`

Open it and update:
- `personal` — name, email, LinkedIn URL, GitHub URL, location, typewriter phrases
- `experience` — job entries, bullets, tech tags
- `projects` — project cards, highlights, links
- `skillCategories` — tabbed skill lists
- `education` — degrees, GPA, coursework

### Update Your Social Links

In `portfolioData.js`, find the `personal` object:
```js
export const personal = {
  linkedin: 'https://linkedin.com/in/YOUR-ACTUAL-PROFILE',
  github:   'https://github.com/YOUR-ACTUAL-USERNAME',
  email:    'your@email.com',
  ...
};
```

### Wire Up the Contact Form (Optional)

The form currently shows a success state after 1.2s (simulated).  
To make it actually send emails, sign up for **[Formspree](https://formspree.io)** (free), get your form ID, then in `Contact.jsx` replace the fake `setTimeout` with:

```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (res.ok) setSubmitted(true);
```

---

## Deploying

### Netlify (Easiest — free)
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page → live in seconds

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```

---

## Tech Stack

- **React 19** + **Vite 8**
- **CSS Modules** — scoped styles per component
- **lucide-react** — icons
- **Google Fonts** — Syne (headings) + DM Sans (body)
- Zero other dependencies
