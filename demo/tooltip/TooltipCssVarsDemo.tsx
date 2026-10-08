"use client";

import { Tooltip, Box } from "altrone-ui";

export default function TooltipCssVarsDemo() {
  return (
    <Tooltip
      content="A themed tooltip"
      style={{ "--tooltip-background-color": "var(--accent-9)", "--tooltip-text-color": "white" } as React.CSSProperties}
    >
      <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
        Hover me
      </Box>
    </Tooltip>
  );
}
