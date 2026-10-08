"use client";

import { Flex, Text } from "altrone-ui";

export default function TextSizeDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Text size={2} color="muted">Size 2 — captions, metadata</Text>
      <Text size={3}>Size 3 — supporting text</Text>
      <Text size={4}>Size 4 — interface body text</Text>
      <Text size={5} weight="medium">Size 5 — emphasized body</Text>
      <Text size={6} weight="bold">Size 6 — section title</Text>
      <Text size={7} weight="bold">Size 7 — page title</Text>
      <Text size={8} weight="bold">Size 8 — display accent</Text>
    </Flex>
  );
}
