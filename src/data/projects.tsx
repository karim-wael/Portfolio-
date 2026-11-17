import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Bot } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiArduino,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiOpencv,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRedis,
  SiScikitlearn,
  SiSocketdotio,
  SiSqlite,
  SiStreamlit,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandFramerMotion, TbCoffee } from "react-icons/tb";

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
  csharp: {
    title: "C# (.NET 8)",
    bg: "black",
    fg: "white",
    icon: <TbBrandCSharp />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <TbCoffee />,
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
  laravel: {
    title: "Laravel 11",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
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
  sqlite: {
    title: "SQLite3",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
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
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
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
    title: "Tailwind CSS",
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
  pytorch: {
    title: "PyTorch / ONNX",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  sklearn: {
    title: "Scikit-Learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  opencv: {
    title: "OpenCV / YOLO",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  ollama: {
    title: "Ollama",
    bg: "black",
    fg: "white",
    icon: <Bot className="w-4 h-4" />,
  },
};

export type VisualType =
  | "screenshot"
  | "architecture-illustration"
  | "conceptual-preview"
  | "poster";

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  visualType?: VisualType;
  visualLabel?: string;
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
  contribution?: string;
  securityConsiderations?: string;
  limitations?: string;
  features?: string[];
  impact?: string;
};

export const FLAGSHIP_PROJECT_IDS = [
  "flare-ai",
  "revenant",
  "ece-labs",
  "soc-ai",
  "talky",
];

const projects: Project[] = [
  {
    id: "flare-ai",
    category: "NASA Space Apps 2026",
    title: "FLARE AI",
    src: "/assets/projects-screenshots/flare-ai/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sklearn,
      ],
    },
    live: "https://flame-ai-six.vercel.app",
    github: "https://github.com/karim-wael/flame-ai",
    shortDescription:
      "Microgravity combustion knowledge prototype ingesting 1,157 historical NASA PSI runs and 10,079 measurements with domain-gated ranking and verbatim RAG.",
    problem:
      "Historical NASA Physical Sciences Informatics (PSI) microgravity combustion datasets span heterogeneous CSVs, workbooks, unit scales, and PDF reports—causing invalid cross-domain comparisons and hallucinated AI summaries.",
    solution:
      "Co-built an ETL ingestion, domain-gated similarity ranking, and guardrail-enforced scientific RAG prototype tracing measurements and quoted excerpts back to NASA DOIs and ingested file SHA-256 checksums.",
    architectureDesc:
      "NASA PSI Archives -> ETL & Provenance Registry (SHA-256, Unit Normalization) -> Domain-Gated Condition Matcher -> Hybrid Lexical/SQL RAG Copilot (TF-IDF + SQLite/PostgreSQL).",
    contribution:
      "Co-engineered as part of 6-member Team The Fireflies (with Zeiad Abogebba and teammates); authored backend ingestion/RAG optimization commits (including commit 056eb60 fixing ORM N+1 hydration) and Next.js frontend integration.",
    implementationDesc:
      "Ingested and normalized 1,157 historical experiment runs, 10,079 telemetry measurements, 128 SHA-256-checksummed archive files, and 1,312 knowledge chunks (21 documents) across 6 historical NASA PSI investigations. Refactored SQLAlchemy joinedload queries into scalar projections + top-K selectinload in rag.py/main.py to eliminate Render 502 OOM crashes (~43x faster local assistant retrieval in dev testing).",
    securityConsiderations:
      "Enforced G1–G7 & D1–D6 domain guardrails isolating Earth 1g baselines from 0g rankings, explicit Moon/Mars partial-gravity gap notices, verbatim quote verification against source chunks, and transparent missing_reason flags.",
    limitations:
      "POST /api/ingestion/jobs currently lacks authentication enforcement in main.py despite defining INGESTION_API_TOKEN in config.py; CORS uses allow_origins=['*']; active SQLite fallback relies on TF-IDF lexical indexing rather than live neural pgvector embeddings; backend test suite currently contains 1 smoke test; 43x latency ratio reflects internal dev testing without a committed benchmark log.",
    impact:
      "Earned official 2026 NASA Space Apps 'Galactic Problem Solver' project completion recognition and deployed live across Vercel + Render.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Fire &amp; Low-Gravity Archive Research Engine (NASA Space Apps 2026)
          </TypographyP>
          <TypographyP className="font-mono">
            FLARE AI turns decades of fragmented NASA Physical Sciences Informatics (PSI) microgravity
            combustion experiments into a source-grounded scientific decision-support workspace built by Team
            The Fireflies for the 2026 Flame in Freefall challenge.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Modules</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Overview Dashboard &amp; Catalogue across 6 NASA PSI investigations (1,157 runs, 10,079 measurements)</li>
            <li className="font-mono">Domain-Gated Experiment Explorer &amp; Condition Matcher (O₂ %, kPa, cm/s airflow)</li>
            <li className="font-mono">Guardrail-Enforced Hybrid RAG Copilot with verbatim quote verification badges</li>
            <li className="font-mono">Provenance &amp; Lineage Inspector tracing DOIs, unit conversions, and SHA-256 checksums</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "revenant",
    category: "Endpoint Security + AI",
    title: "Project Revenant",
    src: "/assets/projects-screenshots/revenant/landing.png",
    visualType: "poster",
    visualLabel: "Conference Poster Summary (Loopback Sandbox Evaluation)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.csharp,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "",
    shortDescription:
      "Co-engineered AI intrusion-detection and self-healing endpoint recovery prototype (.NET 8 agent, FastAPI, mTLS, Ed25519 commands, ONNX models, write-only vault).",
    problem:
      "Traditional antivirus suites detect ransomware after files are encrypted and store recovery backups locally (VSS), where attackers delete them via vssadmin.",
    solution:
      "Co-engineered a two-plane prototype decoupling detection authority from the endpoint: a Windows .NET 8 worker streams telemetry over mTLS and pushes pre-change files to an out-of-band write-only vault that cannot list, read, or delete existing backups.",
    architectureDesc:
      "Protected Windows Endpoint (.NET 8 Agent + Ed25519 Verifier + Write-Only Vault Push) --[mTLS]--> Management Authority (FastAPI + 3 ONNX Detectors + Reversible Policy Engine + Hash-Chained Audit DB + React 19 Console).",
    contribution:
      "Multiple Contributions within the MIU Software Engineering team (with collaborator Motrk12): co-engineered and integrated components across the detection, recovery, backend control, and documentation layers.",
    implementationDesc:
      "Implemented subsystems include the Windows .NET 8 agent with BouncyCastle Ed25519 signature verification (SignedCommandVerifier.cs), FastAPI mTLS backend with 3 ONNX models trained on real datasets (EMBER2024 static PE, RanSAP behavioral sequences, CIC-IDS2017 network flows), write-only 403-enforced vault (revenant_vault), semi_auto reversibility guardrails, hash-chained audit logs, React 19 operator console, and read-only Ollama incident explainer.",
    securityConsiderations:
      "Enforces Mutual TLS client certificates on agent ingestion, Ed25519 signature checks before command execution, role-segregated write-only vault bearer tokens (HTTP 403 on agent read/delete), SHA-256 hash-chained audit entries, and critical Windows process allow-listing (e.g., lsass.exe).",
    limitations:
      "The 0.476s median latency (80/80 restored files, 110/110 hash-chain checks) was measured on a single laptop over loopback using a Python test harness (make e2e) with CommandExecutor running in SandboxMode=true (returning simulated sandbox responses rather than live netsh/Process.Kill) and bypassing the .NET agent polling loop. Two-machine LAN router benchmarks remain future work, and the appliance-style UI console redesign is listed as planned/not started in docs/planned-features.md.",
    impact:
      "Sandbox e2e suite (10 loopback runs) recorded 0.476s median recovery, 80/80 byte-identical SHA-256 restores, and 110/110 verified hash-chain entries; 213 backend/vault pytest cases pass.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Autonomous AI Intrusion Detection &amp; Self-Healing Recovery
          </TypographyP>
          <TypographyP className="font-mono">
            Project Revenant closes the loop between detection and recovery: ransomware cannot destroy
            backups it only has write-once permission to submit before modification.
          </TypographyP>
          <ProjectsLinks />
          <TypographyH3 className="my-4 mt-8">Verified Architecture &amp; Guardrails</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Native C# / .NET 8 Windows Worker Service with FileSystemWatcher, WMI, and network flow capture</li>
            <li className="font-mono">Three ONNX classifiers: Static PE (EMBER2024), Behavioral GRU (RanSAP), Network Flow (CIC-IDS2017)</li>
            <li className="font-mono">Out-of-band Append-Only Vault with SHA-256 integrity verification on recovery</li>
            <li className="font-mono">mTLS + Ed25519 signed commands + strict reversible-vs-destructive approval gates</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "talky",
    category: "Systems & Networking",
    title: "TALKY (WhatsDown)",
    src: "/assets/projects-screenshots/talky/landing.png",
    visualType: "screenshot",
    visualLabel: "Application Login Interface Screenshot",
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
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/karim-wael/whatsdown",
    shortDescription:
      "Custom multithreaded C++ HTTP/WebSocket messaging platform with SQLite3 persistence, JWT auth, and ephemeral Ghost privacy mode.",
    problem:
      "Understanding low-level network framing, concurrency locks, and ephemeral persistence without relying on high-level managed WebSocket abstractions.",
    solution:
      "Built a custom C++ TCP/HTTP & RFC 6455 WebSocket server paired with a React 19 glassmorphism client, JWT authentication, and a background expiry reaper thread.",
    architectureDesc:
      "React 19 + Vite Client <--[RFC 6455 WebSocket / REST]--> C++ ChatServer (httplib + WSManager + ChatRouter + CryptoUtils) <--> SQLite3 DatabaseManager.",
    contribution:
      "Individual project designed and implemented end to end across the C++ server core, SQLite3 schema/manager, and React 19 UI.",
    implementationDesc:
      "Implemented raw WinSock2/POSIX TCP listening, RFC 6455 SHA-1/Base64 handshake and frame masking in WSManager.h, mutex-synchronized broadcast rooms in ChatServer.cpp, message editing, typing/presence indicators, and a background std::thread pruning expired ephemeral messages every 10 seconds.",
    securityConsiderations:
      "Enforces JWT session tokens, SHA-256 password hashing, Stealth/Ghost mode bypassing SQLite persistence, configurable TTL auto-burn deletion, and parameterized SQLite queries.",
    limitations:
      "Developed without formal multi-client load-testing or throughput/latency benchmarks; production TLS termination requires an external reverse proxy.",
    impact:
      "Delivered a complete custom C++ WebSocket & HTTP server paired with a Dockerized React 19 messaging client.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Custom C++ Real-Time Messaging Core + React 19 Client
          </TypographyP>
          <TypographyP className="font-mono">
            TALKY (WhatsDown) pairs a custom multithreaded C++ HTTP/WebSocket server (`httplib.h`,
            `WSManager`, SQLite3) with a modern React glassmorphism interface for fast, privacy-focused communication.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Engineering Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Custom C++ WebSocket manager (`WSManager`) for live presence, typing, and message sync</li>
            <li className="font-mono">Ephemeral Ghost Mode and disappearing messages with automated expiry purge</li>
            <li className="font-mono">JWT authentication, SHA-256 hashing, and SQLite3 persistent storage</li>
            <li className="font-mono">Message editing, contextual replies, reactions, and Dockerized deployment</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ece-labs",
    category: "Enterprise Web Systems",
    title: "ECE Lab Management",
    src: "/assets/projects-screenshots/ece-labs/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "",
    shortDescription:
      "Concurrency-safe university lab reservation and seeded 609-instrument inventory platform co-engineered for MIU ECE with Zeiad Abogebba.",
    problem:
      "Shared university hardware labs suffer from workstation overbooking, project-group monopolies on specialized benches/instruments, and race conditions during simultaneous student registrations.",
    solution:
      "Co-engineered a Laravel 11 + Laravel Reverb platform using triple pessimistic locking (Laboratory, Workstation, Instrument `lockForUpdate()`), 50% group quotas, HMAC QR check-in, and real-time bench updates.",
    architectureDesc:
      "Blade + Alpine.js + Tailwind v4 UI <--[Laravel Reverb WebSockets]--> Laravel 11 Domain Services (BookingService, RegistrationService) --> MySQL/SQLite (lockForUpdate() Transactions) + Filament v3.2 Admin.",
    contribution:
      "Co-engineered with Zeiad Abogebba (13 commits by Zeiad Abogebba, 4 commits by Karim Wael): authored transactional concurrency locking, strike/walk-in rules, labs_inventory.json import/Instrument seeder & API, and Reverb grid update events.",
    implementationDesc:
      "Built on Laravel 11.31, PHP 8.2, Filament v3.2, Tailwind v4, and Alpine.js. Implements atomic booking transactions locking Laboratory, Workstation, and Instrument rows, weekly 2-slot student quotas, configurable group anti-monopoly caps (default 50%), 15-minute walk-in reclamation, and InstrumentSeeder importing 609 normalized records from 8 MIU ECE lab spreadsheets.",
    securityConsiderations:
      "Prevents double-booking race conditions via database row locks and active-slot unique keys; secures check-ins via APP_KEY-signed SHA-256 HMAC QR tokens, absentee strike suspensions, and @miuegypt.edu.eg OTP/Google SSO domain enforcement.",
    limitations:
      "The 609 instrument records were imported and normalized from 8 department Excel files into labs_inventory.json rather than manually entered one-by-one; calibration timestamps remain nullable/unpopulated; collaborator repo zeiadabogebba/ECE-LabsWebsite is private.",
    impact:
      "Verified booking invariants, walk-in reclamation, blackouts, and API routes across 66 passing PHPUnit test cases (3,942 assertions).",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Concurrency-Safe Academic Lab &amp; Hardware Reservation System
          </TypographyP>
          <TypographyP className="font-mono">
            Co-engineered for the MIU Electronics &amp; Communication Engineering Department using Laravel 11,
            Laravel Reverb WebSockets, Filament v3.2, Alpine.js, and Tailwind CSS v4.
          </TypographyP>
          <ProjectsLinks />
          <TypographyH3 className="my-4 mt-8">Key Systems Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Parent-row pessimistic locking (`Laboratory::lockForUpdate()`) &amp; 50% anti-monopoly group limits</li>
            <li className="font-mono">Live U-shaped bench status streaming over Laravel Reverb + Echo WebSockets</li>
            <li className="font-mono">SHA-256 HMAC QR bench check-in, 15-min walk-in reclamation, and absentee strike engine</li>
            <li className="font-mono">609 real department hardware instruments tracked across labs and Filament admin panels</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "soc-ai",
    category: "AI + Cybersecurity",
    title: "SOC AI Omega V3++",
    src: "/assets/projects-screenshots/soc-ai/landing.png",
    visualType: "screenshot",
    visualLabel: "Application Dashboard Screenshot (Local Server Preview)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/karim-wael/SOC_ANALYSIS_AI",
    shortDescription:
      "SIEM/SOAR prototype with FastAPI WebSockets, Random Forest scoring, Zero-Leak PII sanitizer, 50 Sigma YAML rules, and D3.js topology.",
    problem:
      "Security operations workflows suffer from alert fatigue, disjointed telemetry views, and risk of leaking internal IPs/emails when sending alerts to external LLM APIs.",
    solution:
      "Upgraded a Flask prototype into a modular FastAPI SOC command center featuring async triage, deterministic PII redaction, 50 YAML Sigma rules, and YAML-driven SOAR playbooks.",
    architectureDesc:
      "Telemetry Ingestion -> Zero-Leak PII Sanitizer -> Async Triage (Gemini -> Ollama -> Heuristic Table + Random Forest) -> MITRE ATT&CK / 50 Sigma YAML Rules -> D3.js Topology & Simulated SOAR.",
    contribution:
      "Individual creator and lead developer across the FastAPI backend, PII sanitizer, Sigma rule loader, and D3.js/Chart.js frontend dashboard.",
    implementationDesc:
      "Implemented multi-tenant JWT RBAC routers, WebSocket live streaming (/ws/live), SanitizerService masking RFC 1918 IPs/emails/JWTs, 50 Sigma YAML rules (sig_001–sig_050), 6 YAML SOAR playbooks, Scikit-Learn Random Forest scoring, and D3.js topology visualization.",
    securityConsiderations:
      "SanitizerService masks RFC 1918 private IPs, internal host domains (*.corp, *.internal), corporate emails, and JWT/Bearer tokens prior to external LLM narrative prompts; enforces multi-tenant org_id isolation.",
    limitations:
      "SOAR containment actions and firewall blocking default to simulation_mode (simulated_firewall_api); wildcard CORS is enabled for local development; accuracy claims from early prototypes were omitted due to simulated telemetry inputs.",
    impact:
      "Consolidated multi-tier LLM/heuristic triage, Sigma detection rules, and interactive D3.js topology into a single Dockerizable FastAPI SOC workspace.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered SIEM, SOAR &amp; Threat Hunting Command Center
          </TypographyP>
          <TypographyP className="font-mono">
            SOC AI Omega V3++ unifies real-time WebSocket alert streaming, ML-based anomaly triage,
            Sigma YAML rules, MITRE ATT&amp;CK tactic heatmaps, and D3.js network topology graphs inside a
            multi-tenant FastAPI architecture.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Multi-tier AI Attack Narrative engine (Gemini 1.5, local Ollama, and heuristic fallback)</li>
            <li className="font-mono">Zero-Leak PII telemetry sanitizer before external model inference</li>
            <li className="font-mono">Live MITRE ATT&amp;CK heatmap, Sigma rule engine, and threat-hunting workspace</li>
            <li className="font-mono">Simulated SOAR playbooks with multi-tenant JWT RBAC and immutable audit logs</li>
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
    visualType: "screenshot",
    visualLabel: "Application Admin Dashboard Screenshot",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "",
    shortDescription:
      "Custom PHP 8.2 MVC branch portal, LMS, automated exam grading, dynamic FPDF certification, and Yony AI companion for IEEE MIU.",
    problem:
      "Student organizations rely on fragmented spreadsheets and manual forms, causing lost participant records and slow manual certificate issuance.",
    solution:
      "Built a custom PHP 8.2 MVC platform from scratch with automated exam grading, self-healing schema checks, zero-touch FPDF certificates, and QR attendance tracking.",
    architectureDesc:
      "Redesigned Portal Views -> Custom PHP 8.2 MVC Controllers -> PDO Singleton + Self-Healing Migrations -> Automated Grading, Email Queue & FPDF Certificate Engine.",
    contribution:
      "Lead Architect (16 commits in repo) building the custom MVC core, LMS, FPDF certification, QR attendance, and Yony AI companion; collaborated with Zeiad Abogebba (5 commits) on UI redesign.",
    implementationDesc:
      "Engineered custom MVC routing without external CMS frameworks: linked LMS courses with multi-format exams, FPDF verification certificates, SMTP email queue, dynamic form builder, Google Drive gallery sync, and SQLite/MySQL PDO abstractions.",
    securityConsiderations:
      "Implemented PDO prepared statements, CSRF form tokens, XSS sanitization, AISecurityGuard output scrubbing, and granular RBAC permissions.",
    limitations:
      "Repository (karim-wael/ieeemiu) is private (HTTP 404 publicly); internal security audit flagged git-tracked legacy .env and test script credentials requiring rotation before any public release.",
    impact:
      "Unified IEEE MIU Student Branch course delivery, event workflows, and dynamic certification inside one custom web platform.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Custom PHP MVC Branch Ecosystem &amp; LMS Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered from scratch for the IEEE MIU Student Branch—combining course delivery, automated
            multi-format exams, dynamic PDF certificates, custom event forms, and role-based governance.
          </TypographyP>
          <ProjectsLinks />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Custom LMS with linked assessments (MCQ, matching, short answer) and auto-grading</li>
            <li className="font-mono">Zero-touch FPDF certificate generation and automated conditional email triggers</li>
            <li className="font-mono">No-code dynamic form builder, Google Drive gallery importer, and audit logs</li>
            <li className="font-mono">Self-healing database schema checks and strict RBAC access matrix</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "chiggabot",
    category: "Local AI Setup Kit",
    title: "Chiggabot",
    src: "/assets/projects-screenshots/chiggabot/landing.png",
    visualType: "conceptual-preview",
    visualLabel: "Conceptual UI Illustration (Not a Live Application Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.ollama,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    shortDescription:
      "Windows automation & model provisioning kit launching 8 quantized Ollama LLMs alongside Dockerized Open WebUI.",
    problem:
      "Setting up local quantized LLMs alongside a browser chat interface on Windows involves repetitive service startup, Docker volume bindings, and manual model pulls.",
    solution:
      "Created Chiggabot_Setup_Kit: batch and PowerShell automation scripts (`launch_agent.bat`, `download_models.ps1`, `create_shortcut.ps1`) that verify or boot Ollama, launch the `open-webui` Docker container, pull 8 quantized models, and open Edge in desktop app mode.",
    architectureDesc:
      "launch_agent.bat + download_models.ps1 -> Local Ollama Server (:11434, 8 Quantized Models) <-> Docker Container (ghcr.io/open-webui/open-webui:main on :8081) -> Edge App Mode UI.",
    contribution:
      "Individual utility creator writing the Windows `.bat` launcher, PowerShell model-puller, and shortcut automation scripts.",
    implementationDesc:
      "Automates pulling 8 Ollama models (`tinyllama`, `phi3:mini`, `deepseek-r1:1.5b/14b`, `qwen2.5-coder:1.5b/14b`, `dolphin-llama3:8b`, `llava:v1.6-7b`) via `download_models.ps1` and boots Ollama + Open WebUI via `launch_agent.bat` on `http://localhost:8081`.",
    securityConsiderations:
      "Runs inference locally via Ollama + Docker Open WebUI without external cloud LLM calls; note that `launch_agent.bat` mounts a host home directory into Open WebUI (`-v C:\\Users\\...:/host_home`), so local filesystem exposure follows Docker volume scope.",
    limitations:
      "Chiggabot_Setup_Kit consists solely of Windows provisioning and launcher scripts rather than custom-coded Python FAISS, ChromaDB, or sandboxed compiler software; document Q&A features rely on upstream Open WebUI capabilities.",
    impact:
      "Streamlined offline installation and one-click startup of 8 local Ollama models through Dockerized Open WebUI on Windows.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Local Ollama &amp; Open WebUI Provisioning Kit
          </TypographyP>
          <TypographyP className="font-mono">
            Chiggabot (`Chiggabot_Setup_Kit`) automates pulling eight quantized Ollama models and launching
            a local Dockerized Open WebUI desktop window (`localhost:8081`) via Windows batch and PowerShell scripts.
          </TypographyP>
          <ProjectsLinks />
          <TypographyH3 className="my-4 mt-8">Verified Automation Scope</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">`download_models.ps1` pulling 8 Ollama models (`tinyllama`, `phi3:mini`, `deepseek-r1`, `qwen2.5-coder`, `dolphin-llama3`, `llava`)</li>
            <li className="font-mono">`launch_agent.bat` checking/starting `ollama serve` and the `open-webui` Docker container</li>
            <li className="font-mono">`create_shortcut.ps1` for one-click desktop launch in Edge app mode</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "probcast",
    category: "NASA Space Apps 2025",
    title: "ProbCast / Aether Climate",
    src: "/assets/projects-screenshots/probcast/landing.png",
    visualType: "screenshot",
    visualLabel: "Aether Climate Dashboard Interface Screenshot",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.streamlit],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    live: "",
    github: "https://github.com/karim-wael/ProbCast",
    shortDescription:
      "NASA Space Apps Oct 2025 Galactic Problem Solver climate prototype, later modernized into the FastAPI + Leaflet Aether Climate Dashboard.",
    problem:
      "Event organizers and agricultural planners lack accessible, localized weather risk probabilities derived from scientific NASA Earth observation APIs.",
    solution:
      "Built ProbCast during the October 4–5, 2025 NASA Space Apps Challenge using NASA POWER telemetry, and later modernized it into Aether Climate Dashboard with FastAPI, Chart.js, and Leaflet.js.",
    architectureDesc:
      "Geolocation / Region Query -> FastAPI NASA POWER Proxy (120s TTL Cache + Fallback) -> Leaflet.js Interactive Probability Map + Chart.js Trends.",
    contribution:
      "Technical Team Lead for 4-member Team Moon Walkers during NASA Space Apps Oct 2025, and author of the subsequent Aether Climate FastAPI + Leaflet evolution.",
    implementationDesc:
      "Led Team Moon Walkers (Oct 4–5, 2025) to ship the initial Streamlit + NASA POWER prototype, then built Aether Climate (`server/main.py` FastAPI proxy querying NASA POWER `T2M, PRECTOTCORR, RH2M, WS10M` with 120s TTL caching, Leaflet `1.9.4`, and Chart.js analytics).",
    securityConsiderations:
      "Server-side FastAPI proxy avoids exposing third-party requests directly from static scripts and applies async 4.0s HTTPX request timeouts.",
    limitations:
      "Includes a deterministic synthetic fallback weather generator when external NASA POWER API queries fail or time out (`server/main.py`); CORS allows `*` in local prototype config.",
    impact:
      "Earned official October 2025 NASA International Space Apps Challenge 'Galactic Problem Solver' project completion recognition.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Technical Team Lead @ Team Moon Walkers (NASA Space Apps 2025)
          </TypographyP>
          <TypographyP className="font-mono">
            Developed as Technical Team Lead for the October 2025 NASA Space Apps Challenge, earning Galactic
            Problem Solver recognition—and upgraded into the Aether Climate Dashboard with FastAPI, Leaflet.js, and Chart.js.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Evolution</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">NASA POWER satellite telemetry ingestion (rainfall, temperature, humidity, wind)</li>
            <li className="font-mono">2025 MVP: Python + Streamlit + Earthdata predictive engine and multilingual advisory</li>
            <li className="font-mono">2026 Upgrade: FastAPI backend proxy + Leaflet.js probability map + Chart.js glassmorphism UI</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "humanoid-cv",
    category: "Computer Vision",
    title: "Humanoid CV Perception",
    src: "/assets/projects-screenshots/humanoid-cv/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv, PROJECT_SKILLS.pytorch],
    },
    live: "",
    shortDescription:
      "Real-time dual-model YOLO + OpenCV perception prototype for simultaneous person counting and raised-hand detection.",
    problem:
      "Robotics and smart-classroom prototypes need simultaneous occupancy counting and raised-hand detection from standard webcam video streams.",
    solution:
      "Combined two custom-trained Ultralytics YOLO weights (`best_person_v2.pt` and `best_hand.pt`) inside a real-time OpenCV inference and HUD annotation loop.",
    architectureDesc:
      "Webcam Stream -> Dual YOLO Inference (Person + Hand Weights) -> Bounding Box Extraction -> Real-Time HUD Counters.",
    contribution:
      "Developed the local Python/OpenCV dual-model inference loop and annotation pipeline (`main.py`).",
    implementationDesc:
      "Implemented frame-by-frame inference with independent confidence thresholds (`PERSON_CONF`, `HAND_CONF`), PyTorch-to-NumPy bounding box extraction, and live OpenCV HUD occupancy + hand counters.",
    limitations:
      "Local prototype without public GitHub hosting or formal precision/recall/FPS benchmark logs across lighting conditions.",
    impact:
      "Delivered a functional real-time person-counting and raised-hand detection module ready for humanoid/classroom integration.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Dual-YOLO Real-Time Person &amp; Gesture Perception
          </TypographyP>
          <TypographyP className="font-mono">
            A real-time OpenCV + Ultralytics YOLO computer vision system running dual custom-trained PyTorch
            models (`best_person_v2.pt` and `best_hand.pt`) to count people and detect raised hands simultaneously.
          </TypographyP>
          <ProjectsLinks />
        </div>
      );
    },
  },
  {
    id: "agentic-adk",
    category: "Agentic AI Systems",
    title: "Agentic Challenge Suite",
    src: "/assets/projects-screenshots/agentic-adk/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "",
    github: "https://github.com/AhmedGamal-Gemy/Agentic_AI_Internship",
    shortDescription:
      "Collaborative Google ADK + Groq Llama 3.3 70B multi-tool coding challenge generator and Redis-backed intern progress tracker.",
    problem:
      "Technical internship cohorts need grounded coding challenges paired with longitudinal tracking of intern submissions and progress summaries.",
    solution:
      "Co-built an ADK agent orchestrated over LiteLLM (Groq `llama-3.3-70b-versatile`) with Exa search tool calls, DB/leaderboard integration, and Redis progress history.",
    architectureDesc:
      "Google ADK Agent -> Exa Web Search Tool -> Llama 3.3 70B Synthesis -> Parallel Save & Leaderboard Tool + Redis History Store.",
    contribution:
      "Intern contributor in the collaborative Agentic AI Training repository (hosted under mentor Ahmed Gamal) working on ADK tool wiring and Redis session tracking.",
    implementationDesc:
      "Implemented tool functions (`exa_search`, `save_to_database`, `push_to_leaderboard`) and Redis-backed intern progress tracking (`update_intern_history`, `get_intern_history`, `summarize_progress`) during the 2026 Agentic AI Internship.",
    limitations:
      "Collaborative training project hosted in an external mentor repository (`AhmedGamal-Gemy/Agentic_AI_Internship`); requires external Groq, Exa, and Redis API/service credentials at runtime.",
    impact:
      "Automated grounded coding challenge authoring and multi-push intern progress summarization during technical workshops.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Tool Google ADK Agent &amp; Redis Progress Memory
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered with Google ADK, LiteLLM (Groq Llama 3.3 70B), Exa Search, FastAPI, and Redis to
            research topics, author coding challenges, update live leaderboards, and summarize intern commit history.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "gheitbot",
    category: "AI Farming Assistant",
    title: "GheitBot",
    src: "/assets/projects-screenshots/gheitbot/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python],
    },
    github: "https://github.com/karim-wael/GheitBot",
    shortDescription:
      "Arabic Streamlit precision farming assistant for Egyptian farmers integrating OpenWeather data, Folium maps, CSV crop datasets, and RSS/web news.",
    problem:
      "Farmers in Egypt benefit from localized Arabic interfaces combining governorate weather lookups, crop CSV references, and regional agricultural news.",
    solution:
      "Built an Arabic Streamlit app (`app.py`) combining fuzzy place matching (`difflib.get_close_matches`), `egypt_places.csv` and `crops_egypt.csv`, OpenWeather lookups, Folium maps, and RSS/BeautifulSoup news feeds.",
    architectureDesc:
      "Governorate Query -> CSV Lookup (crops_egypt.csv & egypt_places.csv) + OpenWeather & RSS Feeds -> Streamlit + Folium Map + Plotly UI.",
    contribution:
      "Repository author (`karim-wael/GheitBot`) developing the Streamlit app, CSV data lookups, and Folium/Plotly integration.",
    implementationDesc:
      "Implemented in Python + Streamlit (`app.py`) with Pandas, `streamlit-folium`, `feedparser`, `beautifulsoup4`, `plotly`, and `requests` (`requirements.txt`).",
    limitations:
      "Uses fuzzy string matching + static CSV crop tables and OpenWeather queries rather than trained ML models (`scikit-learn` is not used); requires configuring `OPENWEATHER_API_KEY` at runtime.",
    impact:
      "Published an open-source Arabic agricultural assistant prototype tailored to Egyptian locations and crop calendars.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Arabic Farming Utility for Egypt (`GheitBot`)
          </TypographyP>
          <TypographyP className="font-mono">
            GheitBot (`karim-wael/GheitBot`) integrates OpenWeather API queries, Egyptian crop/location
            CSVs (`crops_egypt.csv`, `egypt_places.csv`), RSS/BeautifulSoup feeds, Plotly charts, and Folium
            maps inside an Arabic Streamlit app.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "coding-arena",
    category: "Gamified Education",
    title: "Coding Arena (IEEE Booth)",
    src: "/assets/projects-screenshots/coding-arena/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    live: "",
    shortDescription:
      "Browser-based competitive coding booth activity featuring C++ and Python 1v1 challenges, score tracking, and particle canvas visuals.",
    problem:
      "Campus engineering booths need interactive, high-energy technical experiences to attract and engage student programmers.",
    solution:
      "Built a standalone browser-based Coding Arena featuring 1v1 Code Duels, Championship brackets, XP/level badges, and particle canvas effects.",
    contribution:
      "Created the standalone interactive booth front-end experience for IEEE MIU campus events.",
    limitations:
      "Standalone front-end booth tool with no public GitHub repository link.",
    impact:
      "Supported interactive campus IEEE booth engagement with gamified C++/Python challenges.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Learn. Compete. Code. — Interactive IEEE Booth Arena
          </TypographyP>
          <TypographyP className="font-mono">
            A futuristic browser-based competitive programming platform built for IEEE MIU booth challenges,
            featuring 1v1 C++/Python duels, live leaderboards, achievements, and XP leveling.
          </TypographyP>
          <ProjectsLinks />
        </div>
      );
    },
  },
  {
    id: "smartgen",
    category: "Leadership & Education",
    title: "SmartGen Championship 2026",
    src: "/assets/projects-screenshots/smartgen/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Leadership Overview Card (Not an Application Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.arduino, PROJECT_SKILLS.cpp, PROJECT_SKILLS.python],
      backend: [],
    },
    live: "",
    shortDescription:
      "Participation Manager, TA Lead, Mentor, and Instructor for a multi-school high-school Robotics & AI championship.",
    problem:
      "High-school students rarely get structured, hands-on exposure connecting Arduino hardware, embedded C++, and AI problem solving.",
    solution:
      "Coordinated participant operations across 10 schools (30+ students), developed hands-on robotics workshops, and led TA lab mentorship from foundational electronics to live competition.",
    contribution:
      "Served as Participation Manager, TA Lead, Mentor, and Instructor representing Computer Science outreach alongside Zeiad Abo Gebba.",
    limitations:
      "Organizational, curriculum, and mentorship program documented in IEEE MIU knowledge base rather than a standalone software repository; participant counts are self-reported branch metrics.",
    impact:
      "Guided 30+ high-school participants across 10 schools through 20+ hours of embedded C++, Arduino, and Python training.",
    get content() {
      return (
        <div className="space-y-4 pb-10">
          <TypographyP className="font-mono text-2xl text-center">
            SmartGen Championship 2026 — Robotics &amp; AI Education Leadership
          </TypographyP>
          <TypographyP className="font-mono">
            Served as Participation Manager, TA Lead, Mentor, and Instructor during SmartGen Championship 2026,
            representing the Computer Science faculty on school tours alongside Zeiad Abo Gebba and guiding
            grades 10–12 teams from foundational Arduino &amp; Python training to live robotics finals.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Key Operational &amp; Teaching Outcomes</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">Coordinated participant engagement, communication, and lab schedules for 30+ students across 10 schools</li>
            <li className="font-mono">Delivered 20+ hours of embedded C++, Arduino sensor interfacing, and Python instruction</li>
            <li className="font-mono">Aligned technical, TA, logistics, and media teams throughout competition days</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "hoodie-viewer",
    category: "3D Web Graphics",
    title: "3D Hoodie Viewer",
    src: "/assets/projects-screenshots/hoodie-viewer/landing.png",
    visualType: "conceptual-preview",
    visualLabel: "Conceptual 3D Mockup Artwork (Not a Live Browser Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.threejs, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "",
    shortDescription:
      "Interactive 3D hoodie model (`hoodie.glb`) and WebGL apparel preview experiment built for IEEE apparel branding.",
    problem:
      "Static 2D apparel mockups fail to convey garment geometry and multi-angle product details.",
    solution:
      "Prepared a custom GLTF/GLB 3D garment asset (`hoodie.glb`) and textures for browser-based Three.js inspection and colorway previewing.",
    contribution:
      "Created the local 3D asset files (`design iee/hoodie.glb`, textures, and design mockups).",
    limitations:
      "Local workspace contains the `.glb` 3D model, SVG/PNG graphics, and mockup assets (`me/projects/design iee/`) rather than a standalone React Three Fiber codebase or public GitHub repository.",
    impact:
      "Produced custom 3D apparel assets (`hoodie.glb`) supporting interactive IEEE merch visualization experiments.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-Time WebGL 3D Product Mockup Viewer
          </TypographyP>
          <TypographyP className="font-mono">
            An interactive Three.js / React-three-fiber visualization tool enabling smooth 360-degree inspection
            and real-time colorway customization in the browser.
          </TypographyP>
          <ProjectsLinks />
        </div>
      );
    },
  },
  {
    id: "pet-care-pro",
    category: "Desktop Systems",
    title: "Pet Care Pro (JavaFX)",
    src: "/assets/projects-screenshots/pet-care-pro/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.java],
    },
    live: "",
    shortDescription:
      "Multi-role JavaFX 21 desktop veterinary and pet care management suite with Admin, Vet, Pet Owner, and Trainer dashboards.",
    problem:
      "Multi-role veterinary clinics need distinct operational views for veterinarians, trainers, administrators, and pet owners with local persistence.",
    solution:
      "Built a JavaFX 21 desktop application with polymorphic role dashboards (`Admin`, `Veterinarian`, `PetOwner`, `Trainer`), seeded sample data, and a background daemon auto-save thread.",
    contribution:
      "Coursework/desktop OOP engineering application implementing role dashboards and Java serialization persistence.",
    limitations:
      "Academic JavaFX desktop project stored locally without an active public GitHub repository or automated test suite.",
    impact:
      "Applied OOP inheritance, role dispatch, and non-blocking JavaFX daemon persistence.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Role Veterinary Clinic Desktop Suite (JavaFX 21)
          </TypographyP>
          <TypographyP className="font-mono">
            Built with JavaFX 21 featuring separate role-specific dashboards for Admins, Veterinarians, Pet
            Owners, and Trainers, backed by a centralized DataManager and 30-second background daemon auto-saving.
          </TypographyP>
          <ProjectsLinks />
        </div>
      );
    },
  },
  {
    id: "travel-agency",
    category: "OOP Architecture",
    title: "Travel Agency System",
    src: "/assets/projects-screenshots/travel-agency/landing.png",
    visualType: "architecture-illustration",
    visualLabel: "Illustrative Architecture Graphic (Generated Card — Not a Live Screenshot)",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.java],
    },
    live: "",
    github: "https://github.com/karim-wael/Travel-agency-",
    shortDescription:
      "Solo Java CRUD management platform with Swing GUI + console interfaces, automated tax/discount math, and binary object serialization.",
    problem:
      "Managing multi-tier travel bookings, customer pricing rules, and session persistence without external database servers.",
    solution:
      "Built a dual-interface Java Swing and console application applying core OOP principles with automated pricing calculations and `.ser` object persistence.",
    contribution:
      "Solo author (`karim-wael/Travel-agency-`) implementing OOP domain classes, Swing views, and binary serialization.",
    limitations:
      "Early undergraduate OOP project using Java `.ser` file serialization rather than a relational database.",
    impact:
      "Published public Java OOP repository demonstrating Swing + console interfaces and stateful `.ser` persistence.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            100% Solo Java OOP &amp; Swing Management System
          </TypographyP>
          <TypographyP className="font-mono">
            A complete Java CRUD platform featuring both a Swing desktop GUI and console interface, automated
            pricing/tax/discount calculations, and Java object serialization.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;
