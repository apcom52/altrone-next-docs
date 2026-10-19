"use client";

import { useState } from "react";
import { Flex, Tabs } from "altrone-ui";
import { Grid2x2, List, Rows3 } from "lucide-react";

export default function TabsIconsDemo() {
  const [withLabels, setWithLabels] = useState("grid");
  const [iconsOnly, setIconsOnly] = useState("grid");

  return (
    <Flex orientation="vertical" align="center">
      <Tabs>
        <Tabs.Item label="Grid" icon={<Grid2x2 />} selected={withLabels === "grid"} onClick={() => setWithLabels("grid")} />
        <Tabs.Item label="List" icon={<List />} selected={withLabels === "list"} onClick={() => setWithLabels("list")} />
        <Tabs.Item label="Compact" icon={<Rows3 />} selected={withLabels === "compact"} onClick={() => setWithLabels("compact")} />
      </Tabs>
      <Tabs>
        <Tabs.Item label="Grid" icon={<Grid2x2 />} showLabel={false} selected={iconsOnly === "grid"} onClick={() => setIconsOnly("grid")} />
        <Tabs.Item label="List" icon={<List />} showLabel={false} selected={iconsOnly === "list"} onClick={() => setIconsOnly("list")} />
        <Tabs.Item label="Compact" icon={<Rows3 />} showLabel={false} selected={iconsOnly === "compact"} onClick={() => setIconsOnly("compact")} />
      </Tabs>
    </Flex>
  );
}
