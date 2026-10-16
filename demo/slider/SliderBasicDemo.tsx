"use client";

import { useState } from "react";
import { Flex, Slider } from "altrone-ui";

export default function SliderBasicDemo() {
  const [volume, setVolume] = useState(40);

  return (
    <Flex style={{ width: 280 }}>
      <Slider aria-label="Volume" value={volume} onChange={setVolume} />
    </Flex>
  );
}
