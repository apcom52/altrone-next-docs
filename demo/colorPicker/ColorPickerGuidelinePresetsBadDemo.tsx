"use client";

import { useState } from "react";
import { ColorPicker } from "altrone-ui";

export default function ColorPickerGuidelinePresetsBadDemo() {
  const [color, setColor] = useState<string | undefined>("#5b5bd6");

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
