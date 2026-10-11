"use client";

import { useState } from "react";
import { Flex, Radio } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function RadioSizesDemo() {
  const [value, setValue] = useState("a");

  return (
    <Flex orientation="vertical" gap="m">
      {SIZES.map((size) => (
        <Radio key={size} size={size} value={value} onChange={setValue}>
          <Radio.Item value="a">Size {size}</Radio.Item>
          <Radio.Item value="b">Second option</Radio.Item>
        </Radio>
      ))}
    </Flex>
  );
}
