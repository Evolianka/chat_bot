import type { Messenger } from "../ports/messenger";
import type { DomainUser } from "@domain/user";
import { buildWelcomeHtml } from "@domain/greeting";

export type WelcomeConfig = {
    targetChatId: number;
    targetThreadId?: number; // если хочешь всегда в конкретный тред
};

export class WelcomeNewMembers {
    constructor(
        private readonly messenger: Messenger,
        private readonly config: WelcomeConfig
    ) {}

    async execute(input: { newcomers: DomainUser[]; fallbackThreadId?: number }) {
        const threadId = this.config.targetThreadId ?? input.fallbackThreadId;

        for (const u of input.newcomers) {
            const text = buildWelcomeHtml(u);
            await this.messenger.sendMessage(this.config.targetChatId, text, {
                threadId,
                parseMode: "HTML",
            });
        }
    }
}