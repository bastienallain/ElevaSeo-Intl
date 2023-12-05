import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import NavigationLink from "@/components/NavigationLink";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/docs">{t("docs")}</NavigationLink>
          <NavigationLink href="/pricing">{t("pricing")}</NavigationLink>
          <NavigationLink href="/blog">{t("blog")}</NavigationLink>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
