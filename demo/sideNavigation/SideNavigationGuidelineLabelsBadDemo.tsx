"use client";

import { SideNavigation } from "altrone-ui";

export default function SideNavigationGuidelineLabelsBadDemo() {
  return (
    <SideNavigation title="On this page">
      <SideNavigation.Link href="#SideNavigationGuidelineLabelsBadDemo-a" label="How to install the package in your project" />
      <SideNavigation.Link href="#SideNavigationGuidelineLabelsBadDemo-b" label="Everything about using the component" />
      <SideNavigation.Link href="#SideNavigationGuidelineLabelsBadDemo-c" label="A complete list of the available props" />
    </SideNavigation>
  );
}
