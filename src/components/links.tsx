// links.ts
interface NavLink {
    href: string;
    label: string; // Utilisez un identifiant pour la traduction ici
}

export const navigationLinks: NavLink[] = [
    { href: "/", label: "home" },
    { href: "/pathnames", label: "pathnames" },
    // Ajoutez d'autres liens ici
];
