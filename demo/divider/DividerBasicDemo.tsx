"use client";

import { Divider, Flex, Text } from "altrone-ui";

export default function DividerBasicDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Text block>Profile</Text>
      <Divider />
      <Text block>Security</Text>
      <Divider />
      <Text block>Notifications</Text>
    </Flex>
  );
}
