"use client";

import { Flex, Text } from "altrone-ui";

const HUES = [
  "red",
  "orange",
  "amber",
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
  "brown",
];

export default function ColorAccentHuesDemo() {
  return (
    <Flex direction="vertical" gap="m">
      {HUES.map((hue) => (
        <Flex key={hue} direction="vertical" gap="xs">
          <Text size={3} weight="medium">
            --{hue}-*
          </Text>
          <Flex gap="xxs">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
              <div
                key={step}
                title={`--${hue}-${step}`}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 4,
                  background: `var(--${hue}-${step})`,
                }}
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
