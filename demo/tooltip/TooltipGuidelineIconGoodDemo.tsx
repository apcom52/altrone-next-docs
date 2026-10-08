"use client";

import { Tooltip, Box } from "altrone-ui";
import { Save } from "lucide-react";

export default function TooltipGuidelineIconGoodDemo() {
  return (
    <Tooltip content="Save document" kbd="⌘S">
      <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Save">
        <Save size={14} />
      </Box>
    </Tooltip>
  );
}
