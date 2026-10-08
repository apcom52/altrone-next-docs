"use client";

import { Avatar, Flex, Text } from "altrone-ui";

export default function FlexRowDemo() {
  return (
    <Flex gap="m" align="center">
      <Avatar firstName="Alice" lastName="Morgan" size="l" />
      <Text weight="medium">Alice Morgan</Text>
    </Flex>
  );
}
