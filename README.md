# Web3 Developer Portfolio

A stunning, production-ready Web3 developer portfolio built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📁 Project Structure

```
web3-portfolio/
├── public/
│   ├── favicon.svg          # Site icon
│   └── profile.jpg          # ← DROP YOUR PHOTO HERE (see below)
├── src/
│   ├── components/
│   │   ├── App.jsx           # Root — assembles all sections
│   │   ├── Navbar.jsx        # Sticky nav with active-link tracking
│   │   ├── Hero.jsx          # Hero section + typing animation
│   │   ├── HeroCanvas.jsx    # Canvas: nodes, particles, grid
│   │   ├── ProfilePicture.jsx# Animated ring + photo placeholder
│   │   ├── About.jsx         # About me + highlight cards
│   │   ├── Skills.jsx        # Skill cards with progress bars
│   │   ├── Timeline.jsx      # Experience timeline
│   │   ├── Projects.jsx      # 3D-tilt project cards
│   │   ├── BlockchainStack.jsx # Tech ecosystem grid
│   │   ├── Services.jsx      # Service offering cards
│   │   ├── Contact.jsx       # Social links + contact form
│   │   ├── Footer.jsx        # Footer
│   │   ├── LoadingScreen.jsx # Web3 loading animation
│   │   └── CustomCursor.jsx  # Futuristic cursor
│   ├── data/
│   │   └── portfolio.js      # ← ALL YOUR CONTENT LIVES HERE
│   ├── hooks/
│   │   └── useScrollFade.js  # Scroll-triggered fade-in hook
│   ├── styles/
│   │   └── globals.css       # Tailwind + custom CSS
│   └── main.jsx              # React entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🖼️ Adding Your Profile Photo

**Option 1 — Local file (recommended)**

1. Drop your photo into `/public/profile.jpg`
2. Open `src/data/portfolio.js`
3. Change `profileImage: null` to `profileImage: '/profile.jpg'`

**Option 2 — Hosted URL**

```js
profileImage: 'https://your-cdn.com/your-photo.jpg',
```

---

## ✏️ Personalising Your Content

**Everything is in one file: `src/data/portfolio.js`**

| What to change | Where |
|---|---|
| Name, title, tagline | `personal.name / title / tagline` |
| Social links | `personal.social.*` |
| Profile photo | `personal.profileImage` |
| Resume PDF | `personal.resumeUrl` — put PDF in `/public/` |
| Skills & levels | `skills` array |
| Timeline entries | `timeline` array |
| Projects | `projects` array |
| Tech stack categories | `stack` object |
| Services | `services` array |

---

## 📬 Wiring Up the Contact Form

The form is ready — just add a sending service. Easiest options:

### Formspree (zero code)
1. Sign up at https://formspree.io
2. Create a form, copy your endpoint
3. In `Contact.jsx`, change the `handleSubmit` fetch:

```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### EmailJS
1. Sign up at https://emailjs.com
2. `npm install @emailjs/browser`
3. Follow their React quickstart guide

---

## 🌐 Deploying to Vercel

```bash
# Build for production
npm run build

# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — GitHub
# Push repo to GitHub → Import project on vercel.com → Deploy
```

No extra config needed — Vite output in `/dist` is auto-detected by Vercel.

---

## 🎨 Changing Colours

Edit the CSS variables in `src/styles/globals.css`:

```css
:root {
  --neon-cyan:   #00f5ff;  /* primary accent */
  --neon-purple: #a855f7;  /* secondary accent */
  --neon-green:  #39ff14;  /* available badge */
  --dark-bg:     #020208;  /* page background */
}
```

And in `tailwind.config.js` → `theme.extend.colors.neon`.

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Utility styling |
| Framer Motion | (installed, ready to use for extra animations) |
| Canvas API | Hero particle/node animation |
| IntersectionObserver | Scroll-triggered reveals |

---

## 💡 Tips to Improve Your Portfolio

1. **Add real project screenshots** — replace emoji placeholders with actual screenshots in `projects[].image`
2. **Connect the form** — use Formspree or EmailJS so clients can actually reach you
3. **Add your resume** — drop `resume.pdf` in `/public/` and set `personal.resumeUrl`
4. **Customise the stack** — update `src/data/portfolio.js` to match your actual tools
5. **Add Google Analytics** — paste the GA4 script tag into `index.html`
6. **SEO** — update the `<meta>` tags in `index.html` with your real name and keywords
