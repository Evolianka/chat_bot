# Базовый образ
FROM node:22.20.0-alpine

# Рабочая директория
WORKDIR /bot

# Копируем package.json и lock
COPY ../../app /bot

# Устанавливаем зависимости
RUN npm install --verbose

# Открываем порт (если нужен для webhook)
EXPOSE 3000

# Запуск
CMD npm install && npm run dev:local

