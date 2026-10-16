"use client";

import type { CSSProperties } from "react";
import { Tags } from "altrone-ui";

export default function TagsCssVarsDemo() {
  return (
    <Tags
      style={
        {
          "--tags-item-text-color": "var(--text-1)",
          "--tags-hovered-item-color": "var(--danger-text-1)",
        } as CSSProperties
      }
    >
      <Tags.Item label="Stronger text" onClick={() => {}} />
      <Tags.Item label="Red on hover" onClick={() => {}} />
    </Tags>
  );
}
