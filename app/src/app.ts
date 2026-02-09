import * as k from './types/environment';
import { startBot } from "@infrastructure/telegram/bot";

startBot(process.env);