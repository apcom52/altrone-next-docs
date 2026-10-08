"use client";

import { Tooltip, Box } from "altrone-ui";

export default function TooltipOpenStateDemo() {
  return (
    <Tooltip
      content="Visible right away, before any hover"
      defaultOpen
      onOpenChange={(open, event, reason) => console.log(open, reason)}
    >
      <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
        Open by default
      </Box>
    </Tooltip>
  );
}
