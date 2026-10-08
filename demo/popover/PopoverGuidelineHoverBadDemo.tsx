"use client";

import { Popover, Text } from "altrone-ui";
import { Info } from "lucide-react";

export default function PopoverGuidelineHoverBadDemo() {
  return (
    <Popover
      trigger="hover"
      content={<Text style={{ padding: 12, display: "block", maxWidth: 220 }}>Available seats left for this event.</Text>}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "default" }}>
        <Info size={16} /> Capacity: 12 / 20
      </span>
    </Popover>
  );
}
