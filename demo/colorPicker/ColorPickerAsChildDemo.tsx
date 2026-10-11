"use client";

import { useState } from "react";
import { ColorPicker } from "altrone-ui";

export default function ColorPickerAsChildDemo() {
  const [color, setColor] = useState<string | undefined>("#5b5bd6");

  return (
    <ColorPicker value={color} onChange={setColor} asChild>
      <button
        type="button"
        aria-label="Pick a color"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: color,
          boxShadow: "inset 0 0 0 1px var(--border-a2)",
        }}
      />
    </ColorPicker>
  );
}
