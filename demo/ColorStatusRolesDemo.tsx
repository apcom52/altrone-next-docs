"use client";

import { Flex, Text } from "altrone-ui";

const STATUSES = ["danger", "success", "warning", "info"];

const ROLE_TOKENS = [
  "background-1",
  "interactive-2",
  "border-2",
  "solid-1",
  "text-2",
];

export default function ColorStatusRolesDemo() {
  return (
    <Flex gap="l" wrap>
      {STATUSES.map((name) => (
        <Flex key={name} direction="vertical" gap="s" style={{ width: 160 }}>
          <div
            style={{
              height: 64,
              borderRadius: 12,
              background: `var(--${name}-solid-1)`,
            }}
          />
          <Text weight="bold">{name}</Text>
          <Flex gap="xxs">
            {ROLE_TOKENS.map((token) => (
              <div
                key={token}
                title={`--${name}-${token}`}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: `var(--${name}-${token})`,
                  border: "1px solid var(--gray-a5)",
                }}
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
