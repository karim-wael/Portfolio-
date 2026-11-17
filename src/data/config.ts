const config = {
  title: "Karim Wael | AI & Backend Developer · Systems Software Builder",
  description: {
    long: "Explore the portfolio of Karim Wael — AI & Backend Developer, Cybersecurity-focused CS student, and Vice Chairman at IEEE MIU Student Branch. Featuring FLARE AI (NASA Space Apps 2026 Galactic Problem Solver), Project Revenant (.NET 8 + mTLS + ONNX), ECE Lab Management (Laravel 11), SOC AI Omega, and TALKY (C++ WebSockets).",
    short: "Karim Wael — AI & Backend Developer & Systems Builder. Vice Chairman @ IEEE MIU, Sensors Council Egypt Ambassador, and 2x NASA Space Apps Galactic Problem Solver.",
  },
  keywords: [
    "Karim Wael",
    "AI & Backend Developer",
    "Systems Software Engineer",
    "Cybersecurity-focused Computer Science",
    "Machine Learning",
    "Agentic AI",
    "RAG",
    "pgvector",
    "ONNX Runtime",
    "Wazuh",
    "MITRE ATT&CK",
    "Sigma Rules",
    "mTLS",
    "Ed25519",
    "FastAPI",
    "Next.js",
    "React",
    "C++",
    "Python",
    "C# .NET 8",
    "Laravel 11",
    "PHP",
    "NASA Space Apps Galactic Problem Solver",
    "Vice Chairman IEEE MIU Student Branch",
    "IEEE Sensors Council Egypt Chapter Ambassador",
  ],
  author: "Karim Wael",
  email: "kwael7934@gmail.com",
  phone: "01556330320",
  site: "https://karim-wael.vercel.app",

  // for github stars button
  githubUsername: "karim-wael",
  githubRepo: "Portfolio-",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/karim-wael-dev/",
    instagram: "https://www.instagram.com/kimo.cpp/",
    facebook: "",
    github: "https://github.com/karim-wael",
  },
};
export { config };
