"use client";

import { useState, type CSSProperties } from "react";
import { Checkbox, Flex } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function CheckboxCssVarsDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Flex align="center" gap="l" wrap="wrap">
      <Checkbox checked={checked} onChange={setChecked}>Default</Checkbox>
      <Checkbox
        checked={checked}
        onChange={setChecked}
        style={vars({ "--checkbox-size": "32px", "--checkbox-check-icon-size": "18px" })}
      >
        Bigger box
      </Checkbox>
      <Checkbox
        checked={checked}
        onChange={setChecked}
        style={vars({ "--checkbox-rounding": "12px" })}
      >
        Round box
      </Checkbox>
      <Checkbox
        checked={checked}
        onChange={setChecked}
        style={vars({
          "--checkbox-checked-background-color": "var(--teal-9)",
          "--checkbox-checked-border-color": "var(--teal-10)",
          "--checkbox-icon-color": "var(--white)",
        })}
      >
        Teal when checked
      </Checkbox>
    </Flex>
  );
}
