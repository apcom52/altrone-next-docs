"use client";

import { Avatar, Flex } from "altrone-ui";

const members = [
  { firstName: "Alice", lastName: "Morgan" },
  { firstName: "Ben", lastName: "Carter" },
  { firstName: "Chloe", lastName: "Diaz" },
];

export default function AvatarGuidelineGroupGoodDemo() {
  return (
    <Flex disableInnerMargins={false} style={{ paddingLeft: 12 }}>
      {members.map((member) => (
        <Avatar
          key={member.firstName}
          {...member}
          style={{ marginLeft: -12, boxShadow: "0 0 0 2px var(--background-1)" }}
        />
      ))}
      <Avatar firstName="+5" style={{ marginLeft: -12, boxShadow: "0 0 0 2px var(--background-1)" }} />
    </Flex>
  );
}
