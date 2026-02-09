export type DomainUser = {
    id: number;
    username?: string;
    firstName?: string;
    lastName?: string;
};

export function getDisplayName(u: DomainUser): string {
    const first = (u.firstName ?? "").trim();
    const last = (u.lastName ?? "").trim();

    const full = [first, last].filter(Boolean).join(" ").trim();
    if (full) return full;

    if (u.username?.trim()) return `@${u.username.trim()}`;

    return "Незнакомец";
}