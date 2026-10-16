"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";
import { BarChart2, Bell, Inbox } from "lucide-react";

export default function NavigationListStatesDemo() {
  const [page, setPage] = useState("inbox");

  return (
    <Flex style={{ height: 220 }}>
      <NavigationList aria-label="States">
        <NavigationList.Link label="Inbox" icon={<Inbox />} badge={12} selected={page === "inbox"} onClick={() => setPage("inbox")} />
        <NavigationList.Link label="Alerts" icon={<Bell />} badge="new" selected={page === "alerts"} onClick={() => setPage("alerts")} />
        <NavigationList.Link label="Reports" icon={<BarChart2 />} disabled />
      </NavigationList>
    </Flex>
  );
}
