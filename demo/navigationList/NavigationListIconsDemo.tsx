"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";
import { ChevronUp, Users } from "lucide-react";

export default function NavigationListIconsDemo() {
  const [page, setPage] = useState("frontend");

  return (
    <Flex style={{ height: 220 }}>
      <NavigationList aria-label="Teams">
        <NavigationList.Link label="Teams" icon={<Users />} selected childrenIcon={<ChevronUp />}>
          <NavigationList.Link label="Frontend" selected={page === "frontend"} onClick={() => setPage("frontend")} />
          <NavigationList.Link label="Backend" selected={page === "backend"} onClick={() => setPage("backend")} />
        </NavigationList.Link>
      </NavigationList>
    </Flex>
  );
}
