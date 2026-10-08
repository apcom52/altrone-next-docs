"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxPaddingDemo() {
  return (
    <Flex align="center" gap="m" wrap>
      <Box material="outline" radius={8} padding={4}>
        padding 4
      </Box>
      <Box material="outline" radius={8} padding={{ x: 24, y: 6 }}>
        x 24, y 6
      </Box>
      <Box material="outline" radius={8} padding="var(--space-content)">
        space-content
      </Box>
    </Flex>
  );
}
