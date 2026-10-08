"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxGuidelineIdentityGoodDemo() {
  return (
    <Flex gap="m" wrap>
      <Box material="translucent" color="teal" radius={8} padding={{ x: 12, y: 6 }}>
        Design
      </Box>
      <Box material="translucent" color="indigo" radius={8} padding={{ x: 12, y: 6 }}>
        Backend
      </Box>
    </Flex>
  );
}
