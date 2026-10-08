"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxGuidelineIdentityBadDemo() {
  return (
    <Flex gap="m" wrap>
      <Box material="translucent" tone="danger" radius={8} padding={{ x: 12, y: 6 }}>
        Design
      </Box>
      <Box material="translucent" tone="success" radius={8} padding={{ x: 12, y: 6 }}>
        Backend
      </Box>
    </Flex>
  );
}
