"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxRadiusScopeDemo() {
  return (
    <Flex align="center" gap="l" wrap>
      <Box material="translucent" tone="accent" size={96}>
        default
      </Box>
      <Box material="translucent" tone="accent" size={96} radius={24}>
        radius 24
      </Box>
      <Box material="translucent" tone="accent" size={96} shape="squircle" radius={32}>
        squircle
      </Box>
      <Box material="translucent" tone="accent" size={96} shape="rect" radius={24}>
        rect
      </Box>
    </Flex>
  );
}
