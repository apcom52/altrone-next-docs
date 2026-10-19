"use client";

import { Flex, SideNavigation, Text } from "altrone-ui";

const SECTIONS = [
  { id: "side-nav-basic-intro", title: "Introduction" },
  { id: "side-nav-basic-install", title: "Installation" },
  { id: "side-nav-basic-usage", title: "Usage" },
];

export default function SideNavigationBasicDemo() {
  return (
    <Flex align="start">
      <SideNavigation title="On this page" style={{ position: "sticky", top: 0, minWidth: 180 }}>
        {SECTIONS.map((section) => (
          <SideNavigation.Link key={section.id} href={`#${section.id}`} label={section.title} />
        ))}
      </SideNavigation>
      <Flex orientation="vertical">
        {SECTIONS.map((section) => (
          <Flex key={section.id} id={section.id} orientation="vertical" style={{ minHeight: 160 }}>
            <Text block size={6} weight="bold">
              {section.title}
            </Text>
            <Text block>Scroll the page — the link of the section in view is highlighted.</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
