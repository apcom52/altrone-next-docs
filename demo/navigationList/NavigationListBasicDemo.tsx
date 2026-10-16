"use client";

import { useState } from "react";
import { Flex, NavigationList } from "altrone-ui";
import { Folder, Home, Settings } from "lucide-react";

export default function NavigationListBasicDemo() {
  const [page, setPage] = useState("home");

  return (
    <Flex style={{ height: 240 }}>
      <NavigationList aria-label="Main">
        <NavigationList.Link label="Dashboard" icon={<Home />} selected={page === "home"} onClick={() => setPage("home")} />
        <NavigationList.Link label="Projects" icon={<Folder />} selected={page === "projects"} onClick={() => setPage("projects")} />
        <NavigationList.Link label="Settings" icon={<Settings />} selected={page === "settings"} onClick={() => setPage("settings")} />
      </NavigationList>
    </Flex>
  );
}
