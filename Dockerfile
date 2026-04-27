# syntax=docker/dockerfile:1

#############################################
# 1) Base Image
#############################################
FROM oven/bun:1 AS base
WORKDIR /app

#############################################
# 2) Dependencies & Build (Builder)
#############################################
FROM base AS builder
COPY package.json bun.lockb* ./
COPY . .

# Install dependencies
RUN bun install

# Run turbo build across monorepo
RUN bun run build

#############################################
# 3) Production Runner (Prod)
#############################################
FROM base AS runner
ENV NODE_ENV=production

# Copy built workspace and node_modules from builder
COPY --from=builder /app /app

EXPOSE 3000

# Default command to start the application
CMD ["bun", "run", "start"]
