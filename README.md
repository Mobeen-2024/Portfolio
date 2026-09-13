# ⚡ Dual-Reality Portfolio

<div align="center">

  <!-- Badges -->
  <a href="https://github.com/Mobeen-2024/Portfolio">
    <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://lucide.dev/">
    <img src="https://img.shields.io/badge/Icons-Lucide_React-F56565?style=for-the-badge" alt="Lucide React" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />

  <br /><br />

  <h3><b>Mobeen</b> — Full-Stack Developer & Systems Architect</h3>
  <p align="center">
    <i>Bridging high-level business strategy with deep architectural code through a seamless dual-reality experience.</i>
  </p>

  <p align="center">
    <a href="#-the-dual-reality-concept">The Concept</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-customization">Customization</a> •
    <a href="#-contact--connect">Connect</a>
  </p>

</div>

---

## 👁️ The Dual-Reality Concept

Most portfolios only tell half the story. The **Dual-Reality Portfolio** bridges two fundamentally different perspectives into a single unified web experience:

| Reality Mode | Visual Theme | Audience & Focus | Core Narrative |
| :--- | :--- | :--- | :--- |
| **Executive Mode** | Clean Minimalist Slate & Sapphire | Executives, Founders & Stakeholders | **Strategy, Market Influence & ROI.** Translating complex data into boardroom clarity, sustainable growth, and actionable business metrics. |
| **Architect Mode** *(God Mode)* | Cyberpunk Matrix Terminal & Emerald Monospace | Technical Leads, Engineers & Architects | **Systems, Algorithms & Pipelines.** Low-latency data pipelines, ML attribution engines, deduplication at scale, and high-performance engineering. |

> [!TIP]
> Click the **Biometric Fingerprint Scanner** in the navigation bar to trigger a real-time laser scan and shift realities on the fly.

---

## ✨ Key Features

- **Biometric Identity Switcher**: Interactive biometric scan sequence (`ScanOverlay` & `BiometricScanner`) triggering seamless state and audio-visual theme transitions.
- **Dynamic Content Swapping**: Reactive content rendering powered by React `useMemo`, dynamically swapping Hero messaging, About stories, metrics, and Project architectures.
- **Immersive Visual Infrastructure**:
  - Matrix digital rain & animated ambient grid effects in Architect mode.
  - Crisp, modern typography and clean glassmorphic elevations in Executive mode.
- **Multi-Touch Project Showcases**:
  - Executive perspective: Business impact, ARR, ROI optimization, and enterprise toolchains.
  - Architect perspective: Algorithmic complexity, ETL pipelines, neural churn models, and tech stacks (Python, Snowflake, TensorFlow, C++).
- **Dual-Reality Contact Gateway**:
  - Interactive communication protocol integrated with Formspree.
  - Automatically tags transmissions with telemetry payloads (`EXECUTIVE` vs `ARCHITECT`).
  - Animated submission feedback with verification status.
- **Blazing Fast Performance**: Zero-bloat bundle compiled with Vite and React 19, achieving sub-second load times and silky-smooth 60fps animations.

---

## 🛠️ Tech Stack

```
Frontend Core       :: React 19.2 (Functional Components & Hooks)
Build Tool          :: Vite 7.x (Lightning-fast HMR)
Styling Engine      :: Tailwind CSS 3.4 + PostCSS + Autoprefixer
Iconography         :: Lucide React
Testing Engine      :: Vitest + React Testing Library + JSDOM
Form Infrastructure :: Formspree (Headless Contact API)
Code Quality        :: ESLint 9 + Stylelint + Prettier
```

---

## 📁 Project Structure

```bash
My-Portfolio/
├── public/                     # Static assets, icons, and favicons
├── src/
│   ├── assets/                 # Brand assets and imagery
│   ├── components/
│   │   ├── layout/             # Structural frame components
│   │   │   ├── Navigation.jsx       # Header with smooth scrolling & mode switch
│   │   │   ├── BackgroundEffects.jsx# Dynamic canvas/grid ambient effects
│   │   │   ├── ScanOverlay.jsx      # Biometric laser beam transition overlay
│   │   │   ├── IdentityStatus.jsx   # HUD indicator for active reality
│   │   │   └── AgentConsole.jsx     # Dual-Reality Agent Console & Terminal Co-Pilot
│   │   ├── sections/           # Portfolio content sections
│   │   │   ├── Hero.jsx             # Dual-perspective headline, typewriter & CTAs
│   │   │   ├── About.jsx            # 20-year journey, 2x2 metrics grid & systems history
│   │   │   └── Contact.jsx          # Formspree transmission portal
│   │   └── ui/                 # Reusable UI primitives
│   │       ├── BiometricScanner.jsx # Interactive fingerprint button
│   │       ├── ProjectCard.jsx      # Dual-mode project card with stack tags
│   │       └── ProjectDetailModal.jsx # Deep-dive architecture & strategy drawer
│   ├── content/                # Declarative portfolio content & data
│   │   ├── Hero_content.jsx         # Executive & Architect hero copies
│   │   ├── About_me.jsx             # Bio storylines and quantifiable metrics
│   │   ├── projects.jsx             # 5 structured project case studies with pipeline specs
│   │   └── agent_knowledge.js       # Agent roles, CLI routines, and knowledge base
│   ├── hooks/                  # Custom React hooks (useTypewriter)
│   ├── tests/                  # Vitest automated test suites
│   │   ├── setup.js                 # Testing environment setup & DOM mocks
│   │   ├── App.test.jsx             # App layout & modal integration tests
│   │   └── AgentConsole.test.jsx    # Knowledge engine & CLI command tests
│   ├── theme/                  # Theme constants and color tokens
│   ├── App.jsx                 # Central application state & mode orchestrator
│   ├── index.css               # Base Tailwind imports & CSS custom properties
│   └── main.jsx                # React root mount
├── index.html                  # HTML5 shell & SEO meta configuration (Schema.org JSON-LD)
├── package.json                # Dependencies, scripts, and package metadata (v1.1.0)
├── tailwind.config.js          # Tailwind theme extensions & font definitions
├── vite.config.js              # Vite bundler configuration
└── vitest.config.js            # Vitest unit & integration test configuration
```

---

## 🚀 Quick Start

### Prerequisites
Make sure you have Node.js (version 18 or higher recommended) and npm installed:
```bash
node -v
npm -v
```

### 1. Clone the Repository
```bash
git clone https://github.com/Mobeen-2024/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production output will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization

All portfolio content is decoupled from layout components for effortless personalization:

| What to Update | File Location | Description |
| :--- | :--- | :--- |
| **Hero Copy** | `src/content/Hero_content.jsx` | Modify titles, subheadings, and labels for both modes. |
| **Bio & Metrics** | `src/content/About_me.jsx` | Update your background story, years of experience, and metric counters. |
| **Case Studies** | `src/content/projects.jsx` | Add or edit projects, outcomes, tech stack badges, and architectural taglines. |
| **Contact Form** | `src/components/sections/Contact.jsx` | Replace Formspree endpoint with your unique form ID (`https://formspree.io/f/YOUR_FORM_ID`). |
| **SEO Metadata** | `index.html` | Update title, author, OpenGraph tags, and social cards. |

---

## 🤝 Contributing

Contributions, issues, and feature suggestions are always welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact & Connect

**Mobeen**  
- **GitHub**: [@Mobeen-2024](https://github.com/Mobeen-2024)  
- **Repository**: [Mobeen-2024/Portfolio](https://github.com/Mobeen-2024/Portfolio)  

---

<div align="center">
  <sub>Engineered with precision. Built with React 19 & Tailwind CSS.</sub>
</div>
