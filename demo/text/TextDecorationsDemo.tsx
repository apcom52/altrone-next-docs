"use client";

import { Flex, Text } from "altrone-ui";

export default function TextDecorationsDemo() {
  return (
    <Flex gap="l" wrap>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text deleted>Deleted</Text>
      <Text highlighted>Highlighted</Text>
      <Text code>npm install altrone-ui</Text>
      <Text kbd>Ctrl + S</Text>
    </Flex>
  );
}
