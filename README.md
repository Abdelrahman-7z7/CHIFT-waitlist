# ⚡ CHIFT_WAITLIST Monorepo

<p align="center">
  <img src="https://img.shields.io/badge/Bun-1.3.8-black?style=for-the-badge&logo=bun" alt="Bun Ready" />
  <img src="https://img.shields.io/badge/Turbo-2.9.6-blue?style=for-the-badge&logo=turborepo" alt="Turbo Powered" />
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/Astro-4.5-orange?style=for-the-badge&logo=astro" alt="Astro" />
  <img src="https://img.shields.io/badge/Hono-Cloudflare-ff69b4?style=for-the-badge&logo=hono" alt="Hono API" />
  <img src="https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=for-the-badge&logo=drizzle" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/Sentry-Log-362D59?style=for-the-badge&logo=sentry" alt="Sentry" />
  <img src="https://img.shields.io/badge/Resend-Email-000000?style=for-the-badge&logo=resend" alt="Resend" />
  <img src="https://img.shields.io/badge/Zod-Validated-3E67B1?style=for-the-badge&logo=zod" alt="Zod" />
  <img src="https://img.shields.io/badge/OpenAPI-Swagger-85EA2D?style=for-the-badge&logo=openapiinitiative&logoColor=black" alt="OpenAPI" />
</p>

---

## 🌟 Welcome

Welcome to the **Learning Approaches** ecosystem. This is a high-performance, production-grade TypeScript monorepo built with the modern stack: **Bun**, **Turborepo**, **Astro**, **Hono**, and **Cloudflare Workers**.

## 🏗️ Architecture

```text
.
├── 📱 apps/
│   ├── 🌐 web        # Next.js 15 (Feature-based Architecture)
│   ├── 📚 docs       # Astro + MDX (Port 3001)
│   └── ⚡ api        # Hono + Cloudflare (Port 8787)
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
- **Frontend**: [Next.js](https://nextjs.org/) (Web) & [Astro](https://astro.build/) (Docs).
- **API**: [Hono](https://hono.dev/) — Ultrafast web framework for Cloudflare Workers.
- **Database**: [Drizzle ORM](https://orm.drizzle.team/) — Headless TypeScript ORM for SQLite/D1.
- **Security**: Sentry (Logging), Resend (Transactional Email), Hono Rate Limiter, Zod (Validation).
- **Documentation**: OpenAPI (Swagger) via `@hono/zod-openapi`.
- **Styling**: Tailwind CSS + [DaisyUI 5](https://daisyui.com/).
- **Quality**: Husky + Lint-Staged + Commitlint + ESLint 9 (Flat Config).

---

## 🛡️ API & Security

The backend (`apps/api`) is built to professional standards with:

- **Self-Documenting API**: Interactive Swagger UI at `/api/docs`.
- **Rate Limiting**: Protection against spam and brute-force.
- **Data Sanitization**: Automatic normalization (trimming, lowercasing) and validation via Zod.
- **Transactional Emails**: Verification flow powered by Resend.
- **Observability**: Real-time error tracking with Sentry.

---

## 🚀 Quick Start

Ensure you have [Bun](https://bun.sh/) installed.

### 1. Install Dependencies

```bash
bun install
```

### 2. Setup Database

```bash
# Apply migrations to your local D1 database
bun run db:migrate:local
```

### 3. Launch Development Environment

```bash
bun run dev
```

_This starts all apps in parallel using Turbo on the following ports:_

| App          | Port   | URL                     |
| :----------- | :----- | :---------------------- |
| `@repo/web`  | `3000` | `http://localhost:3000` |
| `@repo/docs` | `3001` | `http://localhost:3001` |
| `@repo/api`  | `8787` | `http://localhost:8787` |

### 3. Build for Production

```bash
bun run build
```

---

## 📂 Web App Structure (`apps/web`)

The web application follows a **Feature-based Architecture** inside the `src/` directory:

```text
src/
├── app/                # Next.js App Router (Routes & Layouts)
├── features/           # Modular Feature Folders
│   └── [feature]/
│       ├── components/ # UI components for this feature
│       ├── screens/    # Page compositions
│       ├── hooks/      # Feature-specific hooks
│       └── schema/     # Data validation (Zod, etc.)
├── components/         # Shared global UI components
├── hooks/              # Shared global hooks
└── globals.css         # Global tailwind styles
```

---

## 📈 Project Roadmap

### 🟢 Phase 1-3: Foundation & Core (Completed)

- [x] Monorepo orchestration (Bun + Turbo)
- [x] Shared UI/DB/Types packages
- [x] Dockerization & CI/CD Pipeline

### 🟢 Phase 4: Professional Backend & Security (Completed)

- [x] Hono API with OpenAPI/Swagger
- [x] Zod-based validation & sanitization
- [x] Sentry & Resend integration
- [x] Waitlist signup & verification flow

### 🟡 Phase 5: Frontend Integration (Next)

- [ ] Connect Next.js Waitlist form to API
- [ ] UI feedback for signup (toasts, loading states)
- [ ] Landing page polish & animations

### ⚪ Phase 6: Production Hardening

- [ ] End-to-End Testing (Playwright)
- [ ] Analytics integration
- [ ] Production deployment automation

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
