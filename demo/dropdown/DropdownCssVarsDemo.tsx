"use client";

import { Dropdown, Button } from "altrone-ui";
import { ChevronDown, Star } from "lucide-react";

export default function DropdownCssVarsDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Regular item" icon={<Star size={16} />} />
          <Dropdown.Action
            label="Highlighted item"
            icon={<Star size={16} />}
            style={
              {
                "--dropdown-background-color": "var(--accent-3)",
                "--dropdown-text-color": "var(--accent-11)",
              } as React.CSSProperties
            }
          />
        </Dropdown.Menu>
      }
    >
      <Button label="Open menu" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
