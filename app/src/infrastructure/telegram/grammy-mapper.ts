import type { User } from "grammy/types";
import type { DomainUser } from "@domain/user";

export function mapTelegramUser(u: User): DomainUser {
    return {
        id: u.id,
        username: u.username,
        firstName: u.first_name,
        lastName: u.last_name,
    };
}