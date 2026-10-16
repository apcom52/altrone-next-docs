"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";

export default function NavigationListGuidelineGroupsGoodDemo() {
  const [page, setPage] = useState("overview");
  const link = (id: string, label: string) => (
    <NavigationList.Link label={label} selected={page === id} onClick={() => setPage(id)} />
  );

  return (
    <Flex style={{ height: 300 }}>
      <NavigationList aria-label="Good groups">
        <NavigationList.Group title="Workspace">
          {link("overview", "Overview")}
          {link("members", "Members")}
        </NavigationList.Group>
        <NavigationList.Group title="Account">
          {link("profile", "Profile")}
          {link("billing", "Billing")}
        </NavigationList.Group>
      </NavigationList>
    </Flex>
  );
}
