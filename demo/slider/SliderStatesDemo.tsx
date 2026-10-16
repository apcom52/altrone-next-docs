"use client";

import { Flex, Slider } from "altrone-ui";

export default function SliderStatesDemo() {
  return (
    <Flex orientation="vertical" gap="l" style={{ width: 280 }}>
      <Slider aria-label="Disabled" value={40} onChange={() => {}} disabled />
      <Slider
        aria-label="Progress"
        value={75}
        onChange={() => {}}
        readOnly
        renderLabel={(value) => `${value}% complete`}
      />
    </Flex>
  );
}
