"use client";

import { Divider, Flex, Text } from "altrone-ui";

export default function DividerGuidelineEdgesGoodDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Text block>Inbox</Text>
      <Divider />
      <Text block>Archive</Text>
    </Flex>
  );
}
