"use client";

import { Tooltip, Box, Flex } from "altrone-ui";
import { Save, Undo, Redo } from "lucide-react";

export default function TooltipTitleKbdDemo() {
  return (
    <Flex gap="m" align="center">
      <Tooltip title="Save document" content="Saves all unsaved changes." kbd="⌘S">
        <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Save">
          <Save size={14} />
        </Box>
      </Tooltip>
      <Tooltip content="Undo the last action" kbd="⌘Z">
        <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Undo">
          <Undo size={14} />
        </Box>
      </Tooltip>
      <Tooltip content="Redo the undone action" kbd="⌘⇧Z">
        <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Redo">
          <Redo size={14} />
        </Box>
      </Tooltip>
    </Flex>
  );
}
