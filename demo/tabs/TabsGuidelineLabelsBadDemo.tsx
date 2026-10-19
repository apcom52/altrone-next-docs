"use client";

import { useState } from "react";
import { Tabs } from "altrone-ui";

export default function TabsGuidelineLabelsBadDemo() {
  const [tab, setTab] = useState("a");

  return (
    <Tabs>
      <Tabs.Item label="Everything about the project" selected={tab === "a"} onClick={() => setTab("a")} />
      <Tabs.Item label="Recent activity of all members" selected={tab === "b"} onClick={() => setTab("b")} />
    </Tabs>
  );
}
