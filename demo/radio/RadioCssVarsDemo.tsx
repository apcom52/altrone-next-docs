"use client";

import { useState, type CSSProperties } from "react";
import { Flex, Radio } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function RadioCssVarsDemo() {
  const [value, setValue] = useState("a");

  return (
    <Flex orientation="vertical" gap="m">
      <Radio value={value} onChange={setValue}>
        <Radio.Item value="a">Default</Radio.Item>
        <Radio.Item value="b" style={vars({ "--radio-size": "32px", "--radio-dot-size": "16px" })}>
          Larger dot
        </Radio.Item>
      </Radio>
      <Radio
        value={value}
        onChange={setValue}
        style={vars({
          "--radio-checked-background-color": "var(--teal-9)",
          "--radio-checked-icon-color": "var(--white)",
        })}
      >
        <Radio.Item value="a">Teal when selected</Radio.Item>
        <Radio.Item value="b">Second option</Radio.Item>
      </Radio>
    </Flex>
  );
}
