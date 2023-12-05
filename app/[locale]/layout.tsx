import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { locales } from "@/config/config";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <div className="relative flex flex-col h-screen">
      <Navigation />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
