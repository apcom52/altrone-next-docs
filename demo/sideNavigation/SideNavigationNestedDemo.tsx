"use client";

import { Flex, SideNavigation, Text } from "altrone-ui";

export default function SideNavigationNestedDemo() {
  return (
    <Flex align="start">
      <SideNavigation title="On this page" style={{ position: "sticky", top: 0, minWidth: 180 }}>
        <SideNavigation.Link href="#side-nav-nested-api" label="API">
          <SideNavigation.Link href="#side-nav-nested-props" label="Props" />
          <SideNavigation.Link href="#side-nav-nested-events" label="Events" />
        </SideNavigation.Link>
        <SideNavigation.Link href="#side-nav-nested-examples" label="Examples" />
      </SideNavigation>
      <Flex orientation="vertical">
        <Flex id="side-nav-nested-api" orientation="vertical" style={{ minHeight: 100 }}>
          <Text block size={6} weight="bold">API</Text>
        </Flex>
        <Flex id="side-nav-nested-props" orientation="vertical" style={{ minHeight: 100 }}>
          <Text block size={5} weight="bold">Props</Text>
        </Flex>
        <Flex id="side-nav-nested-events" orientation="vertical" style={{ minHeight: 100 }}>
          <Text block size={5} weight="bold">Events</Text>
        </Flex>
        <Flex id="side-nav-nested-examples" orientation="vertical" style={{ minHeight: 100 }}>
          <Text block size={6} weight="bold">Examples</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
