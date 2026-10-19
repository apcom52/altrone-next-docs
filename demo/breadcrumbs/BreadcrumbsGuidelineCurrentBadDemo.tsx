"use client";

import { Breadcrumbs } from "altrone-ui";

export default function BreadcrumbsGuidelineCurrentBadDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item label="Home" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
      <Breadcrumbs.Item label="Orders" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
      <Breadcrumbs.Item label="Order #1234" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
