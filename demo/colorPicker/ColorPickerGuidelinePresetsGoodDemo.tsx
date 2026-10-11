"use client";

import { useState } from "react";
import { ColorPicker } from "altrone-ui";
import { BRAND_COLORS } from "./ColorPickerPresets";

export default function ColorPickerGuidelinePresetsGoodDemo() {
  const [color, setColor] = useState<string | undefined>("#5b5bd6");

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      colorPresets={BRAND_COLORS}
      allowPalette={false}
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
