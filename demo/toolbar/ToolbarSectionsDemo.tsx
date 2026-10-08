"use client";

import { useState } from "react";
import { Dropdown, TextInput, Toolbar } from "altrone-ui";
import { Bell, Plus, Settings } from "lucide-react";

export default function ToolbarSectionsDemo() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Leading>
          <Dropdown
            content={
              <Dropdown.Menu>
                <Dropdown.Action label="Northwind" />
                <Dropdown.Action label="Personal" />
                <Dropdown.Action label="Add workspace…" />
              </Dropdown.Menu>
            }
          >
            <Toolbar.Title title="Northwind" clickable />
          </Dropdown>
        </Toolbar.Leading>
        <Toolbar.Center>
          <TextInput value={query} onChange={setQuery} placeholder="Search everything" />
        </Toolbar.Center>
        <Toolbar.Trailing>
          <Toolbar.Group>
            <Toolbar.Action label="New" icon={<Plus />} />
            <Toolbar.Action label="Notifications" icon={<Bell />} showLabel={false} badge={3} />
            <Toolbar.Action label="Settings" icon={<Settings />} showLabel={false} />
          </Toolbar.Group>
        </Toolbar.Trailing>
      </Toolbar>
    </div>
  );
}
