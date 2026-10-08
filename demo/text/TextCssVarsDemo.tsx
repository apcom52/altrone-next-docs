"use client";

import type { CSSProperties } from "react";
import { Flex, Text } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function TextCssVarsDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Text block>
        Run <Text code>npm install</Text> and press <Text highlighted>Enter</Text>.
      </Text>
      <Text
        block
        style={vars({
          "--text-code-background-color": "var(--teal-3)",
          "--text-code-border-color": "var(--teal-7)",
          "--text-code-text-color": "var(--teal-12)",
          "--text-highlighted-background-color": "var(--amber-4)",
          "--text-highlighted-text-color": "var(--amber-12)",
          "--text-rounding": "4px",
        })}
      >
        Run <Text code>npm install</Text> and press <Text highlighted>Enter</Text>.
      </Text>
      <Text list="marked" style={vars({ "--text-list-offset": "40px" })}>
        <Text item>A deeper list offset</Text>
        <Text item>Set on the list itself</Text>
      </Text>
    </Flex>
  );
}
