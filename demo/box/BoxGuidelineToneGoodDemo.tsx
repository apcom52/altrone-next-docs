"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxGuidelineToneGoodDemo() {
  return (
    <Flex gap="m" wrap>
      <Box material="translucent" tone="danger" radius={8} padding={{ x: 12, y: 6 }}>
        Payment failed
      </Box>
      <Box material="translucent" tone="success" radius={8} padding={{ x: 12, y: 6 }}>
        Saved
      </Box>
    </Flex>
  );
}
