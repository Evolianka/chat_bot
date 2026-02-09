import { startBot } from "@infrastructure/telegram/bot";

startBot(process.env.BOT_TOKEN!);