<div align="center">

# ⚡ Abhishek Kumar

### **Software & Systems Engineer**
*Distributed Systems &bull; Fault-Tolerant Infrastructure &bull; AI-Powered Developer Tools*

IIIT Guwahati &bull; Class of 2026 &bull; Bengaluru, India

<br />

[![Website](https://img.shields.io/badge/Live_Portfolio-0B1120?style=for-the-badge&logo=vercel&logoColor=00F0FF&labelColor=0B1120)](https://abhishek-kumar-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/abhishekkumarcoder21)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/11abhishek-kumar/)
[![LeetCode](https://img.shields.io/badge/LeetCode-300+_Solved-FFA116?style=flat-square&logo=leetcode&logoColor=black)](https://leetcode.com/u/abhishekkumarcoder21/)
[![CodeChef](https://img.shields.io/badge/CodeChef-3★_Rating-5B4638?style=flat-square&logo=codechef&logoColor=white)](https://www.codechef.com/users/abhishek_ak27)
[![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-300+_Solved-2F8D46?style=flat-square&logo=geeksforgeeks&logoColor=white)](https://www.geeksforgeeks.org/user/workakthah9e3/)
[![Email](https://img.shields.io/badge/Email-work.akthakur27@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:work.akthakur27@gmail.com)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Design Theme — The Control Room](#-design-theme--the-control-room)
- [Key Features](#-key-features)
- [Featured Projects](#-featured-projects)
- [Technical Architecture](#-technical-architecture)
- [Repository Structure](#-repository-structure)
- [Tech Stack & Tooling](#-tech-stack--tooling)
- [Getting Started](#-getting-started)
- [Engineering Philosophy](#-engineering-philosophy)
- [Connect & Contact](#-connect--contact)

---

## 🛰 Overview

This repository houses the source code for the personal engineering portfolio of **Abhishek Kumar** — designed not merely as a static resume, but as an interactive **Systems Control Room**.

The application showcases infrastructure-grade projects, verified algorithmic metrics, interactive distributed state visualizers, and simulated trace executions (DAG scheduling, CRDT convergence, and AST code reviews).

```
╔════════════════════════════════════════════════════════════════════════════════════╗
║  STATUS: OPERATIONAL  │  UPTIME: 99.99%  │  METRICS: 600+ DSA  │  ENV: PRODUCTION  ║
╚════════════════════════════════════════════════════════════════════════════════════╝
```

---

## 🎨 Design Theme — "The Control Room"

The UI takes inspiration from mission control telemetry dashboards, distributed tracing consoles, and terminal interfaces:

| Element | Specification | Aesthetic Purpose |
| :--- | :--- | :--- |
| **Ink Canvas** | `#0B1120` &bull; `#111827` | Deep space background minimizing eye fatigue |
| **Electric Cyan** | `#00F0FF` | Primary telemetry accent & interactive highlights |
| **Grid Overlay** | Subtle 60px/80px coordinate lines | Systems engineering workbench feel |
| **Typography** | `Space Grotesk` + `Inter` + `JetBrains Mono` | High legibility code & data presentation |
| **Micro-Animations** | Spring transitions via `framer-motion` | Tactile and responsive user feedback |

---

## ✨ Key Features

- 🔄 **Interactive System Topology Graph (`SystemGraph.tsx`)**: Visualizes distributed architecture nodes (Producers, Priority Queues, Workers, Dead-Letter Queues, Storage).
- ⏱ **Step-by-Step Live Execution Simulation (`ProjectDemo.tsx`)**: Real-time simulated execution traces mimicking production job dispatch, worker timeouts, exponential backoffs, and state convergence.
- 📊 **Verified Proof of Work Metrics (`ProofOfWork.tsx`)**: Real numbers over buzzwords — 62K+ ops/sec throughput, verified 15-worker race testing, sub-100ms orphan job recovery.
- 🎯 **Engineering Trade-offs & Deep-Dives (`Engineering.tsx`)**: Detailed breakdowns of architectural decisions (e.g., *At-least-once vs Exactly-once*, *CRDT vs OT*, *Deterministic AST vs Pure LLM*).
- 🗺 **Interactive Career Timeline (`Journey.tsx`)**: Highlighting competitive programming milestones, hackathon victories, and systems engineering achievements.
- 📱 **Fully Responsive & Accessible**: Respects `prefers-reduced-motion`, semantic HTML5 hierarchy, fluid typography, and dark-mode optimization.

---

## 🚀 Featured Projects

### 1. ⚙️ Distributed Workflow Engine
> **Fault-tolerant job scheduling with DAG orchestration built from scratch in Go**

[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)](https://golang.org)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)
[![GitHub](https://img.shields.io/badge/Repo-Distributed--Workflow--Engine-00F0FF?style=flat-square&logo=github)](https://github.com/abhishekkumarcoder21/Distributed-Workflow-Engine)

- **Priority Queues**: Atomic Lua scripts with 6:3:1 weighted scheduling to prevent lower-priority starvation.
- **DAG Orchestration**: Kahn's algorithm for cycle detection with dependency-aware parallel execution.
- **Fault Recovery**: Visibility timeouts, exponential backoff, and dead-letter queue (DLQ) integration.
- **Chaos Verification**: Verified zero duplicate claims under race conditions across 15 concurrent workers.

```mermaid
flowchart LR
    A[Job Producer] --> B[Priority Queue\n(Redis Lua)]
    B --> C[Dispatcher]
    C --> D[Worker Pool]
    D -->|Success| E[PostgreSQL State]
    D -->|Fail / Timeout| F[Retry / Backoff]
    F -->|Exceeded Limit| G[Dead-Letter Queue]
```

---

### 2. 🔍 CodeLens — AI Code Review Platform
> **Hybrid AST + Semantic Retrieval + LLM Pipeline for Automated PR Review**

[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![OpenAI](https://img.shields.io/badge/GPT--4o-412991?style=flat-square&logo=openai&logoColor=white)](https://openai.com)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![GitHub](https://img.shields.io/badge/Repo-CodeLens-00F0FF?style=flat-square&logo=github)](https://github.com/abhishekkumarcoder21/CodeLens---AI-Code-Review-Platform)

- **Hybrid Pipeline**: Deterministic rules (AST analysis + regex) catch syntax & known vulnerabilities instantly; semantic retrieval feeds contextual diffs to GPT-4o.
- **Token Efficiency**: 8K-token intelligent context resolution with budget caps for cost-effective analysis.
- **Production Hardening**: HMAC-SHA256 webhook signatures, prompt-injection defense isolation, and encrypted credentials.

---

### 3. ⚡ SyncForge — Real-Time Collaborative Document Platform
> **Deterministic conflict-free state synchronization with custom RGA CRDT**

[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)](https://golang.org)
[![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=flat-square&logo=socketdotio&logoColor=white)](https://developer.mozilla.org)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![GitHub](https://img.shields.io/badge/Repo-SyncForge-00F0FF?style=flat-square&logo=github)](https://github.com/abhishekkumarcoder21/Syncforge---Real-Time-Collaborative-Document-Platform)

- **Conflict Resolution**: Custom Replicated Growable Array (RGA) CRDT paired with Lamport timestamps.
- **Low Latency**: Sustained throughput of **62,000+ operations/sec** across concurrent clients.
- **Resilience**: Offline-first local mutations with optimistic UI updates and batched persistence to PostgreSQL.

---

## 🛠 Tech Stack & Tooling

```
  ┌────────────────────────────────────────────────────────────────────────┐
  │                           SKILL MATRIX                                 │
  ├──────────────────┬─────────────────────────────────────────────────────┤
  │ BUILD            │ Go • Python • TypeScript • C++ • Java • SQL         │
  │ SCALE            │ Redis • PostgreSQL • WebSockets • Concurrency       │
  │ SHIP             │ Docker • GitHub Actions • Prometheus • CI/CD • AWS  │
  │ THINK            │ DSA • Distributed Systems • System Design • OS • CN │
  │ AUGMENT          │ LLM Integration • RAG • AST Analysis • Embeddings   │
  └──────────────────┴─────────────────────────────────────────────────────┘
```

---

## 📂 Repository Structure

```tree
Portfolio/
├── public/                 # Static assets, icons, and fonts
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, cyber-ink palette, grid utilities
│   │   ├── layout.tsx      # Root layout, Google Fonts (Space Grotesk, JetBrains Mono)
│   │   └── page.tsx        # Single-page control room assembly
│   ├── components/
│   │   ├── Animations.tsx  # Framer motion fade-in, reveal, and spring utilities
│   │   ├── Contact.tsx     # Terminal-inspired contact panel with copy-to-clipboard
│   │   ├── Engineering.tsx # Architectural trade-off deep dives
│   │   ├── Hero.tsx        # Mission telemetry, status badge, quick actions
│   │   ├── Journey.tsx     # Chronological trajectory timeline
│   │   ├── Navigation.tsx  # Floating cyber-dock navigation bar
│   │   ├── ProjectCard.tsx # Detailed project card with architecture links
│   │   ├── ProjectDemo.tsx # Interactive animated trace simulation
│   │   ├── Projects.tsx    # Showcase section container
│   │   ├── ProofOfWork.tsx # Competitive metrics & verified problem count
│   │   ├── SectionHeading  # Reusable section header component
│   │   ├── Skills.tsx      # Categorized skill matrix with project cross-links
│   │   └── SystemGraph.tsx # ASCII & node graph visualization
│   └── data/
│       ├── achievements.ts # Hackathons, competitive stats, journey steps
│       ├── profile.ts      # Bio, credentials, contact handles, education
│       ├── projects.ts     # Project schemas, architecture nodes, demo steps
│       └── skills.ts       # Categorized skills and project associations
├── package.json            # Dependencies (Next 16, React 19, Tailwind v4, Framer Motion)
├── tsconfig.json           # TypeScript configuration
└── README.md               # You are here!
```

---

## 💻 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

- **Node.js**: `v18.17.0` or later (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhishekkumarcoder21/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Launch the application**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser to explore the control room.

### Building for Production

To test the optimized production build:

```bash
npm run build
npm run start
```

---

## 💡 Engineering Philosophy

1. **Deterministic Over Heuristic**: Prefer mathematical invariants and deterministic rules wherever possible before leaning on statistical models.
2. **Proof Over Assertions**: Back architectural claims with benchmarks, load tests, race condition audits, and chaos experiments.
3. **Graceful Degradation**: Architect systems assuming hardware will crash, networks will partition, and external APIs will time out.
4. **Clean Abstractions**: Keep core engines minimal, idiomatic, and free of vendor lock-in.

---

## 📬 Connect & Contact

Have a distributed systems challenge, an engineering opportunity, or want to collaborate on open-source infrastructure?

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abhishek_Kumar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/11abhishek-kumar/)
[![GitHub](https://img.shields.io/badge/GitHub-abhishekkumarcoder21-181717?style=for-the-badge&logo=github)](https://github.com/abhishekkumarcoder21)
[![Email](https://img.shields.io/badge/Email-work.akthakur27@gmail.com-EA4335?style=for-the-badge&logo=gmail)](mailto:work.akthakur27@gmail.com)

<br />

*Crafted with precision &bull; Next.js 16 &bull; Tailwind CSS v4 &bull; Designed by Abhishek Kumar*

</div>