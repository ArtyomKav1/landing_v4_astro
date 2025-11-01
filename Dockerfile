
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM nginx:alpine


COPY --from=builder /app/dist /usr/share/nginx/html


RUN apk add --no-cache apache2-utils && \
    htpasswd -bc /etc/nginx/.htpasswd admin admin


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]