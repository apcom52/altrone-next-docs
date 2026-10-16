"use client";

import { useState } from "react";
import { Flex, Slider } from "altrone-ui";

export default function SliderOrientationDemo() {
  const [level, setLevel] = useState(30);
  const [gain, setGain] = useState(70);

  return (
    <Flex gap="xl" style={{ height: 180 }}>
      <Slider aria-label="Level" orientation="vertical" value={level} onChange={setLevel} />
      <Slider
        aria-label="Gain"
        orientation="vertical"
        variant="fill"
        value={gain}
        onChange={setGain}
        showCurrentValue="always"
      />
    </Flex>
  );
}
