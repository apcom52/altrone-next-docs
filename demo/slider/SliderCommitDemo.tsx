"use client";

import { useState } from "react";
import { Flex, Slider, Text } from "altrone-ui";

export default function SliderCommitDemo() {
  const [value, setValue] = useState(50);
  const [saved, setSaved] = useState(50);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: 280 }}>
      <Slider
        aria-label="Quality"
        value={value}
        onChange={setValue}
        onChangeEnd={setSaved}
        showCurrentValue="always"
      />
      <Text>Saved value: {saved}</Text>
    </Flex>
  );
}
