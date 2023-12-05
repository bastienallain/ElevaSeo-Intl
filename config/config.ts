import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "fr"] as const;

export const pathnames = {
  "/": "/",
  "/docs": {
    en: "/docs",
    fr: `/documents`,
  },
  "/pricing": {
    en: "/pricing",
    fr: "/de-tarification",
  },
  "/blog": {
    en: "/blog",
    fr: "/du-blog",
  },
  "/about": {
    en: "/about",
    fr: "/a-propos",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
