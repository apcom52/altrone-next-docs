"use client";

import { Avatar, Flex } from "altrone-ui";

const members = ["Alice", "Ben", "Chloe", "David", "Elena", "Frank", "Grace", "Henry"];

export default function AvatarGuidelineGroupBadDemo() {
  return (
    <Flex disableInnerMargins={false} style={{ paddingLeft: 12 }}>
      {members.map((name) => (
        <Avatar
          key={name}
          firstName={name}
          lastName="Smith"
          style={{ marginLeft: -12, boxShadow: "0 0 0 2px var(--background-1)" }}
        />
      ))}
    </Flex>
  );
}
