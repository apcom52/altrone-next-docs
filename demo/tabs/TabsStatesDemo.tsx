"use client";

import { useState } from "react";
import { Tabs } from "altrone-ui";

export default function TabsStatesDemo() {
  const [tab, setTab] = useState("inbox");

  return (
    <Tabs>
      <Tabs.Item label="Inbox" badge={12} selected={tab === "inbox"} onClick={() => setTab("inbox")} />
      <Tabs.Item label="Mentions" badge="NEW" selected={tab === "mentions"} onClick={() => setTab("mentions")} />
      <Tabs.Item label="Archive" selected={tab === "archive"} onClick={() => setTab("archive")} />
      <Tabs.Item label="Billing" disabled />
    </Tabs>
  );
}
