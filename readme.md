# Агент №0 [[amor_fatum]](https://t.me/amor_fatum) :)

## Описание

Позывной: [amor_fatum_bot](https://t.me/amor_fatum_bot)

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
cp .env.local.example .env.local
```

Заполните `.env.local` файл своими значениями.

Необходимо поднять docker-контейнеры.

```bash
docker-compose up -d
```

Выполнить команду инициализации Vault:

```bash
docker compose exec vault sh -lc '
  export VAULT_ADDR=http://127.0.0.1:8200 
  vault operator init -key-shares=1 -key-threshold=1
'
````

Vault сгенерирует unseal и root token. Сохраните их и подставьте в энвы в docker-compose.yml.

Выполните команду unseal:

```bash
docker compose exec vault sh -lc '
  export VAULT_ADDR=http://127.0.0.1:8200 
  vault operator unseal <UNSEAL_KEY>
'
```

Для доступа к Vault выполните команду, если нужна дополнительная конфигурация:

```bash
docker compose exec vault sh -lc '
  export VAULT_ADDR=http://127.0.0.1:8200
  vault login <ROOT_TOKEN>
'
```

### Запуск проекта:

```bash
docker-compose up -d
```

### Остановка проекта:

```bash
docker-compose down
```