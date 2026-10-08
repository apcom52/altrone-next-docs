"use client";

import { Tooltip, Box } from "altrone-ui";

export default function TooltipDisabledDemo() {
  return (
    <Tooltip content="Select at least one item first">
      <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} style={{ opacity: 0.5 }} role="button" aria-disabled="true" tabIndex={0}>
        Delete
      </Box>
    </Tooltip>
  );
}
