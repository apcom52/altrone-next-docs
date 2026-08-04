"use client";

import { Text, Flex } from "altrone-ui";

export default function TextDecorationsDemo() {
  return (
    <Flex direction="vertical" gap="s">
      <Text size={4} italic>italic — выделение через наклон</Text>
      <Text size={4} underline>underline — дополнительный акцент</Text>
      <Text size={4} deleted>deleted — удалённый или устаревший контент</Text>
      <Text size={4} highlighted>highlighted — визуальный маркер</Text>
      <Text size={4} code>npm install altrone-ui</Text>
      <Text size={4} kbd>Ctrl + S</Text>
    </Flex>
  );
}
