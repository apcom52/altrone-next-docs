"use client";

import { DocsSearch } from "@/components/DocsSearch";

import { Dropdown, Toolbar, useAltroneTheme } from "altrone-ui";
import { Globe, Moon, Sun, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, LOCALE_NAMES, findPageTitle } from "@/lib/types";
import type { Navigation } from "@/lib/types";
import { rememberLocale } from "@/lib/localePreference";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

export function DocsHeader({ locale, nav }: { locale: string; nav: Navigation }) {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split("/").filter(Boolean);
  const [, section, category] = segments;

  const backHref =
    section === "components" && segments.length >= 4
      ? `/${locale}/components/${category}`
      : section === "foundations" && segments.length === 3
        ? `/${locale}/foundations`
        : undefined;

  const backLabel =
    nav.items.find(
      (item) =>
        item.type === "group" && item.slug === (section === "components" ? category : section),
    )?.title ?? "Back";

  const restOfPath = segments.slice(1).join("/");
  const title = findPageTitle(nav, restOfPath);

  const switchLocale = (l: string) => {
    rememberLocale(l);
    router.push(`/${l}/${restOfPath}`);
  };

  const { theme, setTheme } = useAltroneTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Toolbar variant="solid" size="m">
      <Toolbar.Leading>
        {backHref && (
          <Toolbar.Group>
            <Toolbar.Action asChild icon={<ArrowLeft />} label={backLabel}>
              <Link href={backHref} />
            </Toolbar.Action>
          </Toolbar.Group>
        )}
        {title && <Toolbar.Title title={title} />}
      </Toolbar.Leading>
      <DocsSearch key={locale} locale={locale}>
        <Toolbar.Group>
          <Dropdown
            placement="bottom-end"
            content={
              <Dropdown.Menu>
                <Dropdown.RadioList value={locale} onChange={switchLocale}>
                  {LOCALES.map((l) => (
                    <Dropdown.RadioItem key={l} value={l} label={LOCALE_NAMES[l]} />
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
      </DocsSearch>
    </Toolbar>
  );
}
