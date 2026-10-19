"use client";

import { SideNavigation } from "altrone-ui";

export default function SideNavigationGuidelineDepthBadDemo() {
  return (
    <SideNavigation title="On this page">
      <SideNavigation.Link href="#side-nav-depth-bad-api" label="API">
        <SideNavigation.Link href="#side-nav-depth-bad-props" label="Props">
          <SideNavigation.Link href="#side-nav-depth-bad-size" label="Size">
            <SideNavigation.Link href="#side-nav-depth-bad-sizes" label="Available sizes">
              <SideNavigation.Link href="#side-nav-depth-bad-mini" label="Mini" />
            </SideNavigation.Link>
          </SideNavigation.Link>
        </SideNavigation.Link>
      </SideNavigation.Link>
    </SideNavigation>
  );
}
