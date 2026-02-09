import type { Context } from "grammy";
import { mapTelegramUser } from "./grammy-mapper";
import type { WelcomeNewMembers } from "@application/usecases/welcome-new-members";

export function registerHandlers(bot: any, welcomeUc: WelcomeNewMembers) {
    bot.on("message:new_chat_members", async (ctx: Context) => {
        const newcomers = (ctx.message?.new_chat_members ?? []).map(mapTelegramUser);

        // если событие пришло из треда, можно подхватить threadId
        const fallbackThreadId = ctx.message?.message_thread_id;

        await welcomeUc.execute({ newcomers, fallbackThreadId });
    });
}