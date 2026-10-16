"use client";

import { useState, type CSSProperties } from "react";
import { Flex, Slider } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function SliderCssVarsDemo() {
  const [value, setValue] = useState(60);

  return (
    <Flex orientation="vertical" gap="l" style={{ width: 280 }}>
      <Slider aria-label="Default" value={value} onChange={setValue} />
      <Slider
        aria-label="Thicker track"
        value={value}
        onChange={setValue}
        style={vars({ "--slider-track-thickness": "10px", "--slider-thumb-size": "22px" })}
      />
      <Slider
        aria-label="Teal fill"
        value={value}
        onChange={setValue}
        style={vars({
          "--slider-fill-color": "var(--teal-9)",
          "--slider-fill-hover-color": "var(--teal-10)",
        })}
      />
    </Flex>
  );
}
