// Karim Wael's Skills & Experience
// NOTE: SkillNames enum keys MUST match the Spline keyboard keycap object names.
// The original keyboard has these keycaps baked in, so we keep matching names
// but update labels/descriptions to reflect Karim's perspective.

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  HUAWEIAI = "huawei-ai",
  NVIDIA_DL = "nvidia-dl",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "DOM manipulation & real-time WebSocket bridges 🔌⚡",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type-safe architectures for enterprise systems 🔒💎",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic markup & accessible interfaces 🏗️📝",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Glassmorphism, animations & responsive layouts 🎨✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component architectures & state management mastery ⚛️🚀",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue.js",
    shortDescription: "Progressive JavaScript framework for building UIs 🟢⚡",
    color: "#42b883",
    icon: "https://v2.vuejs.org/images/logo.png",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React with SSR, SSG & API routes 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Rapid UI prototyping with utility-first CSS 🌪️🎯",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Scalable backend APIs & real-time discovery 🔙🚀",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express.js",
    shortDescription: "Minimalist web framework for Node.js backends 🏎️🛠️",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational databases & high-integrity data 🐘💾",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL document stores for flexible scaling 🍃📊",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control & branch management 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Open source collaboration & DevOps workflows 🐙🔗",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Python",
    shortDescription: "ML pipelines, research & AI-driven automation 🐍🧠", 
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "C++",
    shortDescription: "Systems programming, STL & hardware integration ⚙️⚡",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Real-time databases, auth & cloud storage 🔥☁️",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Enterprise CMS & university portal foundations 🐘🌐",
    color: "#21759b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "System administration & secure infra operations 🐧💻",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Hyper-efficient containerization & microservices 🐳🏗️",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "Arduino",
    shortDescription: "Embedded systems, robotics & sensor telemetry 🤖🔌",
    color: "#00979d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Managed ML services & cloud infra (AWS Academy Graduate) ☁️🏆",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "ML Foundations",
    shortDescription: "Amazon SageMaker pipelines & automated remediation 🤖📈",
    color: "#f7931e",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "MySQL",
    shortDescription: "Structured query logic & high-concurrency data 🗄️⚡",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Three.js",
    shortDescription: "3D rendering & interactive visual logic 🎮✨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  [SkillNames.HUAWEIAI]: {
    id: 26,
    name: "huawei-ai",
    label: "HCIA-AI V4.0",
    shortDescription: "Certified AI Associate — Huawei ICT Academy 🏆🧠",
    color: "#ff0000",
    icon: "https://www.huawei.com/assets/img/logo.svg",
  },
  [SkillNames.NVIDIA_DL]: {
    id: 27,
    name: "nvidia-dl",
    label: "Nvidia Deep Learning",
    shortDescription: "Fundamentals of Deep Learning — Nvidia DLI 🤖🔥",
    color: "#76b900",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2026",
    endDate: "Present",
    title: "Machine Learning Engineering Intern",
    company: "FlyRank AI",
    description: [
      "Contributing to applied machine learning engineering workflows, model evaluation, and inference optimization.",
      "Developing automated telemetry preprocessing pipelines and evaluation benchmarking for predictive models.",
      "Collaborating with engineering leads to validate model accuracy, edge-case resilience, and deployment readiness.",
    ],
    skills: [
      SkillNames.PRETTIER, // Python
      SkillNames.GCP,      // ML Foundations
      SkillNames.AWS,
      SkillNames.DOCKER,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "Sep 2025",
    endDate: "Present",
    title: "Vice Chairman (Formerly Webmaster & R&D Co-Head)",
    company: "IEEE MIU Student Branch",
    description: [
      "Promoted to Vice Chairman (Sep 2026) to direct technical strategy, organizational governance, and cross-committee alignment across the student branch.",
      "Lead developer of IEEEMIU-PORTAL (custom PHP 8.2 MVC LMS, automated grading, and FPDF certification workflows), with later UI redesign collaboration.",
      "Directed student developers across technical tracks and earned a Certificate of Appreciation as Course Assistant in the Arduino & Python Junior Program (20 training hours).",
      "SmartGen Championship 2026: Served as Participation Manager and TA Lead, coordinating logistics, mentoring, and robotics curriculum for 30+ high school participants across 10 schools.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.VIM, // MySQL
      SkillNames.DOCKER,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "Jul 2026",
    endDate: "Sep 2026",
    title: "Agentic AI Intern",
    company: "Netpoint Software Solutions",
    description: [
      "Developed autonomous multi-agent AI systems and automated workflows using commercial LLM APIs, Google ADK, and structured JSON schemas.",
      "Engineered an end-to-end 'Meeting Notes → Action Items' agent parsing transcripts and extracting deliverable task assignments, plus an intern progress tracker & challenge generator.",
      "Collaborated in a cross-functional squad to prototype, test, and demonstrate live agentic pipelines during technical showcases.",
    ],
    skills: [
      SkillNames.PRETTIER, // Python
      SkillNames.NODEJS,
      SkillNames.TS,
      SkillNames.GIT,
    ],
  },
  {
    id: 4,
    startDate: "Jun 2026",
    endDate: "Present",
    title: "Ambassador (ID: SCA004)",
    company: "IEEE Sensors Council Egypt Chapter",
    description: [
      "Representing the IEEE Sensors Council Egypt Chapter, driving technical outreach, partnerships, and workshops across Egyptian engineering student branches.",
      "Bridging physical sensor hardware and embedded telemetry with applied Machine Learning and software systems.",
    ],
    skills: [
      SkillNames.NGINX,    // Arduino
      SkillNames.PRETTIER, // Python
      SkillNames.NPM,      // C++
    ],
  },
  {
    id: 5,
    startDate: "Nov 2026",
    endDate: "Nov 2026",
    title: "AI & Data Systems Engineer (Galactic Problem Solver Recognition)",
    company: "NASA Space Apps Challenge — Team The Fireflies",
    description: [
      "Co-engineered FLARE AI (Fire & Low-Gravity Archive Research Engine) for the 2026 'Flame in Freefall' challenge, ingesting and harmonizing 1,157 historical NASA PSI runs and 10,079 measurements across 6 spaceflight investigations.",
      "Contributed to the ETL & provenance pipeline, domain-gated similarity ranking engine, and guardrail-enforced RAG copilot with verbatim quote checks.",
      "Eliminated SQLAlchemy Cartesian joins and N+1 ORM hydration causing Render OOMs (~43x faster local assistant retrieval in dev testing).",
    ],
    skills: [
      SkillNames.PRETTIER, // Python
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.POSTGRES,
      SkillNames.GIT,
    ],
  },
  {
    id: 6,
    startDate: "Nov 2025",
    endDate: "Aug 2026",
    title: "Public Relations Member",
    company: "MSP Tech Club — MIU",
    description: [
      "Contributed to technical outreach, campus event visibility, and student community engagement strategies.",
      "Bridged engineering workshops with broader developer participation across campus.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
    ],
  },
  {
    id: 7,
    startDate: "Oct 2025",
    endDate: "Oct 2025",
    title: "Technical Team Lead (Galactic Problem Solver Recognition)",
    company: "NASA Space Apps Challenge — Team Moon Walkers",
    description: [
      "Led Team 'Moon Walkers' in the October 4–5, 2025 NASA International Space Apps Challenge, earning official Galactic Problem Solver project completion recognition.",
      "Built 'ProbCast' — an environmental intelligence prototype ingesting NASA POWER satellite telemetry to model rainfall and climate probabilities.",
      "Later evolved the platform into the Aether Climate Dashboard (FastAPI + Chart.js + Leaflet.js) with 120-second API response caching.",
    ],
    skills: [
      SkillNames.PRETTIER, // Python
      SkillNames.JS,
      SkillNames.GIT,
    ],
  },
  {
    id: 8,
    startDate: "Oct 2024",
    endDate: "Oct 2025",
    title: "Technical Team Member",
    company: "IEEE MIU Student Branch",
    description: [
      "Built hardware/software prototypes (FireBot RC firefighting robot, Arduino sensor systems) for branch technical programs.",
      "Completed the IEEE MIU Python curriculum and earned HackerRank verified certifications in Problem Solving and SQL.",
    ],
    skills: [
      SkillNames.NGINX,    // Arduino
      SkillNames.NPM,      // C++
      SkillNames.PRETTIER, // Python
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "⚠️ Light mode activated — your retinas have been warned!",
    "Switching to light mode... are your eyes ready for this?",
    "Caution: Maximum luminance deployed. Proceed with sunglasses!",
    "Light mode: Because some people just want to watch the world glow.",
    "SYSTEM_DIAG: Light mode engaged. Threat level: BLINDING.",
  ],
  dark: [
    "Welcome back to the dark side. We have cookies and lower power consumption.",
    "Dark mode restored. Your eyes thank you from the bottom of their retinas.",
    "SYSTEM_DIAG: Dark mode engaged. All systems nominal.",
    "The void welcomes you back. Cosmic Hacker mode: ACTIVE.",
    "Dark mode on. Finally, someone who understands true sophistication.",
  ],
};

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  description: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "Fall 2024",
    endDate: "Present",
    degree: "B.Sc. in Computer Science — Data and Information, Cybersecurity Focus",
    institution: "Misr International University (MIU)",
    description: "Active undergraduate (enrolled since Fall 2024) focusing on Data & Information systems, Cybersecurity, Applied AI, and Systems Engineering.",
  },
];
