"use client";

import { Divider, Flex, Text } from "altrone-ui";

export default function DividerGuidelineEdgesBadDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Divider />
      <Text block>Inbox</Text>
      <Divider />
      <Text block>Archive</Text>
      <Divider />
    </Flex>
  );
}
