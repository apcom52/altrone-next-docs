"use client";

import type { CSSProperties } from "react";
import { SideNavigation } from "altrone-ui";

export default function SideNavigationCssVarsDemo() {
  return (
    <SideNavigation
      title="On this page"
      style={
        {
          "--side-navigation-link-text-color": "var(--text-1)",
          "--side-navigation-link-active-text-color": "var(--danger-text-1)",
          "--side-navigation-link-text-size": "16px",
        } as CSSProperties
      }
    >
      <SideNavigation.Link href="#side-nav-vars-intro" label="Introduction" />
      <SideNavigation.Link href="#side-nav-vars-usage" label="Usage" />
    </SideNavigation>
  );
}
