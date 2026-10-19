"use client";

import { useState } from "react";
import { Tabs } from "altrone-ui";

export default function TabsGuidelineLabelsGoodDemo() {
  const [tab, setTab] = useState("a");

  return (
    <Tabs>
      <Tabs.Item label="Overview" selected={tab === "a"} onClick={() => setTab("a")} />
      <Tabs.Item label="Activity" selected={tab === "b"} onClick={() => setTab("b")} />
    </Tabs>
  );
}
