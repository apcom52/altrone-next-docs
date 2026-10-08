"use client";

import type { CSSProperties } from "react";
import { Button, Flex } from "altrone-ui";
import { Send } from "lucide-react";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function ButtonCssVarsDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button label="Default" icon={<Send />} />
      <Button
        label="Roomy gap"
        icon={<Send />}
        style={vars({ "--button-gap": "16px" })}
      />
      <Button
        label="Big text and icon"
        icon={<Send />}
        style={vars({ "--button-font-size": "18px", "--button-icon-size": "22px" })}
      />
      <Button
        label="Text tone"
        variant="text"
        style={vars({
          "--box-tone-text": "var(--teal-11)",
          "--box-tone-translucent": "var(--teal-a3)",
          "--box-tone-translucent-strong": "var(--teal-a5)",
        })}
      />
      <Button
        label="Custom fill"
        style={vars({ "--box-fill": "var(--teal-9)", "--box-tone-text": "var(--white)" })}
      />
    </Flex>
  );
}
