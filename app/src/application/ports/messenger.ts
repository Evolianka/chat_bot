export type SendOptions = {
    threadId?: number;
    parseMode?: "HTML" | "MarkdownV2";
};

export interface Messenger {
    sendMessage(chatId: number, text: string, options?: SendOptions): Promise<void>;
}