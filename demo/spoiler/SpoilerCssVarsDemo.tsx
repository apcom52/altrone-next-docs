"use client";

import type { CSSProperties } from "react";
import { Flex, Spoiler, Text } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function SpoilerCssVarsDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%", maxWidth: 560 }}>
      <Spoiler
        title="Larger, tinted heading"
        style={vars({
          "--spoiler-text-color": "var(--teal-11)",
          "--spoiler-text-size": "16px",
          "--spoiler-icon-size": "24px",
        })}
      >
        <Text block size={4}>Heading color, size and icon size are overridden through the style prop.</Text>
      </Spoiler>
    </Flex>
  );
}
