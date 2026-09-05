// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the
//  portfolio — components read from it and need no changes.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ashlesh D Hegde',
  role: 'Full Stack Developer',
  location: 'Mangalore, India',
  greeting: 'Hello',
  email: 'ashlesh208@gmail.com',
  phone: '+91 8660497382',
  github: 'https://github.com/ASHLE5H',
  githubHandle: 'ASHLE5H',
  linkedin: 'https://linkedin.com/in/ashle5h',
  linkedinHandle: 'ashle5h',
  resume: '/Ashlesh-D-Hegde-Resume.pdf',
  portrait: '/profile.jpeg', // drop your photo here; a mark card shows if missing
  headline: ['Code, Scale,', 'Ship.'],
  intro:
    'I’m Ashlesh, a Full Stack Developer who likes building things that make you stop and think about the engineering behind them. I enjoy figuring things out, breaking things apart, rebuilding them better, and eventually arriving at something that feels deceptively simple.',
  now: 'Currently Software Engineer @ Sky360.AI',
}

export const nav = [
  { label: 'Projects', to: '/#projects', icon: 'box' },
  { label: 'About', to: '/about', icon: 'spark' },
  { label: 'Resume', href: profile.resume, icon: 'doc', external: true },
]

export const socials = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Resume', href: profile.resume, icon: 'doc' },
]

// ── Toolbox: the icon + title + subtitle list card
export const toolbox = [
  { name: 'React & Tailwind', kind: 'Interfaces', icon: 'atom' },
  { name: 'Node.js & Express', kind: 'APIs and services', icon: 'hex' },
  { name: 'MongoDB · PostgreSQL', kind: 'Data layer', icon: 'db' },
  { name: 'Python', kind: 'ML and scripting', icon: 'py' },
  { name: 'Docker · Git', kind: 'Ship and version', icon: 'box' },
  { name:'ML & Gen AI' , kind:'Models , prediction and LLMs'},
  { name: 'Tableau · Power BI', kind: 'Analytics', icon: 'chart' },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'Python', 'SQL'] },
  { group: 'Frontend', items: ['React', 'TailwindCSS', 'DaisyUI', 'Zustand', 'React Query'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { group: 'Data', items: ['MongoDB', 'PostgreSQL'] },
  { group: 'AI / ML', items: ['Machine Learning', 'Generative AI', 'Signal Processing'] },
  { group: 'Tooling', items: ['Git', 'Docker', 'Postman', 'Tableau', 'Power BI'] },
]

// ── Featured projects: image card, tags over the artwork
export const projects = [
  {
    id: 'connectify',
    year: '2025',
    title: 'Connectify',
    blurb:
      'A full featured MERN application for real time language exchange, chat, video calls and a modern responsive UI, with secure authentication and one-on-one video calling built on Stream SDKs.',
    tags: ['FULL STACK', 'Real-time'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Zustand', 'Stream Chat/Video'],
    link: 'https://github.com/ASHLE5H/CONNECTIFY',
    accent: '#99470F',
    art: 'chat',
  },
  {
    id: 'texel',
    year: '2025',
    title: 'Texel',
    blurb:
      'A full-stack AI application that generates high-quality images from text prompts, with ClipDrop text-to-image, credit-based usage metering and a Razorpay payment gateway.',
    tags: ['GenAI', 'Payments'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'ClipDrop API', 'Razorpay', 'Cloudinary'],
    link: 'https://github.com/ASHLE5H/Texel',
    accent: '#FF5722',
    art: 'image',
  },
  {
    id: 'aigit',
    year: '2024',
    title: 'AiGit',
    blurb:
      'A Git alternative that runs version control commands straight from natural language, built around a command parsing engine and bundled into an installer so beginners can pick it up in minutes.',
    tags: ['Python', 'Developer tool'],
    stack: ['Python', 'Inno Setup', 'CLI'],
    link: 'https://github.com/ASHLE5H/AIGIT',
    accent: '#8B3FDE',
    art: 'terminal',
  },
   {
    id: 'upi',
    year: '2024',
    title: 'UPI Fraud Detection',
    blurb:
      'A machine learning project for detecting fraudulent UPI transactions through data analysis, feature engineering, and classification models, with a complete pipeline from raw transaction data to a trained fraud detection model.',
    tags: ['ML', 'Fraud Detection'],
    stack: ['Python', 'NumPy', 'Pandas' ,'Scikit-learn', 'Matplotlib' ,'Seaborn',],
    link: 'https://github.com/ASHLE5H/UPI-FRAUD-DETECTION',
    accent: '#8B3FDE',
    art: 'ML',
  },
]

export const aboutStatements = [
  "I'm Ashlesh, a full stack developer based in Mangalore, building web products end to end data model, API, and the last few pixels of the interface.",
  'My world revolves around full stack engineering, AI, and the space between a problem and its solution.',
]

export const facts = [
  { k: 'Based in', v: 'Mangalore, India' },
  { k: 'Languages', v: 'English · Hindi · Kannada' },
  { k: 'Focus', v: 'Full Stack · ML · GenAI' },
  { k: 'Open to', v: 'Full-time roles' },
]

export const experience = [
  {
    org: 'Sky360.AI Tech LLP',
    role: 'Software Engineer',
    period: '2026',
    points: [
      'Developed and customized reusable React components across HRMS and DMS modules.',
      'Analyzed application architecture, data flow and database interactions to ship feature enhancements across end-to-end workflows.',
      'Collaborated on debugging, issue resolution and requirement discussions.',
    ],
  },
]

export const education = [
  {
    school: 'Canara Engineering College',
    detail: 'B.E. in Artificial Intelligence and Machine Learning',
    place: 'Mangalore',
    period: '2022 — 2026',
  },
  {
    school: 'Vidyodaya PU College',
    detail: 'PUC (12th)',
    place: 'Udupi',
    period: '2020 — 2022',
  },
  {
    school: 'G M Vidyaniketan Public School',
    detail: 'SSLC (10th)',
    place: 'Brahmavar',
    period: '2019 — 2020',
  },
]

export const certifications = [
  { title: 'Unlocking the Basics of Machine Learning', issuer: 'Accolade Tech Solutions' },
  { title: 'Internet of Things — Workshop', issuer: 'Kakunje Software' },
  { title: 'Information Security System — Workshop', issuer: 'NITK, Surathkal' },
  { title: 'Basics & Intermediate JavaScript', issuer: 'HackerRank' },
  { title: 'Frontend Developer (React) · React (Basic)', issuer: 'HackerRank' },
]

export const achievements = [
  {
    title: 'Third Place — Lazarus Missions Hackathon',
    detail: 'Machine Learning & Signal Processing track, organized by IEEE at NITK, Surathkal.',
    icon: 'medal',
  },
  {
    title: '2 Hackathons · 1 Ideathon',
    detail: 'Built and pitched under time pressure with cross-functional teams.',
    icon: 'spark',
  },
]

export const badgeText = 'SCROLL DOWN • TO CHECK OUT MY WORK • '

export const closingHeadline = ['Place where', 'conversations begin.']    