import type { Api } from "grammy";
import type { Messenger, SendOptions } from "../../application/ports/messenger";

export class GrammyMessenger implements Messenger {
    constructor(private readonly api: Api) {}

    async sendMessage(chatId: number, text: string, options?: SendOptions) {
        await this.api.sendMessage(chatId, text, {
            parse_mode: options?.parseMode,
            message_thread_id: options?.threadId,
        });
    }
}