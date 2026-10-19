"use client";

import { Breadcrumbs } from "altrone-ui";

export default function BreadcrumbsGuidelineCurrentGoodDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item label="Home" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
      <Breadcrumbs.Item label="Orders" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
      <Breadcrumbs.Item label="Order #1234" current />
    </Breadcrumbs>
  );
}
