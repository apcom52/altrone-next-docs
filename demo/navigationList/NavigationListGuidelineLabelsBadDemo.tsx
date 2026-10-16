"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";

export default function NavigationListGuidelineLabelsBadDemo() {
  const [page, setPage] = useState("members");

  return (
    <Flex style={{ height: 180 }}>
      <NavigationList aria-label="Bad">
        <NavigationList.Link label="Manage everyone who has access to this workspace" selected={page === "members"} onClick={() => setPage("members")} />
        <NavigationList.Link label="Click here to see your invoices and payments" selected={page === "billing"} onClick={() => setPage("billing")} />
      </NavigationList>
    </Flex>
  );
}
