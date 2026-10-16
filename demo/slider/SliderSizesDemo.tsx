"use client";

import { useState } from "react";
import { Flex, Slider } from "altrone-ui";

export default function SliderSizesDemo() {
  const [value, setValue] = useState(50);

  return (
    <Flex orientation="vertical" gap="l" style={{ width: 280 }}>
      {(["mini", "s", "m", "l", "xl"] as const).map((size) => (
        <Slider key={size} aria-label={size} size={size} value={value} onChange={setValue} />
      ))}
    </Flex>
  );
}
