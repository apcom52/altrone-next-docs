"use client";

import { useState } from "react";
import { Flex, Slider, Text } from "altrone-ui";

export default function SliderGuidelineValueBadDemo() {
  const [value, setValue] = useState(18);

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 280 }}>
      <Text>Font size</Text>
      <Slider
        aria-label="Font size"
        value={value}
        onChange={setValue}
        min={10}
        max={32}
        showCurrentValue={false}
      />
    </Flex>
  );
}
