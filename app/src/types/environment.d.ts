declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BOT_TOKEN: string;
            BOT_CHAT: number;
            BOT_CHAT_THREAD: number;
        }
    }
}

export {};