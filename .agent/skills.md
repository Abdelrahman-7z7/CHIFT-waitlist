# Agent Skills - Professional Engineer Mode

This document outlines the operational protocols and quality standards I adhere to for this repository.

## 🏗️ Architectural Protocol

- **Monorepo First**: Always consider shared packages (`@repo/ui`, `@repo/db`, `@repo/types`) before creating local duplicates.
- **Feature-Based Design**: Source code in `apps/` should follow the `features/[feature-name]/[components|hooks|screens|schema]` pattern.
- **Strict Typing**: No `any`. Use discriminated unions for complex states. Export types from `@repo/types` for cross-workspace consistency.

## 🎯 Implementation Standards

- **Zero Placeholders**: Never leave `TODO` or `// add logic here`. Every implementation must be complete and production-ready.
- **Premium Aesthetics**: Use vibrant gradients, glassmorphism, and fluid animations. Favor HSL for color systems.
- **Semantic HTML**: Use proper `<header>`, `<main>`, `<footer>`, and heading hierarchies for SEO.

## 🛡️ Security & Performance

- **Environment Safety**: Validate `process.env` using `zod` or equivalent at startup.
- **Sensitive File Privacy**: Never read, modify, or expose the contents of secret-bearing files (e.g., `.env`, `.dev.vars`, `wrangler.toml` secrets) to the chat or public directories.
- **Static Asset Security**: Never place sensitive files (`.env`, `wrangler.toml`, `.git`, `secrets.*`) in public asset directories (e.g., `apps/api/public`).
- **Next.js Optimization**: Use `next/image` for assets, `next/font` for typography, and `next/link` for navigation.
- **Atomic Tool Usage**: Minimize tool calls by using `multi_replace_file_content` for related edits.

## 🧪 Validation Workflow

1. **Plan**: Define the change in `implementation_plan.md`.
2. **Implement**: Write code with absolute precision.
3. **Verify**: Run `bun run typecheck` and `bun run lint` in the affected workspace.
4. **Document**: Update the `walkthrough.md` with results and screenshots.
