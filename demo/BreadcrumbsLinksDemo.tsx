"use client";

import { Breadcrumbs } from "altrone-ui";
import { Home } from "lucide-react";

export default function BreadcrumbsLinksDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item icon={<Home />} label="Home" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
      <Breadcrumbs.Item label="Catalog" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
      <Breadcrumbs.Item label="Item #42" current />
    </Breadcrumbs>
  );
}
