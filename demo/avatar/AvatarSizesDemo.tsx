"use client";

import { Avatar, Flex } from "altrone-ui";

export default function AvatarSizesDemo() {
  return (
    <Flex gap="m" align="center">
      <Avatar firstName="Alex" lastName="Morgan" size="mini" />
      <Avatar firstName="Alex" lastName="Morgan" size="s" />
      <Avatar firstName="Alex" lastName="Morgan" size="m" />
      <Avatar firstName="Alex" lastName="Morgan" size="l" />
      <Avatar firstName="Alex" lastName="Morgan" size="xl" />
    </Flex>
  );
}
