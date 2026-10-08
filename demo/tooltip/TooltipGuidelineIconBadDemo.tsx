"use client";

import { Tooltip, Box } from "altrone-ui";
import { Shapes } from "lucide-react";

export default function TooltipGuidelineIconBadDemo() {
  return (
    <Tooltip content="Save document" kbd="⌘S">
      <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Save">
        <Shapes size={14} />
      </Box>
    </Tooltip>
  );
}
