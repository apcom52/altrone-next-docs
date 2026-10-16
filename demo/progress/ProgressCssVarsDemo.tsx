"use client";

import type { CSSProperties } from "react";
import { Progress } from "altrone-ui";

export default function ProgressCssVarsDemo() {
  return (
    <Progress
      value={70}
      style={
        {
          "--progress-active-background-color": "var(--teal-9)",
          "--progress-text-color": "var(--teal-12)",
          "--progress-height": "40px",
        } as CSSProperties
      }
    />
  );
}
