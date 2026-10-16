"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";

const ITEMS = ["Overview", "Members", "Profile", "Billing", "Security", "Integrations", "Webhooks", "Audit log"];

export default function NavigationListGuidelineGroupsBadDemo() {
  const [page, setPage] = useState("Overview");

  return (
    <Flex style={{ height: 300 }}>
      <NavigationList aria-label="Bad groups">
        {ITEMS.map((name) => (
          <NavigationList.Link key={name} label={name} selected={page === name} onClick={() => setPage(name)} />
        ))}
      </NavigationList>
    </Flex>
  );
}
