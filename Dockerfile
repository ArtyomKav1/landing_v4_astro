
# Этап 1: Сборка приложения
FROM node:20-alpine AS builder

# Устанавливаем pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Копируем файлы зависимостей
COPY package.json pnpm-lock.yaml* ./

# Устанавливаем зависимости с подробным логом
RUN pnpm install --frozen-lockfile || pnpm install

# Копируем исходный код
COPY . .

# Показываем содержимое для отладки
RUN ls -la && echo "Node version:" && node --version && echo "pnpm version:" && pnpm --version

# Собираем проект с подробным логом
RUN pnpm build || (echo "Build failed! Showing package.json scripts:" && cat package.json && exit 1)

# Этап 2: Production с nginx
FROM nginx:alpine

# Копируем собранные файлы из builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Создаем файл с паролем (admin:admin)
RUN apk add --no-cache apache2-utils && \
    htpasswd -bc /etc/nginx/.htpasswd admin admin

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]