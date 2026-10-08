"use client";

import { useState, type CSSProperties } from "react";
import { Flex, Switch } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function SwitchCssVarsDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Flex align="center" gap="l" wrap="wrap">
      <Switch checked={checked} onChange={setChecked}>Default</Switch>
      <Switch
        checked={checked}
        onChange={setChecked}
        style={vars({ "--switch-track-height": "36px" })}
      >
        Taller track
      </Switch>
      <Switch
        checked={checked}
        onChange={setChecked}
        style={vars({
          "--switch-checked-background-color": "var(--teal-9)",
          "--switch-checked-border-color": "var(--teal-10)",
          "--switch-checked-icon-color": "var(--white)",
        })}
      >
        Teal when on
      </Switch>
    </Flex>
  );
}
