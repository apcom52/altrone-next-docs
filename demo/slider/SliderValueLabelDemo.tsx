"use client";

import { useState } from "react";
import { Flex, Slider } from "altrone-ui";

export default function SliderValueLabelDemo() {
  const [price, setPrice] = useState(250);
  const [quality, setQuality] = useState(80);

  return (
    <Flex orientation="vertical" gap="l" style={{ width: 280 }}>
      <Slider
        aria-label="Price"
        value={price}
        onChange={setPrice}
        min={0}
        max={1000}
        step={10}
        showCurrentValue="always"
        renderLabel={(value) => `$${value}`}
      />
      <Slider
        aria-label="Quality"
        value={quality}
        onChange={setQuality}
        showCurrentValue={false}
      />
    </Flex>
  );
}
