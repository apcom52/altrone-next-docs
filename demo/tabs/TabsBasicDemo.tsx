"use client";

import { useState } from "react";
import { Tabs, Text } from "altrone-ui";

export default function TabsBasicDemo() {
  const [tab, setTab] = useState("overview");

  return (
    <>
      <Tabs>
        <Tabs.Item label="Overview" selected={tab === "overview"} onClick={() => setTab("overview")} />
        <Tabs.Item label="Analytics" selected={tab === "analytics"} onClick={() => setTab("analytics")} />
        <Tabs.Item label="Settings" selected={tab === "settings"} onClick={() => setTab("settings")} />
      </Tabs>
      <Text block style={{ textAlign: "center", marginTop: 16 }}>
        Current tab: {tab}
      </Text>
    </>
  );
}
