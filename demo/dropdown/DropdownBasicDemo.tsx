"use client";

import { Dropdown, Button, Divider } from "altrone-ui";
import { ChevronDown, Pencil, Copy, Trash } from "lucide-react";

export default function DropdownBasicDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Edit" icon={<Pencil size={16} />} />
          <Dropdown.Action label="Duplicate" icon={<Copy size={16} />} />
          <Divider />
          <Dropdown.Action label="Delete" icon={<Trash size={16} />} danger />
        </Dropdown.Menu>
      }
    >
      <Button label="Actions" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
