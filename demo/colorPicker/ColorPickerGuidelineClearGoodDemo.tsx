"use client";

import { useState } from "react";
import { ColorPicker } from "altrone-ui";

export default function ColorPickerGuidelineClearGoodDemo() {
  const [color, setColor] = useState<string | undefined>("#e5484d");

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      clearable
      placeholder="No highlight"
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
