"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxCustomSizeDemo() {
  return (
    <Flex align="center" gap="m" wrap>
      <Box size={44} material="solid" tone="accent" radius={8}>
        44
      </Box>
      <Box size="4em" material="solid" tone="success" radius={8}>
        4em
      </Box>
      <Box width={120} height={40} material="solid" tone="warning" radius={8}>
        120×40
      </Box>
      <Box width={160} material="outline" tone="danger" radius={8}>
        width only
      </Box>
    </Flex>
  );
}
