# Karim Wael — Engineering Portfolio (3D Systems Edition)

Interactive 3D personal engineering portfolio for **Karim Wael** — **AI & Backend Developer, Cybersecurity-focused CS Student (Data & Information), Vice Chairman @ IEEE MIU Student Branch, IEEE Sensors Council Egypt Chapter Ambassador (ID: SCA004), and 2x NASA Space Apps Galactic Problem Solver (Oct 2025 & Nov 2026)**.

**Live Site:** [https://karim-wael.vercel.app/](https://karim-wael.vercel.app/)  
**Repository:** [https://github.com/karim-wael/Portfolio-](https://github.com/karim-wael/Portfolio-)  
**LinkedIn:** [https://www.linkedin.com/in/karim-wael-dev/](https://www.linkedin.com/in/karim-wael-dev/)

## Homepage Top 5 Flagship Projects
1. **FLARE AI (NASA Space Apps 2026)** — Microgravity combustion knowledge prototype (`Next.js 15`, `FastAPI`, `SQLAlchemy`, `PostgreSQL/SQLite`) ingesting `1,157` historical NASA PSI runs, `10,079` measurements, `128` SHA-256 files, and `1,312` RAG chunks (`~43x` faster dev assistant retrieval after eliminating ORM N+1/Cartesian queries).
2. **Project Revenant** — Co-engineered AI endpoint intrusion detection & self-healing recovery prototype (`C# / .NET 8`, `FastAPI`, `mTLS`, `Ed25519`, 3 real-dataset `ONNX` detectors, write-only `403`-enforced vault; `0.476s` median recovery across 10 loopback sandbox runs, `80/80` restores, `110/110` hash-chain entries, `213` pytest cases).
3. **ECE Lab Management** — Concurrency-safe MIU ECE lab reservation & seeded 609-instrument inventory platform co-engineered with Zeiad Abogebba (`Laravel 11`, `PHP 8.2`, `Laravel Reverb`, `Filament v3.2`, triple `lockForUpdate()`, `66` PHPUnit tests).
4. **SOC AI Omega V3++** — Modular `FastAPI` SIEM/SOAR prototype (`50` Sigma YAML rules, RFC 1918 Zero-Leak PII sanitizer, multi-tier Gemini/Ollama/heuristic triage, `D3.js` topology).
5. **TALKY (WhatsDown)** — Custom multithreaded `C++` HTTP (`httplib`) & RFC 6455 WebSocket server + `SQLite3` + `React 19` + `Docker`.

Full 16-project catalog is accessible via [/projects](https://karim-wael.vercel.app/projects), alongside IEEE MIU Portal, ProbCast / Aether Climate Dashboard (NASA Space Apps Oct 2025), Humanoid CV Perception, Agentic Challenge Suite (Google ADK), Chiggabot (Ollama + Docker Open WebUI setup kit), GheitBot, Coding Arena, SmartGen Championship 2026, 3D Hoodie Viewer, Pet Care Pro, and Travel Agency System.

## Tech Stack
- **Frontend:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Spline 3D
- **Verification:** `tsc --noEmit`, `next lint`, `next build` (static SSG for all 16 `/work/[id]` case studies & `/blogs/[slug]` posts)

## Attribution
*Adapted from the open-source 3D portfolio template by [Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio).*
