"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineBlockGoodDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ maxWidth: 320 }}>
      <Text block>Your export is ready to download.</Text>
      <Text block color="muted">The link expires in 24 hours.</Text>
    </Flex>
  );
}
