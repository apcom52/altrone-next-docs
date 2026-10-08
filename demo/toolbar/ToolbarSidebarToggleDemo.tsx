"use client";

import { useState } from "react";
import { Flex, Text, Toolbar } from "altrone-ui";

export default function ToolbarSidebarToggleDemo() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex orientation="vertical" style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Leading>
          <Toolbar.SidebarToggleAction collapsed={collapsed} onClick={() => setCollapsed((value) => !value)} />
          <Toolbar.Title title="Dashboard" />
        </Toolbar.Leading>
      </Toolbar>
      <Text size={3}>{collapsed ? "The sidebar is collapsed" : "The sidebar is expanded"}</Text>
    </Flex>
  );
}
