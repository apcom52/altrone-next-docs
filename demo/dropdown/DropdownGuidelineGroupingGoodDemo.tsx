"use client";

import { Dropdown, Button, Divider } from "altrone-ui";
import { ChevronDown, Pencil, Copy, Share, Trash } from "lucide-react";

export default function DropdownGuidelineGroupingGoodDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Edit" icon={<Pencil size={16} />} />
          <Dropdown.Action label="Duplicate" icon={<Copy size={16} />} />
          <Dropdown.Action label="Share" icon={<Share size={16} />} />
          <Divider />
          <Dropdown.Action label="Delete" icon={<Trash size={16} />} danger />
        </Dropdown.Menu>
      }
    >
      <Button label="Actions" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
