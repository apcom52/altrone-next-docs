"use client";

import type { CSSProperties } from "react";
import { Flex, Label } from "altrone-ui";
import { Check } from "lucide-react";

export default function LabelCssVarsDemo() {
  return (
    <Flex gap="m" wrap align="center">
      <Label
        color="teal"
        style={
          {
            "--label-padding-x": "12px",
            "--label-radius": "2px",
          } as CSSProperties
        }
      >
        Release 2.0
      </Label>
      <Label
        color="success"
        variant="status"
        icon={<Check />}
        style={
          {
            "--label-dot-size": "18px",
            "--box-border-width": "0px",
          } as CSSProperties
        }
      >
        Completed
      </Label>
    </Flex>
  );
}
