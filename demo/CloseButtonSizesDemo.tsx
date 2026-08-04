"use client";

import { CloseButton, Flex } from "altrone-ui";

export default function CloseButtonSizesDemo() {
  return (
    <Flex gap="m" align="center">
      <CloseButton size="mini" />
      <CloseButton size="s" />
      <CloseButton size="m" />
      <CloseButton size="l" />
      <CloseButton size="xl" />
    </Flex>
  );
}
