"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineBlockBadDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ maxWidth: 320 }}>
      <Text>Your export is ready to download.</Text>
      <Text color="muted">The link expires in 24 hours.</Text>
    </Flex>
  );
}
