"use client";

import { Tabs } from "altrone-ui";

export default function TabsLinksDemo() {
  return (
    <Tabs>
      <Tabs.Item label="Overview" href="#overview" selected />
      <Tabs.Item label="Activity" href="#activity" />
      <Tabs.Item label="Members" asChild>
        <a href="#members" />
      </Tabs.Item>
    </Tabs>
  );
}
