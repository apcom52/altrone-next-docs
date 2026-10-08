"use client";

import { Box, Flex } from "altrone-ui";

const TONES = ["neutral", "accent", "danger", "success", "warning", "info"] as const;

export default function BoxTonesDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Flex gap="m" wrap>
        {TONES.map((tone) => (
          <Box key={tone} material="solid" tone={tone} radius={8} padding={{ x: 16, y: 8 }}>
            {tone}
          </Box>
        ))}
      </Flex>
      <Flex gap="m" wrap>
        {TONES.map((tone) => (
          <Box key={tone} material="translucent" tone={tone} radius={8} padding={{ x: 16, y: 8 }}>
            {tone}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
