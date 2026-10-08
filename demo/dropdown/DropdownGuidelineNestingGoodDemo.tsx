"use client";

import { Dropdown, Button, Divider } from "altrone-ui";
import { ChevronDown, Share, Link, Mail, Trash } from "lucide-react";

export default function DropdownGuidelineNestingGoodDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.ChildMenu label="Share" icon={<Share size={16} />}>
            <Dropdown.Action label="Copy link" icon={<Link size={16} />} />
            <Dropdown.Action label="Send by email" icon={<Mail size={16} />} />
          </Dropdown.ChildMenu>
          <Divider />
          <Dropdown.Action label="Delete" icon={<Trash size={16} />} danger />
        </Dropdown.Menu>
      }
    >
      <Button label="Actions" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
