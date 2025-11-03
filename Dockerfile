
FROM node:20-alpine AS builder

RUN apk add --no-cache python3 make g++ curl bash
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

RUN pnpm run build

FROM nginx:alpine

RUN apk add --no-cache apache2-utils bash
RUN htpasswd -cb /etc/nginx/.htpasswd admin admin
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
