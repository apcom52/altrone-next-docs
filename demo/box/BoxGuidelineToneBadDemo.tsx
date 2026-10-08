"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxGuidelineToneBadDemo() {
  return (
    <Flex gap="m" wrap>
      <Box material="translucent" color="#ff0000" radius={8} padding={{ x: 12, y: 6 }}>
        Payment failed
      </Box>
      <Box material="translucent" color="#00cc00" radius={8} padding={{ x: 12, y: 6 }}>
        Saved
      </Box>
    </Flex>
  );
}
