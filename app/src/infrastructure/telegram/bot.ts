import { Bot } from "grammy";
import { GrammyMessenger } from "./grammy-messenger";
import { WelcomeNewMembers } from "@application/usecases/welcome-new-members";
import { registerHandlers } from "./handlers";

export function startBot(config: NodeJS.ProcessEnv) {
    const bot = new Bot(config.BOT_TOKEN);

    const messenger = new GrammyMessenger(bot.api);

    const welcomeUc = new WelcomeNewMembers(messenger, {
        targetChatId: config.BOT_CHAT,
        targetThreadId: config.BOT_CHAT_THREAD, // твой “конкретный тред”
    });

    registerHandlers(bot, welcomeUc);

    bot.start();
}