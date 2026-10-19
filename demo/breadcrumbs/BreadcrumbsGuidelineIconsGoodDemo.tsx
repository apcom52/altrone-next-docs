"use client";

import { Breadcrumbs } from "altrone-ui";
import { Home } from "lucide-react";

export default function BreadcrumbsGuidelineIconsGoodDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item icon={<Home />} label="Home" />
      <Breadcrumbs.Item label="Catalog" />
      <Breadcrumbs.Item label="Shoes" current />
    </Breadcrumbs>
  );
}
