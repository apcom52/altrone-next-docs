"use client";

import { useState } from "react";
import { Flex, Slider } from "altrone-ui";

export default function SliderGuidelineNameBadDemo() {
  const [value, setValue] = useState(50);

  return (
    <Flex style={{ width: "100%", maxWidth: 280 }}>
      <Slider value={value} onChange={setValue} />
    </Flex>
  );
}
