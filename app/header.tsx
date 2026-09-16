"use client";

import { Toolbar, useAltroneTheme } from "altrone-ui";
import { Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES } from "@/lib/types";
import { rememberLocale } from "@/lib/localePreference";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

const NAV_LINKS: Record<string, { home: string; docs: string; blog: string }> = {
  en: { home: "Home", docs: "Docs", blog: "Blog" },
  ru: { home: "Главная", docs: "Документация", blog: "Блог" },
};

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] ?? "en";
  const labels = NAV_LINKS[currentLocale] ?? NAV_LINKS.en;

  const switchLocale = (locale: string) => {
    rememberLocale(locale);
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const { theme, setTheme } = useAltroneTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Toolbar variant="solid" size="m">
      <Toolbar.Leading>
        <Toolbar.Group>
          <Toolbar.Action
            asChild
            label={labels.home}
            selected={pathname === `/${currentLocale}`}
          >
            <Link href={`/${currentLocale}`} />
          </Toolbar.Action>
          <Toolbar.Action
            asChild
            label={labels.docs}
            selected={isActive(`/${currentLocale}/getting-started`)}
          >
            <Link href={`/${currentLocale}/getting-started`} />
          </Toolbar.Action>
          <Toolbar.Action
            asChild
            label={labels.blog}
            selected={isActive(`/${currentLocale}/blog`)}
          >
            <Link href={`/${currentLocale}/blog`} />
          </Toolbar.Action>
        </Toolbar.Group>
      </Toolbar.Leading>
      <Toolbar.Trailing>
        <Toolbar.Group>
          {LOCALES.map((locale) => (
            <Toolbar.Action
              key={locale}
              label={LOCALE_LABELS[locale]}
              selected={currentLocale === locale}
              onClick={() => switchLocale(locale)}
            />
          ))}
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action
            label={isDark ? "Светлая тема" : "Тёмная тема"}
            icon={isDark ? <Sun /> : <Moon />}
            showLabel={false}
            onClick={toggleTheme}
          />
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action
            label="Поиск по сайту"
            icon={<Search />}
            showLabel={false}
          />
        </Toolbar.Group>
      </Toolbar.Trailing>
    </Toolbar>
  );
};
