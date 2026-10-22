"use client";

import type { CSSProperties } from "react";
import { Divider, Flex, Text } from "altrone-ui";

export default function DividerCssVarsDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Text block>Order details</Text>
      <Divider
        style={{ "--divider-color": "var(--accent-9)" } as CSSProperties}
      />
      <Text block>Shipping address</Text>
    </Flex>
  );
}
