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

const STEPS = Array.from({ length: 12 }, (_, i) => i + 1);

export default function ColorAccentHuesDemo() {
  return (
    <Flex orientation="vertical" gap="xxs" style={{ overflowX: "auto", paddingBlock: 4 }}>
      <Flex gap="xxs" align="center" style={{ minWidth: "max-content", paddingInline: 4 }}>
        <div style={{ width: 64 }} />
        {STEPS.map((step) => (
          <Text key={step} size={2} style={{ width: 28, textAlign: "center" }}>
            {step}
          </Text>
        ))}
      </Flex>
      {HUES.map((hue) => (
        <Flex key={hue} gap="xxs" align="center" style={{ minWidth: "max-content", paddingInline: 4 }}>
          <Text size={2} weight="medium" style={{ width: 64 }}>
            {hue}
          </Text>
          {STEPS.map((step) => (
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
      ))}
    </Flex>
  );
}
