import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiSocketdotio,
  SiStreamlit,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
  problem?: string;
  solution?: string;
  shortDescription?: string;
  approach?: string;
  architectureDesc?: string;
  implementationDesc?: string;
  securityConsiderations?: string;
  features?: string[];
  impact?: string;
};

const projects: Project[] = [
  {
    id: "soc-ai",
    category: "AI + Cybersecurity",
    title: "SOC AI Omega",
    src: "/assets/projects-screenshots/soc-ai/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/karimcpp110/SOC_ANALYSIS_AI",
    shortDescription: "AI-assisted SOC monitoring platform achieving 99% threat detection accuracy.",
    problem: "Traditional Security Operations Center (SOC) workflows suffer from manual threat analysis overload, leading to high triage times and critical detection delays.",
    architectureDesc: "Packet Monitoring -> ML Classification -> Threat Scoring -> Wazuh Integration -> MITRE ATT&CK Mapping.",
    implementationDesc: "Designed and implemented a modular classification pipeline utilizing a Scikit-Learn Random Forest model. Telemetry alerts parse dynamically through Sigma Rules and map directly to appropriate MITRE ATT&CK tactics inside a FastAPI backend. Configured automatic Dockerized containment triggers upon high-criticality alert thresholds.",
    securityConsiderations: "Enforced off-grid local deployment to protect sensitive corporate telemetry from cloud-based leaks. Constructed strict packet signature validation checks on all incoming sniffed packets to prevent buffer overflow attacks on the parsing engine.",
    impact: "Transformed passive security monitoring into an active containment ecosystem, reducing response latency with 99.2% classification accuracy.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Threat Detection & Autonomous Remediation
          </TypographyP>
          <TypographyP className="font-mono">
            A real-time Security Operations Center dashboard with AI-driven
            threat analysis, automated incident response, and a Hyper-Drive
            autonomous workflow engine. Integrates scikit-learn ML models for
            anomaly detection and features a premium glassmorphism HUD interface.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Real-time threat feed with ML-based severity scoring</li>
            <li className="font-mono">Autonomous &quot;Hyper-Drive&quot; mode for zero-touch remediation</li>
            <li className="font-mono">Interactive network topology visualization</li>
            <li className="font-mono">Incident timeline with automated forensics reports</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "chiggabot",
    category: "Local AI Agents",
    title: "Chiggabot",
    src: "/assets/projects-screenshots/chiggabot/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    shortDescription: "Fully local AI agent with RAG, code execution, and multi-language runtime.",
    problem: "Integrating cloud-based LLM APIs compromises codebase privacy, creates recursive API subscription bills, and increases single-point failure dependencies.",
    architectureDesc: "User Query -> Embedding Model -> Vector Database -> Local LLM -> Response Generation & Execution Sandbox.",
    implementationDesc: "Built an entirely local agent engine powered by Ollama local models. Configured a custom Retrieval-Augmented Generation (RAG) pipeline leveraging FAISS and Chroma vector stores for codebase scanning. Added local text-to-speech voice synthesis and a secure execution sandbox using Docker containers.",
    securityConsiderations: "Script evaluation occurs in an isolated Docker runtime environment with capped resources and blocked networking, preventing malicious code from accessing the host OS filesystem or local network.",
    impact: "Created a private, zero-subscription development assistant completely independent of internet access or third-party servers.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Zero Subscriptions. Full Intelligence. Local Hardware.
          </TypographyP>
          <TypographyP className="font-mono">
            Chiggabot is a high-performance, subscription-free AI agent running
            entirely on local hardware. Powered by Ollama with real-time web
            access via RAG, it features an unfiltered personality, text-to-speech
            capabilities, and a custom knowledge pipeline. No cloud dependency,
            no API costs, no limits.
          </TypographyP>
          <ProjectsLinks />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Local LLM inference via Ollama — zero subscription cost</li>
            <li className="font-mono">Real-time web search and RAG knowledge augmentation</li>
            <li className="font-mono">Text-to-speech with personality-driven voice synthesis</li>
            <li className="font-mono">Custom prompt engineering for unfiltered responses</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "talky",
    category: "Distributed Systems",
    title: "TALKY",
    src: "/assets/projects-screenshots/talky/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.cpp,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.socketio,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    shortDescription: "High-performance messaging system built with React + C++ and WebSocket architecture.",
    problem: "Real-time communication platforms require low-latency packet routing, high concurrency handling, and strict user privacy configurations.",
    architectureDesc: "Client -> Node.js Authentication Layer -> Socket.io Bridge -> C++ WebSocket Server -> Thread Pool Processing.",
    implementationDesc: "Designed a hybrid backend routing high-throughput binary messages via a C++ WebSocket server using custom thread pools and a non-blocking event loops, while routing standard REST login requests through a Node.js Express server.",
    securityConsiderations: "Implemented a custom key-exchange protocol ensuring end-to-end encryption. Built structural bounds checks on incoming binary websocket packets to prevent buffer overflow attacks in the C++ layer.",
    impact: "Delivered sub-millisecond packet transmission infrastructure capable of handling concurrent client nodes with absolute privacy.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enterprise Messaging = WhatsApp + Telegram, Built From Scratch
          </TypographyP>
          <TypographyP className="font-mono">
            TALKY is an enterprise-grade, high-performance hybrid messaging
            platform combining the best of WhatsApp and Telegram. Built with
            a C++ backend for raw speed and a React frontend for premium UI,
            it features end-to-end encryption, real-time WebSocket
            communication, and a security-first architecture.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">C++ WebSocket server for sub-millisecond message routing</li>
            <li className="font-mono">React frontend with real-time state synchronization</li>
            <li className="font-mono">End-to-end encryption with custom key exchange protocol</li>
            <li className="font-mono">Dockerized microservice deployment pipeline</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Real-time messaging with typing indicators and read receipts</li>
            <li className="font-mono">Group chats with admin controls and media sharing</li>
            <li className="font-mono">Dark/light theme with glassmorphism UI</li>
            <li className="font-mono">REST API for user management and authentication</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ieee-portal",
    category: "Systems Engineering",
    title: "IEEE MIU Portal",
    src: "/assets/projects-screenshots/ieee-portal/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "",
    github: "https://github.com/karimcpp110/ieee-miu",
    shortDescription: "Rebuilt a university platform through reverse-engineered architecture and automation.",
    problem: "Student organizations lack integration options with restrictive university software systems, forcing manual data updates and Excel chaos.",
    architectureDesc: "Client Browser Requests -> Custom PHP MVC Controller -> Reverse Engineered MIU Endpoint Authentication -> Secure MySQL DB Synchronization.",
    implementationDesc: "Reverse-engineered university portal network calls to automate verification routines for 100+ members. Rebuilt a custom PHP MVC-lite learning management dashboard to bypass legacy administration blocks.",
    securityConsiderations: "Secured user credentials by implementing single-session tokens that are never cached on the local disk. Configured parameterized MySQL query bindings to prevent SQL injections.",
    impact: "Centralized all branch operations into a single platform currently supporting and tracking the lifecycle of over 100 active members efficiently.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Complete University Portal — Reverse-Engineered & Rebuilt
          </TypographyP>
          <TypographyP className="font-mono">
            Built from scratch after reverse-engineering the Misr International
            University&apos;s official portal. Features a Learning Management
            System, automated grading pipeline, event management, and
            member dashboards. Serves the entire IEEE MIU student branch.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Full LMS with course management and automated grading</li>
            <li className="font-mono">Member dashboard with event registration and tracking</li>
            <li className="font-mono">Admin panel with analytics and content management</li>
            <li className="font-mono">Responsive design serving 100+ active members</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "probcast",
    category: "NASA Space Apps Challenge",
    title: "ProbCast",
    src: "/assets/projects-screenshots/probcast/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [PROJECT_SKILLS.python],
    },
    live: "",
    github: "https://github.com/karimcpp110/ProbCast",
    problem: "Event organizers lack localized, actionable environmental risk data from complex satellite datasets.",
    solution: "Transformed NASA POWER API data into a simple probability forecast for global coordinates.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Technical Team Lead @ Team Moon Walkers
          </TypographyP>
          <TypographyP className="font-mono">
            Developed as the Technical Team Lead in the 2024 NASA Space Apps Challenge (independent of IEEE).
            ProbCast transforms NASA POWER API datasets into actionable rainfall probability forecasts and
            environmental risk assessments for event organizers across any global coordinate.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Streamlit interactive dashboard with real-time data viz</li>
            <li className="font-mono">NASA POWER API integration for Earth observation data</li>
            <li className="font-mono">Probabilistic rainfall modeling with Python scientific stack</li>
            <li className="font-mono">Geospatial coordinate-based querying system</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "gheitbot",
    category: "AI Farming Assistant",
    title: "GheitBot",
    src: "/assets/projects-screenshots/gheitbot/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    github: "https://github.com/karimcpp110/GheitBot",
    problem: "Traditional farming in Egypt lacks real-time data on micro-climates and crop disease risk.",
    solution: "Developed an AI assistant integrating satellite weather and soil data for precision farming advice.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Precision Farming for Egypt
          </TypographyP>
          <TypographyP className="font-mono">
            GheitBot is an AI assistant tailored for Egyptian farmers, providing
            real-time agricultural intelligence. It integrates OpenWeather API,
            scrapes localized agricultural data, and uses ML-based models (Pandas)
            to provide crop recommendations and irrigation schedules via a
            premium Streamlit interface.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Streamlit + Pandas for data analysis and UI</li>
            <li className="font-mono">BeautifulSoup for localized web scraping</li>
            <li className="font-mono">Folium for geospatial mapping of farm health</li>
            <li className="font-mono">OpenWeather API integration for precise micro-climate alerts</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "smartgen",
    category: "Leadership & Education",
    title: "SmartGen Championship 2026",
    src: "/assets/projects-screenshots/smartgen/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.arduino, PROJECT_SKILLS.cpp, PROJECT_SKILLS.python],
      backend: [],
    },
    live: "",
    shortDescription: "Participation Manager, TA Lead, Mentor, and Instructor for an intensive Robotics & AI competition.",
    problem: "High-school students need practical, hands-on experience bridging academic learning with real-world robotics and AI applications.",
    solution: "Organized and executed a comprehensive robotics championship, mentoring students from ideation to fully functioning projects.",
    get content() {
      return (
        <div className="space-y-4 pb-10">
          <TypographyP className="font-mono text-2xl text-center">
            🙏 A Massive Thank-You to an Extraordinary Team 🙏
          </TypographyP>
          <TypographyP className="font-mono">
            Looking back at SmartGen Championship 2026, I can confidently say it was one of the most rewarding and inspiring experiences I’ve ever been part of.
          </TypographyP>
          <TypographyP className="font-mono">
            This intensive Robotics &amp; AI competition brought together passionate high-school students from grades 10 to 12, dedicated mentors, hardworking organizers, talented media teams, and an incredible faculty community — all united by innovation, collaboration, creativity, and the drive to build something impactful.
          </TypographyP>
          <TypographyP className="font-mono">
            Throughout this journey, I had the honor of serving as a Participation Manager, TA Lead, Mentor, and Instructor, where I was responsible for coordinating participant engagement, managing logistics and communication, mentoring students, supporting teams throughout the competition, and helping ensure the smooth execution of the entire event.
          </TypographyP>
          <TypographyP className="font-mono">
            Beyond the operational side, one of the most meaningful parts of the experience was being directly involved with students on both the technical and educational levels. I actively taught and explained robotics, AI, and programming concepts, guided students through technical challenges, followed up with teams and their projects, assisted them during development, and helped participants transform their ideas into real working solutions.
          </TypographyP>
          <TypographyP className="font-mono">
            Watching students go from uncertainty to confidence, and from simple ideas to fully functioning projects, was honestly one of the most rewarding parts of the entire experience.
          </TypographyP>
          <TypographyP className="font-mono">
            One of the highlights of this journey was participating in the school tours, where Zeiad Abo Gebba and I proudly represented the Computer Science faculty. During these visits, we introduced students to robotics, AI, programming, and the opportunities available within the CS field, while encouraging them to explore technology and innovation with confidence.
          </TypographyP>
          <TypographyP className="font-mono">
            Seeing students become excited about learning, building projects, and exploring the world of technology reminded us why initiatives like SmartGen truly matter.
          </TypographyP>
          <TypographyP className="font-mono">
            Inside the labs and throughout the competition days, the atmosphere was incredible. Every team brought creativity, determination, and passion to the event. Seeing students collaborate under pressure, solve real technical problems, and continuously improve their projects made every challenge worth it.
          </TypographyP>
          <TypographyP className="font-mono">
            This experience was much bigger than just organizing a competition — it was about creating an environment where students felt motivated to learn, innovate, collaborate, and believe in their abilities.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">🌟 Special Thanks</TypographyH3>

          <TypographyP className="font-mono font-bold mt-4 text-primary">🎓 Yassin Shendy</TypographyP>
          <TypographyP className="font-mono">
            Thank you for your leadership, trust, and continuous support throughout the competition. Your vision and belief in the team motivated all of us to push harder and deliver something truly meaningful.
          </TypographyP>

          <TypographyP className="font-mono font-bold mt-4 text-primary">🩺 The Doctors</TypographyP>
          <TypographyP className="font-mono">
            To all the doctors who attended, mentored, and judged the projects — thank you for sharing your expertise and helping bridge the gap between academic learning and real-world application. Your support and feedback elevated the quality of the competition and gave students an unforgettable learning experience.
          </TypographyP>

          <TypographyP className="font-mono font-bold mt-4 text-primary">👩‍🏫 TA Head &amp; TA Team</TypographyP>
          <TypographyP className="font-mono">
            A huge shout-out to Zeiad Abo Gebba for leading the TA team with dedication, professionalism, and nonstop effort throughout the competition.
            <br/><br/>
            And to every TA who prepared labs, answered questions, supported participants, solved problems, and worked tirelessly behind the scenes — thank you for being one of the strongest pillars of SmartGen 2026. Your patience, teamwork, energy, and commitment created an encouraging environment for every participant.
          </TypographyP>

          <TypographyP className="font-mono font-bold mt-4 text-primary">🏛️ Faculty &amp; Advisors</TypographyP>
          <TypographyP className="font-mono">
            Dr. Ayman Nabeel — thank you for attending, judging projects, and continuously supporting innovation, interdisciplinary learning, and student activities.
            <br/><br/>
            Khaled Hussin — your feedback and encouragement pushed students to think bigger, improve their work, and aim for higher-quality solutions.
            <br/><br/>
            Dr. Mehaseb Ahmed — thank you for your mentorship, guidance, and continuous support throughout the competition journey.
            <br/><br/>
            Ibrahim Lotfy — your effort, support, and contribution to the organization and smooth execution of the event were truly appreciated.
          </TypographyP>

          <TypographyP className="font-mono font-bold mt-4 text-primary">🎥 Media Team</TypographyP>
          <TypographyP className="font-mono">
            Special thanks to Farah Ahmed for leading the media coverage professionally and ensuring every important moment of SmartGen 2026 was captured perfectly.
            <br/><br/>
            And to the entire media team — thank you for your creativity, filming, editing, photography, coverage, and nonstop energy throughout the event. Your efforts helped showcase the spirit, hard work, and success of the championship to the entire community.
          </TypographyP>

          <TypographyP className="font-mono font-bold mt-4 text-primary">🤝 Misr International University &amp; IEEE MIU</TypographyP>
          <TypographyP className="font-mono">
            Thank you for providing the environment, resources, and support that made SmartGen Championship 2026 possible.
            <br/><br/>
            And to IEEE MIU — I’m truly grateful for the trust you placed in me as Participation Manager, TA Lead, Mentor, and Instructor. It was an honor to contribute to an event that empowered students to explore robotics, AI, teamwork, leadership, and innovation in such a meaningful way.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">📊 Highlights I’m Proud Of</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">Coordinated participant engagement, logistics, communication, and overall workflow throughout the competition lifecycle.</li>
            <li className="font-mono">Served as a mentor and instructor during SmartGen Championship 2026, teaching and explaining robotics, AI, and technical concepts to participating students.</li>
            <li className="font-mono">Guided teams through technical challenges and helped transform ideas into real working projects.</li>
            <li className="font-mono">Followed up closely with participating teams to ensure continuous progress, collaboration, and effective project execution.</li>
            <li className="font-mono">Represented the Computer Science faculty during school tours alongside Zeiad Abo Gebba, introducing students to robotics, AI, programming, and the SmartGen experience.</li>
            <li className="font-mono">Helped create a supportive and motivating environment where students could confidently learn, innovate, collaborate, and compete.</li>
            <li className="font-mono">Contributed to building an organized workflow between technical, logistics, mentoring, and media teams to ensure smooth event execution.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">🚀 Looking Forward</TypographyH3>
          <TypographyP className="font-mono">
            This experience reinforced something important: impactful events are never built by individuals alone — they are built by teams driven by passion, trust, collaboration, and a shared purpose.
          </TypographyP>
          <TypographyP className="font-mono">
            I’m incredibly proud of everything we achieved together, and I’m excited for what’s next. I hope we continue creating opportunities that empower students, encourage innovation, strengthen leadership, and connect education with real-world technology and problem-solving.
          </TypographyP>
          <TypographyP className="font-mono">
            Thank you again to everyone who contributed to making SmartGen Championship 2026 such a memorable and impactful experience.
            <br/><br/>
            Together, you set a great example of teamwork, mentorship, dedication, leadership, and excellence. 🌟
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
