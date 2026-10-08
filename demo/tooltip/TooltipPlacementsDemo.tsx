"use client";

import { Tooltip, Box, Flex } from "altrone-ui";

export default function TooltipPlacementsDemo() {
  return (
    <Flex orientation="vertical" gap="m" align="center">
      <Tooltip content="Top" placement="top">
        <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
          top
        </Box>
      </Tooltip>
      <Flex gap="m">
        <Tooltip content="Left" placement="left">
          <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
            left
          </Box>
        </Tooltip>
        <Tooltip content="Right" placement="right">
          <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
            right
          </Box>
        </Tooltip>
      </Flex>
      <Tooltip content="Bottom" placement="bottom">
        <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
          bottom
        </Box>
      </Tooltip>
    </Flex>
  );
}
