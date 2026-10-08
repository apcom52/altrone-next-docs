"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Tabs } from "altrone-ui";
import { BookOpen, History, ListChecks, Palette, Shapes } from "lucide-react";
import type { DocTab } from "@/lib/docTabs";
import s from "./DocTabs.module.css";

const ICONS: Record<string, ReactNode> = {
  index: <BookOpen />,
  guidelines: <ListChecks />,
  css_vars: <Palette />,
  icons: <Shapes />,
  history: <History />,
};

export function DocTabs({
  tabs,
  activeSlug,
  basePath,
}: {
  tabs: DocTab[];
  activeSlug: string;
  basePath: string;
}) {
  const router = useRouter();

  if (tabs.length < 2) return null;

  const handleClick = (event: MouseEvent, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    router.push(href);
  };

  return (
    <div className={s.tabs}>
      <Tabs size="l">
        {tabs.map((tab) => {
          const href = tab.slug ? `${basePath}/${tab.slug}` : basePath;
          return (
            <Tabs.Item
              key={tab.id}
              label={tab.title}
              icon={ICONS[tab.id]}
              href={href}
              selected={tab.slug === activeSlug}
              onClick={(event) => handleClick(event, href)}
            />
          );
        })}
      </Tabs>
    </div>
  );
}
