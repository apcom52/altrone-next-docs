"use client";

import type { CSSProperties } from "react";
import { Popover, Button, Text } from "altrone-ui";
import { Palette } from "lucide-react";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function PopoverCssVarsDemo() {
  return (
    <Popover
      content={<Text style={{ padding: 12, display: "block" }}>Square corners, tinted fill.</Text>}
      style={vars({ "--popover-radius": "4px", "--box-fill": "var(--teal-3)" })}
    >
      <Button label="Open popover" icon={<Palette size={16} />} />
    </Popover>
  );
}
