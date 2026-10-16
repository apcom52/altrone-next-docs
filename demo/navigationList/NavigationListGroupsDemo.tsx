"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";
import { CreditCard, LayoutGrid, User, Users } from "lucide-react";

export default function NavigationListGroupsDemo() {
  const [page, setPage] = useState("overview");
  const link = (id: string, label: string, icon: React.JSX.Element) => (
    <NavigationList.Link label={label} icon={icon} selected={page === id} onClick={() => setPage(id)} />
  );

  return (
    <Flex style={{ height: 320 }}>
      <NavigationList aria-label="Workspace">
        <NavigationList.Group title="Workspace">
          {link("overview", "Overview", <LayoutGrid />)}
          {link("members", "Members", <Users />)}
        </NavigationList.Group>
        <NavigationList.Group title="Account">
          {link("profile", "Profile", <User />)}
          {link("billing", "Billing", <CreditCard />)}
        </NavigationList.Group>
      </NavigationList>
    </Flex>
  );
}
