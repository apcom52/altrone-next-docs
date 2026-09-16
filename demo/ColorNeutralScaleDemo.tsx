"use client";

import { Flex, Text } from "altrone-ui";

export default function ColorNeutralScaleDemo() {
  return (
    <Flex direction="vertical" gap="m">
      <Flex direction="vertical" gap="xs">
        <Text size={3} weight="medium">
          --gray-*
        </Text>
        <Flex gap="xxs">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
            <div
              key={step}
              title={`--gray-${step}`}
              style={{
                width: 28,
                height: 28,
                borderRadius: 4,
                background: `var(--gray-${step})`,
              }}
            />
          ))}
        </Flex>
      </Flex>

      <Flex direction="vertical" gap="xs">
        <Text size={3} weight="medium">
          --black-a* (over --accent-4, to show the alpha)
        </Text>
        <Flex gap="xxs" style={{ background: "var(--accent-4)", padding: 4, borderRadius: 6 }}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
            <div
              key={step}
              title={`--black-a${step}`}
              style={{
                width: 28,
                height: 28,
                borderRadius: 4,
                background: `var(--black-a${step})`,
              }}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
