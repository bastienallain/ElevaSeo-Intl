import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

import { title } from "@/components/primitives";

import { locales } from "@/config/config";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some(cur => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>
      {t.rich("content", {
        p: chunks => <p className="mt-4">{chunks}</p>,
        code: chunks => <code className="font-mono text-white">{chunks}</code>,
      })}
    </div>
  );
}
