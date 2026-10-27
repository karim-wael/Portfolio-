const config = {
  title: "Karim Wael | AI Engineer & Cybersecurity Systems Builder",
  description: {
    long: "Explore the portfolio of Karim Wael, an AI and Cybersecurity Systems Engineer. Building secure intelligent systems at the intersection of AI, cybersecurity, and scalable software engineering.",
    short: "Karim Wael — AI Engineer & Cybersecurity Systems Builder. Building secure intelligent systems across AI, cybersecurity, and scalable infrastructure.",
  },
  keywords: [
    "Karim Wael",
    "AI Engineer",
    "Cybersecurity Engineer",
    "Machine Learning",
    "RAG",
    "AI Agents",
    "Wazuh",
    "MITRE ATT&CK",
    "Sigma Rules",
    "FastAPI",
    "React",
    "Systems Architecture",
    "C++",
    "Python",
    "Robotics",
    "IEEE Sensors Council Egypt Ambassador",
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
