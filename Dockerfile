
FROM node:20-alpine AS builder


RUN corepack enable && corepack prepare pnpm@latest --activate


WORKDIR /app


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --frozen-lockfile


COPY . .


RUN pnpm run build


FROM node:20-alpine AS runner

WORKDIR /app


RUN corepack enable && corepack prepare pnpm@latest --activate


COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules


ENV NODE_ENV=production


EXPOSE 80


CMD ["pnpm", "astro", "preview", "--port", "80", "--host"]
