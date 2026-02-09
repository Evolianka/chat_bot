# Агент №1 [[amor_fati_garden]](https://t.me/amor_fati_garden) :)

## Описание

Позывной: [amor_fati_garden_bot](https://t.me/amor_fati_garden_bot)

Функционал:
- Анонимный постинг комментов под постами
- Анонимный постинг сообщений в чат

Особенности:

- Генерация случайных никнеймов из словарей
- Не сохраняет никакие данные пользователей, кроме сообщений в чате c юзером
- Использует зашифрованные подписи

Стек технологий:
- Node.js
- TypeScript
- Grammy
- Docker
- Hashicorp Vault
- Clean Architecture

## Использование

### Установка проекта:

```bash 
cd ./app
cp .env.local.example .env
```

Заполните `.env.local` файл своими значениями.

Необходимо поднять docker-контейнеры.

```bash
docker-compose up -d
```

### Запуск проекта:

```bash
docker-compose up -d
```

### Остановка проекта:

```bash
docker-compose down
```