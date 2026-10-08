"use client";

import type { CSSProperties } from "react";
import { Box, Flex } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function BoxCssVarsDemo() {
  return (
    <Flex align="center" gap="m" wrap>
      <Box material="translucent" tone="accent" radius={8} padding={{ x: 16, y: 8 }}>
        Default
      </Box>
      <Box
        material="translucent"
        tone="accent"
        radius={8}
        padding={{ x: 16, y: 8 }}
        style={vars({
          "--box-tone-translucent": "var(--teal-a3)",
          "--box-tone-text": "var(--teal-11)",
        })}
      >
        Teal tint
      </Box>
      <Box
        material="dotted"
        tone="accent"
        radius={8}
        padding={{ x: 16, y: 8 }}
        style={vars({ "--box-dotted-gap": "6px", "--box-dotted-radius": "1px" })}
      >
        Denser dots
      </Box>
      <Box
        material="solid"
        radius={8}
        padding={{ x: 16, y: 8 }}
        style={vars({ "--box-fill": "var(--purple-9)", "--box-tone-text": "var(--white)" })}
      >
        Custom fill
      </Box>
    </Flex>
  );
}
