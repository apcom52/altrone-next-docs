"use client";

import { Divider, Flex, Text } from "altrone-ui";

export default function DividerGuidelineGroupsGoodDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Text block>Name</Text>
      <Text block>Email</Text>
      <Text block>Phone</Text>
      <Divider />
      <Text block>Password</Text>
      <Text block>Two-factor authentication</Text>
    </Flex>
  );
}
