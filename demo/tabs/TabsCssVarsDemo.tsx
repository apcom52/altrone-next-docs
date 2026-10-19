"use client";

import { useState, type CSSProperties } from "react";
import { Tabs } from "altrone-ui";

export default function TabsCssVarsDemo() {
  const [tab, setTab] = useState("day");

  return (
    <Tabs
      style={
        {
          "--tabs-background-color": "var(--accent-3)",
          "--tabs-item-active-background-color": "var(--accent-9)",
          "--tabs-item-rounding": "6px",
        } as CSSProperties
      }
    >
      <Tabs.Item label="Day" selected={tab === "day"} onClick={() => setTab("day")} />
      <Tabs.Item label="Week" selected={tab === "week"} onClick={() => setTab("week")} />
      <Tabs.Item label="Month" selected={tab === "month"} onClick={() => setTab("month")} />
    </Tabs>
  );
}
