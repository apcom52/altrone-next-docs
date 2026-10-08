"use client";

import { Flex, Text } from "altrone-ui";

export default function TextWeightDemo() {
  return (
    <Flex gap="l" wrap>
      <Text size={6} weight="light">Light</Text>
      <Text size={6} weight="regular">Regular</Text>
      <Text size={6} weight="medium">Medium</Text>
      <Text size={6} weight="bold">Bold</Text>
    </Flex>
  );
}
