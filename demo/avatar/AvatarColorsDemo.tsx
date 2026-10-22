"use client";

import { Avatar, Flex } from "altrone-ui";

export default function AvatarColorsDemo() {
  return (
    <Flex gap="m" align="center">
      <Avatar firstName="Alice" lastName="Blue" size="l" />
      <Avatar firstName="Ben" lastName="Carter" size="l" />
      <Avatar firstName="Alice" lastName="Blue" backgroundColor="#6366f1" size="l" />
      <Avatar firstName="Alice" lastName="Gold" backgroundColor="#1e3a5f" textColor="#fbbf24" size="l" />
    </Flex>
  );
}
