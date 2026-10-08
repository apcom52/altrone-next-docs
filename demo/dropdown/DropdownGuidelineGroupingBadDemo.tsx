"use client";

import { Dropdown, Button } from "altrone-ui";
import { ChevronDown, Pencil, Trash, Copy, Share } from "lucide-react";

export default function DropdownGuidelineGroupingBadDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Edit" icon={<Pencil size={16} />} />
          <Dropdown.Action label="Delete" icon={<Trash size={16} />} danger />
          <Dropdown.Action label="Duplicate" icon={<Copy size={16} />} />
          <Dropdown.Action label="Share" icon={<Share size={16} />} />
        </Dropdown.Menu>
      }
    >
      <Button label="Actions" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
