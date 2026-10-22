"use client";

import { CloseButton, Flex, Text } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function CloseButtonSizesDemo() {
  return (
    <Flex align="center" gap="l">
      {SIZES.map((size) => (
        <Flex key={size} orientation="vertical" align="center" gap="s">
          <CloseButton size={size} />
          <Text size={2} color="muted">
            {size}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
