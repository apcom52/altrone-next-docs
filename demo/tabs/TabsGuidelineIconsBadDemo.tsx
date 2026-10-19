"use client";

import { useState } from "react";
import { Tabs } from "altrone-ui";
import { Activity } from "lucide-react";

export default function TabsGuidelineIconsBadDemo() {
  const [tab, setTab] = useState("overview");

  return (
    <Tabs>
      <Tabs.Item label="Overview" selected={tab === "overview"} onClick={() => setTab("overview")} />
      <Tabs.Item label="Activity" icon={<Activity />} selected={tab === "activity"} onClick={() => setTab("activity")} />
      <Tabs.Item label="Settings" selected={tab === "settings"} onClick={() => setTab("settings")} />
    </Tabs>
  );
}
