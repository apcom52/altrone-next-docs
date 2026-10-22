"use client";

import { Divider, Flex, Text } from "altrone-ui";

export default function DividerGuidelineGroupsBadDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Text block>Name</Text>
      <Divider />
      <Text block>Email</Text>
      <Divider />
      <Text block>Phone</Text>
      <Divider />
      <Text block>Password</Text>
      <Divider />
      <Text block>Two-factor authentication</Text>
    </Flex>
  );
}
