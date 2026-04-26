# ⚡ Learning Approaches Monorepo

<p align="center">
  <img src="https://img.shields.io/badge/Bun-1.3.8-black?style=for-the-badge&logo=bun" alt="Bun Ready" />
  <img src="https://img.shields.io/badge/Turbo-2.9.6-blue?style=for-the-badge&logo=turborepo" alt="Turbo Powered" />
  <img src="https://img.shields.io/badge/Astro-4.5-orange?style=for-the-badge&logo=astro" alt="Astro" />
  <img src="https://img.shields.io/badge/Hono-Cloudflare-ff69b4?style=for-the-badge&logo=hono" alt="Hono API" />
  <img src="https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=for-the-badge&logo=drizzle" alt="Drizzle ORM" />
</p>

---

## 🌟 Welcome

Welcome to the **Learning Approaches** ecosystem. This is a high-performance, production-grade TypeScript monorepo built with the modern stack: **Bun**, **Turborepo**, **Astro**, **Hono**, and **Cloudflare Workers**.

## 🏗️ Architecture

```text
.
├── 📱 apps/
│   ├── 🌐 web        # Astro + Tailwind (Landing Page)
│   ├── 📚 docs       # Astro + MDX (Documentation)
│   └── ⚡ api        # Hono (Cloudflare Workers API)
├── 📦 packages/
│   ├── 🎨 ui         # Shared React Components + Tailwind
│   ├── 🗄️ db         # Drizzle ORM + D1 Migrations
│   ├── 🏷️ types      # Shared TypeScript interfaces
│   └── ⚙️ config     # Shared ESLint, Prettier, & TS configs
├── 🐳 Dockerfile     # Multi-stage Bun build
└── 🚀 .github/       # CI/CD Workflows
```

---

## 🛠️ Tech Stack & Pillars

- **Runtime**: [Bun](https://bun.sh/) — Fast all-in-one JavaScript runtime.
- **Orchestration**: [Turborepo](https://turbo.build/) — High-performance build system for JS/TS monorepos.
- **Frontend**: [Astro](https://astro.build/) — The web framework for content-driven websites.
- **API**: [Hono](https://hono.dev/) — Ultrafast web framework for Cloudflare Workers.
- **Database**: [Drizzle ORM](https://orm.drizzle.team/) — Headless TypeScript ORM for SQLite/D1.
- **Quality**: Husky + Lint-Staged + Commitlint + ESLint (Flat Config).

---

## 🚀 Quick Start

Ensure you have [Bun](https://bun.sh/) installed.

### 1. Install Dependencies

```bash
bun install
```

### 2. Launch Development Environment

```bash
bun run dev
```

_This starts all apps (Web, Docs, API) in parallel using Turbo._

### 3. Build for Production

```bash
bun run build
```

---

## 📈 Project Roadmap & Implementation Plan

We are building this project phase by phase. Below is our current progress:

### 🟢 Phase 1: Infrastructure (Completed)

- [x] Root configuration (Bun + Turbo)
- [x] Shared config packages (ESLint, Prettier, TSConfig)
- [x] Git Hooks & Commit Quality (Husky, Lint-Staged, Commitlint)

### 🟢 Phase 2: Apps & Core (Completed)

- [x] Scaffolding `apps/web` (Astro)
- [x] Scaffolding `apps/docs` (MDX)
- [x] Scaffolding `apps/api` (Hono + Wrangler)
- [x] Shared `@repo/ui` component library
- [x] Shared `@repo/types` interfaces

### 🟢 Phase 3: Persistent Data & CI/CD (Completed)

- [x] `@repo/db` with Drizzle ORM & D1
- [x] Migration workflow implementation
- [x] Dockerization (Multi-stage Bun build)
- [x] GitHub Actions CI Pipeline

### 🟡 Phase 4: Feature Implementation (Next)

- [ ] Authentication flow (Clerk or Auth.js)
- [ ] API Endpoints for user management
- [ ] Shared UI layout components
- [ ] Database seeding scripts

### ⚪ Phase 5: Production & Polish

- [ ] Cloudflare Deployment automation
- [ ] Performance monitoring (Sentry)
- [ ] End-to-End Testing (Playwright)

---

## 🐳 Docker Deployment

To run the entire stack in a containerized environment:

```bash
docker-compose up --build
```

_Supports `NODE_ENV=development` for hot-reloading inside Docker!_

---

## 📜 Scripts Reference

| Command               | Description                                |
| :-------------------- | :----------------------------------------- |
| `bun run dev`         | Start all applications in development mode |
| `bun run build`       | Build all packages and applications        |
| `bun run lint`        | Run ESLint across the entire monorepo      |
| `bun run typecheck`   | Verify TypeScript types everywhere         |
| `bun run lint-staged` | Manually trigger staged file checks        |

---

<p align="center">
  Built with ❤️ for the Learning Approaches Community.
</p>
