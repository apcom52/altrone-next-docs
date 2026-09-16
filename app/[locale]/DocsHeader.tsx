"use client";

import { Toolbar, useAltroneTheme } from "altrone-ui";
import { Moon, Search, Sun, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/lib/types";
import { rememberLocale } from "@/lib/localePreference";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

const BLOG_LABEL: Record<string, string> = {
  en: "Blog",
  ru: "Блог",
};

export function DocsHeader({ locale }: { locale: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const [, section, category] = segments;

  /** Back to the section's index when drilled into one of its pages. */
  const backHref =
    section === "components" && segments.length === 4
      ? `/${locale}/components/${category}`
      : section === "foundations" && segments.length === 3
        ? `/${locale}/foundations`
        : undefined;

  const restOfPath = segments.slice(1).join("/");

  const { theme, setTheme } = useAltroneTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Toolbar variant="solid" size="m">
      <Toolbar.Leading>
        {backHref && (
          <Toolbar.Group>
            <Toolbar.Action asChild icon={<ArrowLeft />} label="Back">
              <Link href={backHref} />
            </Toolbar.Action>
          </Toolbar.Group>
        )}
      </Toolbar.Leading>
      <Toolbar.Trailing>
        <Toolbar.Group>
          <Toolbar.Action asChild label={BLOG_LABEL[locale] ?? BLOG_LABEL.en}>
            <Link href={`/${locale}/blog`} />
          </Toolbar.Action>
        </Toolbar.Group>
        <Toolbar.Group>
          {LOCALES.map((l) => (
            <Toolbar.Action
              key={l}
              asChild
              label={LOCALE_LABELS[l]}
              selected={locale === l}
            >
              <Link
                href={`/${l}/${restOfPath}`}
                onClick={() => rememberLocale(l)}
              />
            </Toolbar.Action>
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
