"use client";

import { Breadcrumbs } from "altrone-ui";
import { Home, Slash } from "lucide-react";

export default function BreadcrumbsIconsDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item icon={<Home />} label="Home" separatorIcon={<Slash />} />
      <Breadcrumbs.Item label="Products" separatorIcon={<Slash />} />
      <Breadcrumbs.Item label="Details" current />
    </Breadcrumbs>
  );
}
