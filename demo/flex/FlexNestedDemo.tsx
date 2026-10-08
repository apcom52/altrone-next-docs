"use client";

import { Avatar, Button, Flex, Text } from "altrone-ui";

const USERS = [
  { firstName: "Alice", lastName: "Morgan", role: "Product Designer" },
  { firstName: "Daniel", lastName: "Reyes", role: "Frontend Engineer" },
  { firstName: "Priya", lastName: "Nair", role: "Engineering Manager" },
];

export default function FlexNestedDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ maxWidth: 420 }}>
      {USERS.map((user) => (
        <Flex key={user.lastName} justify="between" align="center">
          <Flex gap="m" align="center">
            <Avatar firstName={user.firstName} lastName={user.lastName} />
            <Flex orientation="vertical" gap="xxs">
              <Text weight="medium">
                {user.firstName} {user.lastName}
              </Text>
              <Text size={3} color="muted">
                {user.role}
              </Text>
            </Flex>
          </Flex>
          <Button label="Profile" size="s" variant="text" />
        </Flex>
      ))}
    </Flex>
  );
}
