"use client";

import { SideNavigation } from "altrone-ui";

export default function SideNavigationGuidelineLabelsGoodDemo() {
  return (
    <SideNavigation title="On this page">
      <SideNavigation.Link href="#SideNavigationGuidelineLabelsGoodDemo-a" label="Installation" />
      <SideNavigation.Link href="#SideNavigationGuidelineLabelsGoodDemo-b" label="Usage" />
      <SideNavigation.Link href="#SideNavigationGuidelineLabelsGoodDemo-c" label="Props" />
    </SideNavigation>
  );
}
