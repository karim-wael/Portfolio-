# Karim Wael | Personal Engineering Identity Platform (Portfolio V3)

A premium, interactive personal engineering platform representing Karim Wael as an **AI Engineer, Cybersecurity Engineer, Systems Architect, and Technical Leader**. Designed for recruiters and developers, this platform highlights systems-level thinking, cryptographic security, local AI architectures, and community-driven leadership.

---

## ⚡ Core Identity & Brand

> **"Building secure, intelligent systems at the intersection of AI, cybersecurity, and scalable software engineering."**

---

## 🛠️ Architecture & Core Modules

### 1. Interactive 3D Spline Keyboard
* An interactive 3D Spline model mapping technical skills directly to keyboard key triggers, responding dynamically to user hovers and clicks.

### 2. System Telemetry (Impact Dashboard)
* High-impact metrics at a glance displaying core metrics, including 10+ completed engineering projects, leadership positions, and NASA / IEEE ambassador metrics.

### 3. Engineering Philosophy & Terminal HUD
* A customized, interactive terminal emulator (`TerminalDiagnostics`) displaying mock startup diagnostics, memory usage, and structural assertions detailing Karim's systems thinking (autonomy, local-first, performance, and sandboxed runtimes).

### 4. Flagship Case Studies (`/work/[id]`)
Every flagship project follows a rigorous, engineering-focused narrative:
$$\text{Problem} \longrightarrow \text{Architecture} \longrightarrow \text{Implementation} \longrightarrow \text{Security} \longrightarrow \text{Impact} \longrightarrow \text{Stack}$$
* **SOC AI Omega**: ML-powered threat classification and Wazuh automation container triggers (99% threat accuracy).
* **Chiggabot**: A local, off-grid AI agent combining FAISS RAG, text-to-speech, and isolated Docker runtimes.
* **Talky**: High-throughput distributed messaging server leveraging a custom C++ WebSocket routing engine.
* **IEEE MIU Portal**: Reverse-engineered university portal with automated grading pipelines and session synchronizers.

### 5. Leadership & Community Impact
* Showcases organizational and outreach milestones: **IEEE Sensors Council Egypt Ambassador**, **IEEE MIU R&D Co-Head**, **SmartGen Championship Participation Manager & Robotics Lead**, and **NASA Space Apps Technical Lead**.

### 6. Realtime Collaborative Workspace
* Features socket-driven coordination modules, including global chat rooms, online user dashboards, custom avatars, and cursor-sync telemetry overlays.

### 7. Verified Credentials (Certifications)
Categorized and linked to hosted PDF verification assets:
* **AI & Machine Learning**: NVIDIA DLI Deep Learning, IBM SkillsBuild AI Fundamentals, Huawei HCIA-AI V4.0.
* **Cloud & Infrastructure**: AWS Academy Graduate (Generative AI Foundations & Machine Learning Foundations).
* **Developer Foundations & Design**: IBM Design Thinking Practitioner, HackerRank Problem Solving & SQL Basic.

---

## 💻 Tech Stack

| Domain | Technologies |
|---|---|
| **Core & Language** | TypeScript, Python, C++, C, JavaScript, HTML/CSS |
| **Frameworks (Web)** | Next.js 14 (App Router), React 18, Tailwind CSS |
| **Animation & 3D** | Spline Runtime, GSAP, Framer Motion, Lenis Smooth Scroll |
| **Backend & Realtime** | Node.js, Express, Socket.io, FastAPI, Flask, C++ WebSockets |
| **Infrastructure** | Docker, AWS (SageMaker), MySQL, MongoDB, PostgreSQL, Nginx, Linux |
| **Security & ML** | Wazuh, Sigma Rules, MITRE ATT&CK, Scikit-learn, FAISS, ChromaDB |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
# Resend API Key for Contact form integration
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build Production Bundle
```bash
npm run build
```

---

*Adapted from the open-source 3D portfolio template by [Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio).*
