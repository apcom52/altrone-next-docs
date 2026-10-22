"use client";

import { Button, Divider, Dropdown } from "altrone-ui";
import { ChevronDown } from "lucide-react";

export default function DividerMenuDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Rename" />
          <Dropdown.Action label="Duplicate" />
          <Divider />
          <Dropdown.Action label="Archive" />
          <Dropdown.Action label="Delete" danger />
        </Dropdown.Menu>
      }
    >
      <Button label="File" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
