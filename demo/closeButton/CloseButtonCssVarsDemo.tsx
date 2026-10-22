"use client";

import type { CSSProperties } from "react";
import { CloseButton, Flex } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function CloseButtonCssVarsDemo() {
  return (
    <Flex align="center" gap="l">
      <CloseButton />
      <CloseButton
        style={vars({
          "--box-fill": "var(--danger-interactive-1)",
          "--box-tone-text": "var(--danger-text-1)",
        })}
      />
      <CloseButton style={vars({ "--box-radius": "var(--radius-m)" })} />
      <CloseButton
        style={vars({ "--box-size": "40px", "--button-icon-size": "14px" })}
      />
    </Flex>
  );
}
