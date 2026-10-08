"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineColorBadDemo() {
  return (
    <Flex orientation="vertical" gap="xs">
      <Text color="danger">New: dark theme is here</Text>
      <Text color="success">Contact sales</Text>
    </Flex>
  );
}
