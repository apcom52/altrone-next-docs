"use client";

import { useState, type CSSProperties } from "react";
import { Flex, NavigationList } from "altrone-ui";
import { Folder, Home } from "lucide-react";

export default function NavigationListCssVarsDemo() {
  const [page, setPage] = useState("home");

  return (
    <Flex style={{ height: 200 }}>
      <NavigationList
        aria-label="Compact"
        style={
          {
            "--navigation-list-width": "220px",
            "--navigation-list-rounding": "12px",
            "--navigation-list-link-rounding": "8px",
            "--navigation-list-link-selected-text-color": "var(--danger-text-1)",
          } as CSSProperties
        }
      >
        <NavigationList.Link label="Home" icon={<Home />} selected={page === "home"} onClick={() => setPage("home")} />
        <NavigationList.Link label="Projects" icon={<Folder />} selected={page === "projects"} onClick={() => setPage("projects")} />
      </NavigationList>
    </Flex>
  );
}
