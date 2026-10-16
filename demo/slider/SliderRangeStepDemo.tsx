"use client";

import { useState } from "react";
import { Flex, Slider } from "altrone-ui";

export default function SliderRangeStepDemo() {
  const [opacity, setOpacity] = useState(0.5);
  const [rating, setRating] = useState(3);

  return (
    <Flex orientation="vertical" gap="l" style={{ width: 280 }}>
      <Slider
        aria-label="Opacity"
        value={opacity}
        onChange={setOpacity}
        min={0}
        max={1}
        step={0.05}
        showCurrentValue="always"
      />
      <Slider
        aria-label="Rating"
        value={rating}
        onChange={setRating}
        min={1}
        max={5}
        showCurrentValue="always"
      />
    </Flex>
  );
}
