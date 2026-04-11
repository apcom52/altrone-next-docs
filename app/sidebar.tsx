"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavigationList } from "altrone-ui";
import {
  CaseSensitive,
  CircleSmall,
  Cog,
  FileSpreadsheet,
  FolderCog,
  Form,
  House,
  LayoutPanelLeft,
  Ligature,
  MonitorSmartphone,
  PlugZap,
  Rss,
  Signpost,
  SolarPanel,
  SquareRoundCorner,
  SunMoon,
  SwatchBook,
} from "lucide-react";
import Image from "next/image";
import s from "./sidebar.module.css";
import type {
  Navigation,
  NavItem,
  NavPageItem,
  NavFlatGroupItem,
  NavNestedGroupItem,
} from "@/lib/types";

const ICON_MAP: Record<string, React.ReactElement> = {
  House: <House />,
  PlugZap: <PlugZap />,
  Rss: <Rss />,
  SwatchBook: <SwatchBook />,
  SunMoon: <SunMoon />,
  Ligature: <Ligature />,
  MonitorSmartphone: <MonitorSmartphone />,
  SquareRoundCorner: <SquareRoundCorner />,
  SolarPanel: <SolarPanel />,
  CaseSensitive: <CaseSensitive />,
  LayoutPanelLeft: <LayoutPanelLeft />,
  Form: <Form />,
  FileSpreadsheet: <FileSpreadsheet />,
  Signpost: <Signpost />,
  CircleSmall: <CircleSmall />,
};

function getIcon(name?: string): React.ReactElement | undefined {
  return name ? ICON_MAP[name] : undefined;
}

export const Sidebar = ({ nav }: { nav: Navigation }) => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] ?? "en";

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(localStorage.getItem("admin") === "true");
  }, []);

  const isSelected = (href: string) => pathname === href;

  const renderPageLink = (
    slug: string,
    title: string,
    href: string,
    icon?: string
  ) => (
    <NavigationList.Link
      key={slug}
      asChild
      label={title}
      icon={getIcon(icon)}
      selected={isSelected(href)}
    >
      <Link href={href} />
    </NavigationList.Link>
  );

  const renderGroup = (item: NavFlatGroupItem) => (
    <NavigationList.Group key={item.slug} title={item.title}>
      {item.pages.map((page) =>
        renderPageLink(
          page.slug,
          page.title,
          `/${locale}/${item.slug}/${page.slug}`,
          page.icon
        )
      )}
    </NavigationList.Group>
  );

  const renderNestedGroup = (item: NavNestedGroupItem) => (
    <NavigationList.Group key={item.slug} title={item.title}>
      {item.groups.map((subGroup) => {
        const isSubGroupActive = subGroup.pages.some(
          (page) =>
            pathname ===
            `/${locale}/${item.slug}/${subGroup.slug}/${page.slug}`
        );
        return (
          <NavigationList.Link
            key={subGroup.slug}
            label={subGroup.title}
            icon={getIcon(subGroup.icon)}
            selected={isSubGroupActive}
          >
            {subGroup.pages.map((page) =>
              renderPageLink(
                page.slug,
                page.title,
                `/${locale}/${item.slug}/${subGroup.slug}/${page.slug}`,
                page.icon
              )
            )}
          </NavigationList.Link>
        );
      })}
    </NavigationList.Group>
  );

  const topLevelPages = nav.items.filter(
    (item): item is NavPageItem => item.type === "page"
  );
  const groups = nav.items.filter(
    (item): item is NavFlatGroupItem | NavNestedGroupItem =>
      item.type === "group" || item.type === "nested-group"
  );

  return (
    <NavigationList>
      <NavigationList.Header>
        <div className={s.logo}>
          <Image
            src="/altrone-light.png"
            alt="Altrone logo"
            width={120.6}
            height={24}
          />
        </div>
      </NavigationList.Header>

      {topLevelPages.length > 0 && (
        <NavigationList.Group>
          {topLevelPages.map((item) =>
            renderPageLink(
              item.slug,
              item.title,
              `/${locale}/${item.slug}`,
              item.icon
            )
          )}
        </NavigationList.Group>
      )}

      {groups.map((item) =>
        item.type === "group"
          ? renderGroup(item)
          : renderNestedGroup(item)
      )}

      {isAdmin && (
        <NavigationList.Group title="Администрирование">
          <NavigationList.Link icon={<Cog />} label="Основное" />
          <NavigationList.Link icon={<FolderCog />} label="Редактор" />
        </NavigationList.Group>
      )}
    </NavigationList>
  );
};
