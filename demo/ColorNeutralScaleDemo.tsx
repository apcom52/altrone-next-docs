"use client";

import { Flex, Text } from "altrone-ui";

const STEPS = Array.from({ length: 12 }, (_, i) => i + 1);

const Swatch = ({ token }: { token: string }) => (
  <div
    title={token}
    style={{ width: 28, height: 28, borderRadius: 4, background: `var(${token})` }}
  />
);

export default function ColorNeutralScaleDemo() {
  return (
    <Flex orientation="vertical" gap="xxs" style={{ overflowX: "auto", paddingBlock: 4 }}>
      <Flex gap="xxs" align="center" style={{ minWidth: "max-content", paddingInline: 4 }}>
        <div style={{ width: 72 }} />
        {STEPS.map((step) => (
          <Text key={step} size={2} style={{ width: 28, textAlign: "center" }}>
            {step}
          </Text>
        ))}
      </Flex>
      <Flex gap="xxs" align="center" style={{ minWidth: "max-content", paddingInline: 4 }}>
        <Text size={2} weight="medium" style={{ width: 72 }}>
          gray
        </Text>
        {STEPS.map((step) => (
          <Swatch key={step} token={`--gray-${step}`} />
        ))}
      </Flex>
      <Flex gap="xxs" align="center" style={{ minWidth: "max-content", paddingInline: 4 }}>
        <Text size={2} weight="medium" style={{ width: 72 }}>
          black-a
        </Text>
        <Flex
          gap="xxs"
          style={{ background: "var(--accent-4)", padding: 4, margin: -4, borderRadius: 6 }}
        >
          {STEPS.map((step) => (
            <Swatch key={step} token={`--black-a${step}`} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
