import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'es'] as const;

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    fr: '/a-propos',
    es: '/acerca-de'
  },
  '/services': '/',
  '/services/seo-audit': {
    en: '/services/seo-audit',
    fr: '/services/audit-seo',
    es: '/servicios/auditoria-seo'
  },
  '/services/ecommerce-development': {
    en: '/services/ecommerce-development',
    fr: '/services/developpement-ecommerce',
    es: '/servicios/desarrollo-ecommerce'
  },
  // Ajoutez d'autres services ici de la même manière
  '/blog': {
    en: '/blog',
    fr: '/blog',
    es: '/blog'
  },
  '/contact': {
    en: '/contact',
    fr: '/contact',
    es: '/contacto'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
