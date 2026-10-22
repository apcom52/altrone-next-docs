"use client";

import { Avatar, Flex } from "altrone-ui";

export default function AvatarGuidelineNamesGoodDemo() {
  return (
    <Flex gap="m" align="center">
      <Avatar firstName="Maria" lastName="Mendez" />
      <Avatar firstName="Mark" lastName="Miller" />
      <Avatar firstName="Mia" lastName="Moore" />
    </Flex>
  );
}
