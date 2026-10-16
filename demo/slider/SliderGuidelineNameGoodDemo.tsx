"use client";

import { useState } from "react";
import { Flex, Slider, Text } from "altrone-ui";

export default function SliderGuidelineNameGoodDemo() {
  const [value, setValue] = useState(50);

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 280 }}>
      <Text>Screen brightness</Text>
      <Slider aria-label="Screen brightness" value={value} onChange={setValue} />
    </Flex>
  );
}
