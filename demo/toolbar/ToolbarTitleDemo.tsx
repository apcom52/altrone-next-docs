"use client";

import { Dropdown, Flex, Text, Toolbar } from "altrone-ui";

export default function ToolbarTitleDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Leading>
          <Toolbar.Title title="Static title" />
        </Toolbar.Leading>
      </Toolbar>
      <Toolbar>
        <Toolbar.Leading>
          <Dropdown
            content={
              <Dropdown.Menu>
                <Dropdown.Action label="Northwind" />
                <Dropdown.Action label="Personal" />
              </Dropdown.Menu>
            }
          >
            <Toolbar.Title title="Clickable title" clickable />
          </Dropdown>
        </Toolbar.Leading>
      </Toolbar>
      <Text size={3}>The second title opens a menu, the first one is just text.</Text>
    </Flex>
  );
}
