"use client";

import { Toolbar } from "altrone-ui";
import { Bell, Hexagon, Search } from "lucide-react";

export default function ToolbarLogoDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Leading>
          <Toolbar.Logo>
            <Hexagon />
          </Toolbar.Logo>
          <Toolbar.Title title="Northwind" />
        </Toolbar.Leading>
        <Toolbar.Trailing>
          <Toolbar.Group>
            <Toolbar.Action label="Search" icon={<Search />} showLabel={false} />
            <Toolbar.Action label="Notifications" icon={<Bell />} showLabel={false} badge={5} />
          </Toolbar.Group>
        </Toolbar.Trailing>
      </Toolbar>
    </div>
  );
}
