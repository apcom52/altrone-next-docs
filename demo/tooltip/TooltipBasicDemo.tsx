"use client";

import { Tooltip, Box, Flex } from "altrone-ui";
import { Trash, Copy, Share } from "lucide-react";

export default function TooltipBasicDemo() {
  return (
    <Flex gap="m" align="center">
      <Tooltip content="Copy to clipboard">
        <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Copy">
          <Copy size={14} />
        </Box>
      </Tooltip>
      <Tooltip content="Share this link">
        <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Share">
          <Share size={14} />
        </Box>
      </Tooltip>
      <Tooltip content="Delete permanently. This action cannot be undone.">
        <Box shape="circle" size="s" material="translucent" tone="danger" pressable focusable role="button" tabIndex={0} aria-label="Delete">
          <Trash size={14} />
        </Box>
      </Tooltip>
    </Flex>
  );
}
