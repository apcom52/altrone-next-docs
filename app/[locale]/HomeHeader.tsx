"use client";

import { Dropdown, Toolbar, useAltroneTheme } from "altrone-ui";
import { Globe, Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LOCALES, LOCALE_NAMES } from "@/lib/types";
import { rememberLocale } from "@/lib/localePreference";
import { LogoMark } from "../LogoMark";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

const LINKS: Record<
  string,
  { docs: string; installation: string; blog: string }
> = {
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
          <Dropdown
            placement="bottom-end"
            content={
              <Dropdown.Menu>
                <Dropdown.RadioList value={locale} onChange={switchLocale}>
                  {LOCALES.map((l) => (
                    <Dropdown.RadioItem
                      key={l}
                      value={l}
                      label={LOCALE_NAMES[l]}
                    />
                  ))}
                </Dropdown.RadioList>
              </Dropdown.Menu>
            }
          >
            <Toolbar.Action
              label={LOCALE_LABELS[locale] ?? LOCALE_LABELS.en}
              icon={<Globe />}
            />
          </Dropdown>
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
