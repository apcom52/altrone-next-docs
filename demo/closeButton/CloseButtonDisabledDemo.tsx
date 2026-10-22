"use client";

import { CloseButton, Flex, Text } from "altrone-ui";

export default function CloseButtonDisabledDemo() {
  return (
    <Flex align="center" gap="l">
      <Flex orientation="vertical" align="center" gap="s">
        <CloseButton />
        <Text size={2} color="muted">
          enabled
        </Text>
      </Flex>
      <Flex orientation="vertical" align="center" gap="s">
        <CloseButton disabled />
        <Text size={2} color="muted">
          disabled
        </Text>
      </Flex>
    </Flex>
  );
}
