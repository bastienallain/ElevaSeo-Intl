import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { ThemeSwitch } from "@/components/theme-switch";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import NavigationLink from "@/components/NavigationLink";
import {
  Logo,
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  SearchIcon,
} from "@/components/icons";

import { siteConfig } from "@/config/site";

export default function Navigation() {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const t = useTranslations("Navigation");

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div className="flex">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ELEVASEO</p>
          </NextLink>
          <div className="ml-2 mt-1">
            <NavigationLink href="/">{t("home")}</NavigationLink>
            <NavigationLink href="/docs">{t("docs")}</NavigationLink>
            <NavigationLink href="/pricing">{t("pricing")}</NavigationLink>
            <NavigationLink href="/blog">{t("blog")}</NavigationLink>
            <NavigationLink href="/about">{t("about")}</NavigationLink>
          </div>
        </div>
        <div className="flex">
          <div className="p-2">{searchInput}</div>
          <div className="flex gap-2">
            <Link
              isExternal
              href={siteConfig.links.twitter}
              aria-label="Twitter">
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              href={siteConfig.links.discord}
              aria-label="Discord">
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.github} aria-label="Github">
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </div>
          <LocaleSwitcher />
        </div>
      </nav>
    </div>
  );
}
