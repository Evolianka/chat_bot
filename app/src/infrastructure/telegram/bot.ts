import { Bot } from "grammy";
import { GrammyMessenger } from "./grammy-messenger";
import { WelcomeNewMembers } from "../../application/usecases/welcome-new-members";
import { registerHandlers } from "./handlers";

export function startBot(token: string) {
    const bot = new Bot(token);

    const messenger = new GrammyMessenger(bot.api);

    const welcomeUc = new WelcomeNewMembers(messenger, {
        targetChatId: -1003788134273,
        targetThreadId: 2, // твой “конкретный тред”
    });

    registerHandlers(bot, welcomeUc);

    bot.start();
}