# Ashlesh D Hegde — Portfolio

 A personal portfolio website designed to showcase my work, experience, skills, and projects.

 Built with a focus on **clean visuals, smooth interactions, responsive layouts, and a playful bento-style design.**

 ## ✨ Highlights

 - Modern bento-style portfolio layout
- Fully responsive across desktop, tablet, and mobile
- Smooth scrolling and scroll-based animations
- Animated hero section
- Dedicated About page
- Featured projects section
- Interactive project cards
- Resume download
- GitHub and LinkedIn integration
- Accessible navigation and focus states
- Reduced-motion support
- Fast Vite-powered development and production builds

 ## 🛠️ Tech Stack

 - **React** — UI development
- **Vite** — Development and build tooling
- **Tailwind CSS** — Styling and responsive layouts
- **Framer Motion** — Animations and transitions
- **Lenis** — Smooth scrolling
- **React Router** — Page routing

 ## 📸 Preview

 ### Home

 \<!-- Add your screenshot here --\>

 ### About

 \<!-- Add your About page screenshot here --\>

 ## 📂 Project Structure

```
src/
├── components/
│   ├── Bento.jsx
│   ├── Closing.jsx
│   ├── Glyph.jsx
│   ├── Mark.jsx
│   ├── Nav.jsx
│   ├── ProjectArt.jsx
│   ├── Projects.jsx
│   └── Reveal.jsx
│
├── data/
│   └── content.js
│
├── lib/
│   └── smoothScroll.js
│
├── pages/
│   ├── About.jsx
│   └── Home.jsx
│
├── App.jsx
└── index.css
```

 ## 🚀 Getting Started

 Clone the repository and install the dependencies:

```
git clone <your-repository-url>
cd <project-folder>
npm install
```

 Start the development server:

```
npm run dev
```

 The site will be available at:

```
http://localhost:5173
```

 Create a production build with:

```
npm run build
```

 Preview the production build with:

```
npm run preview
```

 ## 🎨 Design

 The portfolio uses a warm, minimal visual system built around:

 - Cream backgrounds
- Peach bento cards
- Brown typography
- Orange accents
- Large display typography
- Rounded UI elements
- Subtle motion and interaction

 The goal was to keep the interface **simple, expressive, and personal** without sacrificing usability.

 ## 📱 Responsive Design

 The layout adapts across:

 - Desktop
- Tablet
- Mobile

 The hero layout uses different grid structures at larger breakpoints while cards become a single flowing layout on smaller screens.

 ## ⚡ Animations

 Animations are intentionally subtle and are used to make the interface feel more dynamic.

 They include:

 - Hero card entrance animations
- Scroll reveal animations
- Project section transitions
- Hover interactions
- Rotating scroll indicator
- Animated closing section

 Animations are automatically reduced when the user has `prefers-reduced-motion` enabled.

 ## 📄 Resume

 The latest resume can be accessed directly from the portfolio through the **Resume** link.

 The PDF is stored in:

```
public/Ashlesh-D-Hegde-Resume.pdf
```

 ## 🖼️ Personal Photo

 The hero portrait can be added at:

```
public/portrait.jpg
```

 If no image is provided, the portfolio displays a fallback design instead.

 ## ✏️ Updating Content

 Most portfolio content can be updated from:

```
src/data/content.js
```

 This includes:

 - Profile information
- Social links
- Projects
- Skills
- Experience
- Education
- Certifications
- Achievements
- Resume path

 This keeps the content separate from the UI components and makes future updates easier.

 ## 🌐 Pages

 | Page | Route |
| --- | --- |
| Home | `/` |
| About | `/about` |

 ## 📦 Deployment

 The project generates a static production build in:

```
dist/
```

 It can be deployed to platforms such as **Vercel**, **Netlify**, or **GitHub Pages** with the appropriate SPA routing configuration.

 ## 👋 About Me

 I'm **Ashlesh D Hegde**, a developer interested in building thoughtful digital experiences, experimenting with modern web technologies, and turning ideas into polished products.

 If you'd like to connect or collaborate, feel free to reach out.

 ## 🔗 Connect

 - GitHub
- LinkedIn
- Email

---

 Made with React, curiosity, and way too much attention to small details.

 This version makes the README feel much more like **“here's my portfolio project”** rather than **“here's the internal technical documentation for maintaining my portfolio.”**