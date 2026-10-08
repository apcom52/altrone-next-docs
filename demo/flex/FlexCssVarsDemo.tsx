"use client";

import type { CSSProperties } from "react";
import { Box, Flex } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function FlexCssVarsDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Flex gap="m">
        <Box size={20} material="solid" tone="accent" />
        <Box size={20} material="solid" tone="accent" />
        <Box size={20} material="solid" tone="accent" />
      </Flex>
      <Flex gap="m" style={vars({ "--gap": "24px" })}>
        <Box size={20} material="solid" tone="accent" />
        <Box size={20} material="solid" tone="accent" />
        <Box size={20} material="solid" tone="accent" />
      </Flex>
    </Flex>
  );
}
