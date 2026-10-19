"use client";

import { useState } from "react";
import { Flex, Tabs } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function TabsSizesDemo() {
  const [tab, setTab] = useState("day");

  return (
    <Flex orientation="vertical" align="center">
      {SIZES.map((size) => (
        <Tabs key={size} size={size}>
          <Tabs.Item label="Day" selected={tab === "day"} onClick={() => setTab("day")} />
          <Tabs.Item label="Week" selected={tab === "week"} onClick={() => setTab("week")} />
          <Tabs.Item label="Month" selected={tab === "month"} onClick={() => setTab("month")} />
        </Tabs>
      ))}
    </Flex>
  );
}
