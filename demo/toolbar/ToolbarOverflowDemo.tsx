"use client";

import { Flex, Toolbar } from "altrone-ui";
import { Filter, MessageCircle, Printer, Share, Star } from "lucide-react";

export default function ToolbarOverflowDemo() {
  return (
    <Flex style={{ width: "100%", maxWidth: 260 }}>
      <Toolbar style={{ width: "100%" }}>
        <Toolbar.Trailing>
          <Toolbar.Action label="Star" icon={<Star />} showLabel={false} priority="high" />
          <Toolbar.Group priority="medium">
            <Toolbar.Action label="Share" icon={<Share />} showLabel={false} />
            <Toolbar.Action label="Comments" icon={<MessageCircle />} showLabel={false} />
          </Toolbar.Group>
          <Toolbar.Action label="Filter" icon={<Filter />} showLabel={false} priority="low" />
          <Toolbar.Action label="Print" icon={<Printer />} showLabel={false} priority="low" />
        </Toolbar.Trailing>
      </Toolbar>
    </Flex>
  );
}
