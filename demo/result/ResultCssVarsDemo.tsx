"use client";

import type { CSSProperties } from "react";
import { Result } from "altrone-ui";

export default function ResultCssVarsDemo() {
  return (
    <Result
      status="success"
      title="Invoice sent"
      style={
        {
          "--result-media-size": "72px",
          "--result-icon-size": "34px",
          "--result-gap": "8px",
        } as CSSProperties
      }
    >
      A larger chip and a tighter gap.
    </Result>
  );
}
