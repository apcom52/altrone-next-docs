"use client";

import { Toolbar, useAltroneTheme } from "altrone-ui";
import { Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LOCALES } from "@/lib/types";
import { rememberLocale } from "@/lib/localePreference";
import { LogoMark } from "../LogoMark";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

const LINKS: Record<string, { docs: string; installation: string; blog: string }> = {
  en: { docs: "Docs", installation: "Installation", blog: "Blog" },
  ru: { docs: "Документация", installation: "Установка", blog: "Блог" },
};

export function HomeHeader({ locale }: { locale: string }) {
  const router = useRouter();
  const labels = LINKS[locale] ?? LINKS.en;

  const { theme, setTheme } = useAltroneTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const switchLocale = (target: string) => {
    rememberLocale(target);
    router.push(`/${target}`);
  };

  return (
    <Toolbar variant="solid" size="m">
      <Toolbar.Leading>
        <LogoMark locale={locale} />
      </Toolbar.Leading>
      <Toolbar.Trailing>
        <Toolbar.Group>
          <Toolbar.Action asChild label={labels.docs}>
            <Link href={`/${locale}/getting-started`} />
          </Toolbar.Action>
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action asChild label={labels.installation}>
            <Link href={`/${locale}/installation`} />
          </Toolbar.Action>
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action asChild label={labels.blog}>
            <Link href={`/${locale}/blog`} />
          </Toolbar.Action>
        </Toolbar.Group>
        <Toolbar.Group>
          {LOCALES.map((l) => (
            <Toolbar.Action
              key={l}
              label={LOCALE_LABELS[l]}
              selected={locale === l}
              onClick={() => switchLocale(l)}
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
}
