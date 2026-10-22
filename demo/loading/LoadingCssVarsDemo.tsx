"use client";

import type { CSSProperties } from "react";
import { Loading } from "altrone-ui";

export default function LoadingCssVarsDemo() {
  return (
    <Loading
      size={40}
      strokeWidth={3}
      style={
        {
          "--loading-color": "var(--accent-11)",
          "--loading-track-opacity": "0.32",
        } as CSSProperties
      }
    />
  );
}
