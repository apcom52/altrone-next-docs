"use client";

import { Screen } from "altrone-ui";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { useAside } from "./AsideContext";
import { HomeHeader } from "./[locale]/HomeHeader";
import { DocsHeader } from "./[locale]/DocsHeader";
import type { Navigation } from "@/lib/types";

/**
 * Lives in `app/[locale]/layout.tsx`, so it persists across route
 * navigations — only `Screen.Content`'s children (Next's own `{children}`)
 * and the chrome below actually swap, which is what lets `Screen.Sidebar` /
 * `Screen.Aside` animate in and out via their `collapsed` prop instead of
 * the whole `Screen` remounting per page.
 *
 * Which chrome to show is derived straight from the URL — same on the
 * server and the client, so there's no post-hydration flash for the
 * header/sidebar. Only the TOC (`Screen.Aside`) content itself comes from
 * `AsideContext`, since it depends on a specific page's markdown headings.
 */
export function ScreenShell({
  locale,
  nav,
  children,
}: {
  locale: string;
  nav: Navigation;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").filter(Boolean).slice(1);

  const isHome = rest.length === 0;
  const isBlog = rest[0] === "blog";
  const isDocs = !isHome && !isBlog;

  const aside = useAside();
  const showAside = isDocs && aside != null;

  let header: ReactNode;
  if (isHome) header = <HomeHeader locale={locale} />;
  else if (isDocs) header = <DocsHeader locale={locale} />;
  else header = <Header />;

  return (
    <Screen mobileBreakpoint="md">
      <Screen.Header>{header}</Screen.Header>

      <Screen.Sidebar visibleFrom="md" collapsed={!isDocs}>
        {isDocs ? <Sidebar nav={nav} /> : null}
      </Screen.Sidebar>

      <Screen.Content maxWidth={showAside ? 800 : undefined}>
        {children}
      </Screen.Content>

      <Screen.Aside visibleFrom="lg" collapsed={!showAside}>
        {aside}
      </Screen.Aside>

      <Screen.Footer>
        <Footer />
      </Screen.Footer>
    </Screen>
  );
}
