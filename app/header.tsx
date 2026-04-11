"use client";

import { Toolbar } from "altrone-ui";
import { Minus, Moon, Plus, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES } from "@/lib/types";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] ?? "en";

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <Toolbar>
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
            label="Уменьшить шрифт"
            icon={<Minus />}
            showLabel={false}
          />
          <Toolbar.Action
            label="Увеличить шрифт"
            icon={<Plus />}
            showLabel={false}
          />
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action
            label="Тема: темная"
            icon={<Moon />}
            showLabel={false}
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
