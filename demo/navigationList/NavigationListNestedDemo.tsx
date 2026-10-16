"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";
import { Inbox, Users } from "lucide-react";

export default function NavigationListNestedDemo() {
  const [page, setPage] = useState("frontend");
  const inTeams = page === "frontend" || page === "backend";

  return (
    <Flex style={{ height: 300 }}>
      <NavigationList aria-label="Teams">
        <NavigationList.Link label="Inbox" icon={<Inbox />} selected={page === "inbox"} onClick={() => setPage("inbox")} />
        <NavigationList.Link label="Teams" icon={<Users />} selected={inTeams} onClick={() => setPage("frontend")}>
          <NavigationList.Link label="Frontend" selected={page === "frontend"} onClick={() => setPage("frontend")} />
          <NavigationList.Link label="Backend" selected={page === "backend"} onClick={() => setPage("backend")} />
        </NavigationList.Link>
      </NavigationList>
    </Flex>
  );
}
