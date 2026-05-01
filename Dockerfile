# syntax=docker/dockerfile:1

#############################################
# 1) Base Image
#############################################
FROM oven/bun:1.3.8 AS base
WORKDIR /app

#############################################
# 2) Dependencies & Build (Builder)
#############################################
FROM base AS builder
# Copy package files first for better caching
COPY package.json bun.lock ./
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/
COPY apps/docs/package.json ./apps/docs/
COPY packages/config/package.json ./packages/config/
COPY packages/db/package.json ./packages/db/
COPY packages/types/package.json ./packages/types/
COPY packages/ui/package.json ./packages/ui/

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the source
COPY . .

# Run turbo build across monorepo
RUN bun run build

#############################################
# 3) Production Runner (Prod)
#############################################
FROM base AS runner
ENV NODE_ENV=production

# Copy built workspace and node_modules from builder
COPY --from=builder /app /app

# Expose ports for all services
EXPOSE 3000 3001 8787

# Default command to start the application (starts web, docs, and api via turbo)
CMD ["bun", "run", "start"]

