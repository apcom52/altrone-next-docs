"use client";

import type { CSSProperties } from "react";
import { Avatar } from "altrone-ui";

export default function AvatarCssVarsDemo() {
  return (
    <Avatar
      firstName="Alex"
      lastName="Morgan"
      style={
        {
          "--avatar-size": "64px",
          "--avatar-text-size": "26px",
          "--avatar-text-weight": "400",
        } as CSSProperties
      }
    />
  );
}
