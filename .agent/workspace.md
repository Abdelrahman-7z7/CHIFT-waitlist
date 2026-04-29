# Workspace Map - Learning Approaches Monorepo

Quick reference guide for the repository structure.

## 📁 Applications (`apps/`)

- **`web`**: Next.js 15 Landing Page & Core Platform.
  - _Tech_: React 19, Tailwind, DaisyUI, Framer Motion.
  - _Entry_: `src/app/page.tsx`.
- **`api`**: Hono API on Cloudflare Workers.
  - _Tech_: Drizzle ORM, Zod.
- **`docs`**: Astro-based Documentation.

## 📦 Shared Packages (`packages/`)

- **`ui`**: Shared React components.
- **`db`**: Drizzle schema and D1 database client.
- **`types`**: Shared TypeScript interfaces/types.
- **`config`**: ESLint, Prettier, and TS configurations.

## 🛠️ Configuration & Tooling

- **Orchestration**: Turborepo (`turbo.json`).
- **Runtime**: Bun (`bun.lock`).
- **Dev Container**: `Dockerfile`, `docker-compose.yml`.
- **Git Hooks**: Husky (`.husky/`), lint-staged.

## 📜 Roadmap

- Refer to `planning/plan.md` for the primary project milestones.
