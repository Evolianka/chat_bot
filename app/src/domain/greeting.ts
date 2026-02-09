import type { DomainUser } from "./user";
import { getDisplayName } from "./user";

function escapeHtml(s: string): string {
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

export function buildWelcomeHtml(u: DomainUser): string {
    const name = escapeHtml(getDisplayName(u));
    const link = `tg://user?id=${u.id}`;
    return `Привет, <a href="${link}">${name}</a>, тебе будет здесь хорошо. Здесь удовольствие – высшее благо. Можешь ознакомиться с <a href="https://t.me/amor_fati_garden/1/12">приветственным сообщением</a>`;
}