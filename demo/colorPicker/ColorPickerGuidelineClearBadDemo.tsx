"use client";

import { useState } from "react";
import { ColorPicker } from "altrone-ui";

export default function ColorPickerGuidelineClearBadDemo() {
  const [color, setColor] = useState<string | undefined>("#e5484d");

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      placeholder="No highlight"
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
