"use client";

import { useState } from "react";
import { Flex, Loading, Slider } from "altrone-ui";

export default function LoadingProgressDemo() {
  const [progress, setProgress] = useState(40);

  return (
    <Flex gap="l" align="center">
      <Loading size={48} strokeWidth={4} value={progress} aria-label="Upload progress" />
      <Slider
        value={progress}
        onChange={(next) => setProgress(next)}
        showCurrentValue="always"
        style={{ width: 240 }}
      />
    </Flex>
  );
}
