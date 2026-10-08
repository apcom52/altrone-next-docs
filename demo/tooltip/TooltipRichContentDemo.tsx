"use client";

import { Tooltip, Flex } from "altrone-ui";

export default function TooltipRichContentDemo() {
  return (
    <Tooltip
      content={
        <Flex orientation="vertical" gap="xs">
          <strong>Plan limits</strong>
          <span>5 projects · 3 members · 10 GB</span>
        </Flex>
      }
      maxWidth={240}
    >
      <span>Current plan</span>
    </Tooltip>
  );
}
