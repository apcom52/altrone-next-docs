"use client";

import { Box, Flex, Text } from "altrone-ui";

export default function TooltipGuidelineRequiredGoodDemo() {
  return (
    <Flex orientation="vertical" gap="xs" align="start">
      <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} style={{ opacity: 0.5 }} aria-disabled="true" tabIndex={0}>
        Submit
      </Box>
      <Text size={3} color="muted">
        Fill in all required fields first
      </Text>
    </Flex>
  );
}
