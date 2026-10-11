"use client";

import { useState } from "react";
import { ColorPicker, Flex } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function ColorPickerSizesDemo() {
  const [color, setColor] = useState<string | undefined>("#5b5bd6");

  return (
    <Flex orientation="vertical" gap="s">
      {SIZES.map((size) => (
        <ColorPicker
          key={size}
          size={size}
          value={color}
          onChange={setColor}
          style={{ width: 240 }}
        />
      ))}
    </Flex>
  );
}
