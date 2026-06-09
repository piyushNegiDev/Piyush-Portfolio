# Piyush Negi — Portfolio

A personal developer portfolio built with React 19 and Tailwind CSS 4, showcasing my projects, skills, and background as a Frontend Developer. Designed with a dark theme, smooth animations, and a responsive layout across all devices.

## 🔗 Live Demo

> [_https://piyush-portfolio-dun.vercel.app/_](https://piyush-portfolio-dun.vercel.app/)

---

## ✨ Features

- **Multi-page layout** — Home, Projects, and About Me pages via React Router
- **Hero section** — Typewriter animation cycling through intro taglines
- **Projects showcase** — Categorized into Complete Projects, Small Projects, and Games
- **Skills section** — Interactive canvas-based physics animation with tech icons + animated skill badges
- **About Me page** — Full bio, skills breakdown with tilt effect, and fun facts
- **Contact form** — Functional form powered by EmailJS with Formik validation
- **Smooth animations** — Framer Motion scroll-triggered fade/slide animations throughout
- **Parallax tilt** — `react-parallax-tilt` on project cards for a 3D hover effect
- **Responsive design** — Mobile hamburger menu, fluid grid layouts, and adaptive breakpoints

---

## 🛠️ Tech Stack

```
REACT 19  VITE  TAILWIND CSS 4  FRAMER MOTION  REACT ROUTER  REACT PARALLAX TILT
FORMIK  YUP  AXIOS  EMAILJS  REACT ICONS  REACT TOASTIFY  REACT TYPE ANIMATION  VERCEL
```

---

## 📁 Project Structure

```
src/
├── assets/                  Project screenshot images
├── components/
│   ├── about-me/            AboutSection, SkillsSection, FunFactsSection
│   ├── home/                Hero, Projects, Skills, AboutMe, Contact
│   ├── projects/            CompletedProjects, ShortProjects, GameProjects
│   ├── AnimatedButton.jsx   Reusable Framer Motion button
│   ├── ContactForm.jsx      Formik + Yup + EmailJS contact form
│   ├── Footer.jsx
│   ├── Navbar.jsx           Sticky navbar with mobile menu
│   ├── SkillsCloud.jsx      Canvas physics animation with tech icons
│   └── TechStack.jsx        Animated rotating tech badge list
├── pages/
│   ├── HomePage.jsx         Hero + Projects + AboutMe + Skills + Contact
│   ├── ProjectPage.jsx      All project sections
│   └── AboutMePage.jsx      Full about, skills, fun facts
├── App.jsx                  Routes + layout
├── index.css                Tailwind imports + custom theme tokens + flow-text animation
└── main.jsx                 App entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/piyushNegiDev/piyush-portfolio.git

# Navigate into the project
cd piyush-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root with your EmailJS credentials:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Deployment

Deployed on **Vercel**. Pushes to `main` trigger automatic deployments.

---

## 👨‍💻 Author

**Piyush Negi**
[GitHub](https://github.com/piyushNegiDev) · [Email](mailto:piyushnegi381@gmail.com)