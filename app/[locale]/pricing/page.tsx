import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "PricingPage" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
  };
}

export default function PricingPage() {
  const t = useTranslations("PricingPage");

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
