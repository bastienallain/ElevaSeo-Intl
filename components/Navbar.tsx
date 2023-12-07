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
        <NavbarItem className="hidden sm:flex gap-2">
         
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
            <NavbarMenuItem >     <ul> <li>  <LocaleSwitcher />
            </li> <li>
              <NavigationLink href="/">{t("home")}</NavigationLink></li> <li>
          <NavigationLink href="/docs">{t("docs")}</NavigationLink></li> <li>
          <NavigationLink href="/pricing">{t("pricing")}</NavigationLink></li> <li>
          <NavigationLink href="/blog">{t("blog")}</NavigationLink></li> <li>
          <NavigationLink href="/about">{t("about")}</NavigationLink></li></ul> 
            </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
