import NextLink from "next/link";
import { useTranslations } from "next-intl";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { siteConfig } from "@/config/site";

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

export default function Navbar() {
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
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ELEVASEO</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/docs">{t("docs")}</NavigationLink>
          <NavigationLink href="/pricing">{t("pricing")}</NavigationLink>
          <NavigationLink href="/blog">{t("blog")}</NavigationLink>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
