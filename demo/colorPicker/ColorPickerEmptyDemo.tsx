"use client";

import { useState } from "react";
import { ColorPicker } from "altrone-ui";

export default function ColorPickerEmptyDemo() {
  const [color, setColor] = useState<string>();

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      placeholder="Pick an accent color"
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
