"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";
import { CreditCard, Users } from "lucide-react";

export default function NavigationListGuidelineLabelsGoodDemo() {
  const [page, setPage] = useState("members");

  return (
    <Flex style={{ height: 180 }}>
      <NavigationList aria-label="Good">
        <NavigationList.Link label="Members" icon={<Users />} selected={page === "members"} onClick={() => setPage("members")} />
        <NavigationList.Link label="Billing" icon={<CreditCard />} selected={page === "billing"} onClick={() => setPage("billing")} />
      </NavigationList>
    </Flex>
  );
}
