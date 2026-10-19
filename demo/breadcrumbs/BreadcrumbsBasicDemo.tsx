"use client";

import { Breadcrumbs } from "altrone-ui";

export default function BreadcrumbsBasicDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item label="Home" />
      <Breadcrumbs.Item label="Products" />
      <Breadcrumbs.Item label="Details" current />
    </Breadcrumbs>
  );
}
