"use client";

import { Breadcrumbs } from "altrone-ui";
import { Footprints, Home, Library } from "lucide-react";

export default function BreadcrumbsGuidelineIconsBadDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item icon={<Home />} label="Home" />
      <Breadcrumbs.Item icon={<Library />} label="Catalog" />
      <Breadcrumbs.Item icon={<Footprints />} label="Shoes" current />
    </Breadcrumbs>
  );
}
