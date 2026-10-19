"use client";

import { SideNavigation } from "altrone-ui";

export default function SideNavigationGuidelineDepthGoodDemo() {
  return (
    <SideNavigation title="On this page">
      <SideNavigation.Link href="#side-nav-depth-good-api" label="API">
        <SideNavigation.Link href="#side-nav-depth-good-props" label="Props" />
        <SideNavigation.Link href="#side-nav-depth-good-events" label="Events" />
      </SideNavigation.Link>
      <SideNavigation.Link href="#side-nav-depth-good-examples" label="Examples" />
    </SideNavigation>
  );
}
