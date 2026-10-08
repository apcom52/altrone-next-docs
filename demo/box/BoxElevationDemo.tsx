"use client";

import { Box, Flex } from "altrone-ui";

const LEVELS = ["flat", "raised", "sticky", "overlay", "modal", "toast"] as const;

export default function BoxElevationDemo() {
  return (
    <Flex gap="l" wrap>
      {LEVELS.map((elevation) => (
        <Box
          key={elevation}
          elevation={elevation}
          material="pale"
          radius={8}
          padding={{ x: 16, y: 12 }}
        >
          {elevation}
        </Box>
      ))}
    </Flex>
  );
}
