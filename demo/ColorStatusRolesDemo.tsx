"use client";

import { Flex, Text } from "altrone-ui";

const STATUSES = ["danger", "success", "warning", "info"];

const ROLE_TOKENS = [
  "solid-1",
  "background-1",
  "interactive-2",
  "border-2",
  "text-2",
];

const CELL = 88;

export default function ColorStatusRolesDemo() {
  return (
    <Flex orientation="vertical" gap="xxs" style={{ overflowX: "auto", paddingBlock: 4 }}>
      <Flex gap="xxs" align="center" style={{ minWidth: "max-content", paddingInline: 4 }}>
        <div style={{ width: 72 }} />
        {ROLE_TOKENS.map((token) => (
          <Text key={token} size={2} style={{ width: CELL, textAlign: "center" }}>
            {token}
          </Text>
        ))}
      </Flex>
      {STATUSES.map((name) => (
        <Flex key={name} gap="xxs" align="center" style={{ minWidth: "max-content", paddingInline: 4 }}>
          <Text size={2} weight="medium" style={{ width: 72 }}>
            {name}
          </Text>
          {ROLE_TOKENS.map((token) => (
            <div
              key={token}
              title={`--${name}-${token}`}
              style={{
                width: CELL,
                height: 28,
                borderRadius: 4,
                background: `var(--${name}-${token})`,
                border: "1px solid var(--gray-a5)",
              }}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
