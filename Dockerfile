# Этап 1: Сборка приложения
FROM node:20-alpine AS builder

# Устанавливаем необходимые системные зависимости для Sharp и других нативных модулей
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    pixman-dev

# Устанавливаем pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Копируем файлы зависимостей
COPY package.json pnpm-lock.yaml* ./

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile || pnpm install

# Копируем исходный код
COPY . .

# Показываем информацию для отладки
RUN echo "Node version:" && node --version && \
    echo "pnpm version:" && pnpm --version && \
    echo "Files in directory:" && ls -la

# Собираем проект
RUN pnpm build

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