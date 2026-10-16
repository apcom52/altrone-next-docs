"use client";

import type { CSSProperties } from "react";
import { Message } from "altrone-ui";
import { Info } from "lucide-react";

export default function MessageCssVarsDemo() {
  return (
    <Message
      icon={<Info />}
      title="Roomier message"
      style={
        {
          "--message-icon-size": "32px",
          "--message-rounding": "12px",
          "--message-text-color": "var(--text-1)",
        } as CSSProperties
      }
    >
      A larger icon, tighter corners and stronger body text.
    </Message>
  );
}
