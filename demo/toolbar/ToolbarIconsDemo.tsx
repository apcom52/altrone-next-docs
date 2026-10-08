"use client";

import { Dropdown, Flex, Toolbar } from "altrone-ui";
import { ArrowRight, ChevronsDown, Download, Printer, Share, Star } from "lucide-react";

export default function ToolbarIconsDemo() {
  return (
    <Flex style={{ width: "100%", maxWidth: 320 }}>
      <Toolbar
        style={{ width: "100%" }}
        icons={{ titleMenu: <ChevronsDown />, overflowRight: <ArrowRight /> }}
      >
        <Toolbar.Leading>
          <Dropdown
            content={
              <Dropdown.Menu>
                <Dropdown.Action label="Northwind" />
              </Dropdown.Menu>
            }
          >
            <Toolbar.Title title="Reports" clickable />
          </Dropdown>
          <Toolbar.Group>
            <Toolbar.Action label="Star" icon={<Star />} showLabel={false} />
            <Toolbar.Action label="Share" icon={<Share />} showLabel={false} />
            <Toolbar.Action label="Download" icon={<Download />} showLabel={false} />
            <Toolbar.Action label="Print" icon={<Printer />} showLabel={false} />
          </Toolbar.Group>
        </Toolbar.Leading>
      </Toolbar>
    </Flex>
  );
}
