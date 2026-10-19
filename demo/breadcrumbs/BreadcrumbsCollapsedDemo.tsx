"use client";

import { Breadcrumbs, Dropdown } from "altrone-ui";
import { Home, Ellipsis } from "lucide-react";

export default function BreadcrumbsCollapsedDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item icon={<Home />} label="Home" asChild>
        <a href="#" />
      </Breadcrumbs.Item>
      <Dropdown
        content={
          <Dropdown.Menu>
            <Dropdown.Action label="Category" />
            <Dropdown.Action label="Subcategory" />
          </Dropdown.Menu>
        }
      >
        <Breadcrumbs.Item icon={<Ellipsis />} />
      </Dropdown>
      <Breadcrumbs.Item label="Product" current />
    </Breadcrumbs>
  );
}
