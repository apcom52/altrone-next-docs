"use client";

import type { CSSProperties } from "react";
import { Breadcrumbs } from "altrone-ui";

export default function BreadcrumbsCssVarsDemo() {
  return (
    <Breadcrumbs
      style={
        {
          "--breadcrumbs-text-size": "16px",
          "--breadcrumbs-item-text-color": "var(--text-1)",
          "--breadcrumbs-current-item-text-color": "var(--danger-text-1)",
          "--breadcrumbs-separator-color": "var(--text-2)",
        } as CSSProperties
      }
    >
      <Breadcrumbs.Item label="Home" />
      <Breadcrumbs.Item label="Products" />
      <Breadcrumbs.Item label="Details" current />
    </Breadcrumbs>
  );
}
