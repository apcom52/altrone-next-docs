"use client";

import { Avatar, Flex } from "altrone-ui";
import { Bot, Users } from "lucide-react";

export default function AvatarIconDemo() {
  return (
    <Flex gap="m" align="center">
      <Avatar icon={<Bot />} aria-label="Support bot" size="l" />
      <Avatar
        icon={<Users />}
        backgroundColor="#6366f1"
        aria-label="Design team"
        size="l"
      />
    </Flex>
  );
}
