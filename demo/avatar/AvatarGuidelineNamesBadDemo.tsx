"use client";

import { Avatar, Flex } from "altrone-ui";

export default function AvatarGuidelineNamesBadDemo() {
  return (
    <Flex gap="m" align="center">
      <Avatar firstName="Maria" />
      <Avatar firstName="Mark" />
      <Avatar firstName="Mia" />
    </Flex>
  );
}
