"use client";

import { Tooltip, Box, Flex } from "altrone-ui";

export default function TooltipTriggerModesDemo() {
  return (
    <Flex gap="m" align="center" wrap>
      <Tooltip content="Opens only on hover" trigger="hover">
        <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
          Hover only
        </Box>
      </Tooltip>
      <Tooltip content="Opens only on keyboard focus" trigger="focus">
        <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
          Focus only
        </Box>
      </Tooltip>
      <Tooltip content="Opens on click, closes on outside click" trigger="click">
        <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
          Click only
        </Box>
      </Tooltip>
    </Flex>
  );
}
