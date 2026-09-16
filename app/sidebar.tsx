"use client";

import type { ComponentType, SVGProps } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Flex, NavigationList } from "altrone-ui";
import * as Logos from "altrone-ui/logos";
import { LogoMark } from "./LogoMark";
import badgeStyles from "./FoundationsIcon.module.css";
import {
  Atom,
  Boxes,
  CaseSensitive,
  CircleSmall,
  Compass,
  FileSpreadsheet,
  Form,
  House,
  Layers,
  LayoutGrid,
  LayoutPanelLeft,
  Ligature,
  MonitorSmartphone,
  PlugZap,
  Rss,
  Signpost,
  SlidersHorizontal,
  SolarPanel,
  SquareRoundCorner,
  SunMoon,
  SwatchBook,
} from "lucide-react";
import type { Navigation, NavPageItem, NavFlatGroupItem } from "@/lib/types";

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
  Layers: <Layers />,
  Boxes: <Boxes />,
  SlidersHorizontal: <SlidersHorizontal />,
  LayoutGrid: <LayoutGrid />,
  Compass: <Compass />,
  Atom: <Atom />,
};

const COMPONENTS_GROUP_LABEL: Record<string, string> = {
  en: "Components",
  ru: "Компоненты",
};

function getIcon(name?: string): React.ReactElement | undefined {
  return name ? ICON_MAP[name] : undefined;
}

/** `slug` is camelCase and matches a logo export 1:1 once capitalized — except these overrides. */
const FOUNDATIONS_ICON_OVERRIDES: Record<string, keyof typeof Logos> = {
  layout: "Layouts",
  loading: "DataLoading",
};

const COMPONENT_ICON_OVERRIDES: Record<string, keyof typeof Logos> = {};

function resolveLogoIcon(
  slug: string,
  overrides: Record<string, keyof typeof Logos>
): React.ReactElement | undefined {
  const name =
    overrides[slug] ?? ((slug.charAt(0).toUpperCase() + slug.slice(1)) as keyof typeof Logos);
  const Icon = Logos[name] as ComponentType<SVGProps<SVGSVGElement>> | undefined;
  return Icon ? (
    <span className={badgeStyles.badge}>
      <Icon width={28} height={28} />
    </span>
  ) : undefined;
}

const getFoundationsIcon = (slug: string) => resolveLogoIcon(slug, FOUNDATIONS_ICON_OVERRIDES);
const getComponentIcon = (slug: string) => resolveLogoIcon(slug, COMPONENT_ICON_OVERRIDES);

export const Sidebar = ({ nav }: { nav: Navigation }) => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] ?? "en";

  const isSelected = (href: string) => pathname === href;

  const renderPageLink = (
    slug: string,
    title: string,
    href: string,
    icon?: React.ReactElement
  ) => (
    <NavigationList.Link
      key={slug}
      asChild
      label={title}
      icon={icon}
      selected={isSelected(href)}
    >
      <Link href={href} />
    </NavigationList.Link>
  );

  const topLevelPages = nav.items.filter(
    (item): item is NavPageItem => item.type === "page"
  );
  const groups = nav.items.filter(
    (item): item is NavFlatGroupItem => item.type === "group"
  );
  const foundations = groups.find((item) => item.slug === "foundations");
  const componentCategories = groups.filter((item) => item.slug !== "foundations");

  return (
    <NavigationList>
      <NavigationList.Header>
        <Flex justify="center">
          <LogoMark locale={locale} />
        </Flex>
      </NavigationList.Header>

      {topLevelPages.length > 0 && (
        <NavigationList.Group>
          {topLevelPages.map((item) =>
            renderPageLink(
              item.slug,
              item.title,
              `/${locale}/${item.slug}`,
              getIcon(item.icon)
            )
          )}
        </NavigationList.Group>
      )}

      {foundations && (
        <NavigationList.Group title={foundations.title}>
          {foundations.pages.map((page) => {
            const prefix = foundations.urlBase ?? foundations.slug;
            return renderPageLink(
              page.slug,
              page.title,
              `/${locale}/${prefix}/${page.slug}`,
              getFoundationsIcon(page.slug)
            );
          })}
        </NavigationList.Group>
      )}

      {componentCategories.length > 0 && (
        <NavigationList.Group title={COMPONENTS_GROUP_LABEL[locale] ?? COMPONENTS_GROUP_LABEL.en}>
          {componentCategories.map((category) => {
            const prefix = category.urlBase ?? category.slug;
            const href = `/${locale}/${prefix}`;
            return (
              <NavigationList.Link
                key={category.slug}
                asChild
                label={category.title}
                icon={getIcon(category.icon)}
                selected={isSelected(href) || pathname.startsWith(`${href}/`)}
              >
                {[
                  <Link key="index" href={href} />,
                  ...category.pages.map((page) =>
                    renderPageLink(
                      page.slug,
                      page.title,
                      `/${locale}/${prefix}/${page.slug}`,
                      getComponentIcon(page.slug)
                    )
                  ),
                ]}
              </NavigationList.Link>
            );
          })}
        </NavigationList.Group>
      )}
    </NavigationList>
  );
};
