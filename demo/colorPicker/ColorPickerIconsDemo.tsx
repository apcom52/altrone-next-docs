"use client";

import { useState } from "react";
import { ChevronsUpDown, SwatchBook, Pipette } from "lucide-react";
import { ColorPicker } from "altrone-ui";
import { BRAND_COLORS } from "./ColorPickerPresets";

export default function ColorPickerIconsDemo() {
  const [color, setColor] = useState<string | undefined>("#5b5bd6");

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      colorPresets={BRAND_COLORS}
      openIcon={<ChevronsUpDown />}
      closeIcon={<ChevronsUpDown />}
      presetsTabIcon={<SwatchBook />}
      paletteTabIcon={<Pipette />}
      style={{ width: 240 }}
    />
  );
}
