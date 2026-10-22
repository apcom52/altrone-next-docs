"use client";

import { Avatar, Flex } from "altrone-ui";

const members = [
  { firstName: "Alice", lastName: "Morgan", backgroundColor: "#6366f1" },
  { firstName: "Ben", lastName: "Carter", backgroundColor: "#059669" },
  { firstName: "Chloe", lastName: "Diaz", backgroundColor: "#d97706" },
];

export default function AvatarGroupDemo() {
  return (
    <Flex disableInnerMargins={false} style={{ paddingLeft: 12 }}>
      {members.map((member) => (
        <Avatar
          key={member.firstName}
          firstName={member.firstName}
          lastName={member.lastName}
          backgroundColor={member.backgroundColor}
          style={{ marginLeft: -12, boxShadow: "0 0 0 2px var(--background-1)" }}
          title={`${member.firstName} ${member.lastName}`}
        />
      ))}
      <Avatar
        firstName="+4"
        style={{ marginLeft: -12, boxShadow: "0 0 0 2px var(--background-1)" }}
      />
    </Flex>
  );
}
