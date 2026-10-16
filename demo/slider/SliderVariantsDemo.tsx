"use client";

import { useState } from "react";
import { Sun, Volume2 } from "lucide-react";
import { Flex, Slider } from "altrone-ui";

export default function SliderVariantsDemo() {
  const [volume, setVolume] = useState(60);
  const [brightness, setBrightness] = useState(70);

  return (
    <Flex orientation="vertical" gap="l" style={{ width: 280 }}>
      <Slider aria-label="Volume" value={volume} onChange={setVolume} icon={<Volume2 />} />
      <Slider
        aria-label="Brightness"
        variant="fill"
        value={brightness}
        onChange={setBrightness}
        icon={<Sun />}
        showCurrentValue="always"
      />
    </Flex>
  );
}
