"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineColorGoodDemo() {
  return (
    <Flex orientation="vertical" gap="xs">
      <Text color="danger">Card number is invalid</Text>
      <Text color="success">Changes saved</Text>
    </Flex>
  );
}
