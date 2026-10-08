"use client";

import { Box, Flex } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function BoxSizesDemo() {
  return (
    <Flex align="center" gap="m" wrap>
      {SIZES.map((size) => (
        <Box key={size} size={size} material="translucent" tone="accent" radius={6}>
          {size}
        </Box>
      ))}
    </Flex>
  );
}
