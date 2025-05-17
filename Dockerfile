FROM node:20-slim AS builder
RUN apt-get update && apt-get install -y \
    build-essential \
    libc6-dev \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/* \
    && corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build
FROM nginx:alpine
RUN apk add --no-cache apache2-utils
RUN htpasswd -c -b /etc/nginx/.htpasswd admin admin
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
