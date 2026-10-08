"use client";

import { Dropdown, Button } from "altrone-ui";
import { ChevronDown, Share, Link, Send, Mail, MessageCircle } from "lucide-react";

export default function DropdownGuidelineNestingBadDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.ChildMenu label="Share" icon={<Share size={16} />}>
            <Dropdown.Action label="Copy link" icon={<Link size={16} />} />
            <Dropdown.ChildMenu label="Send to" icon={<Send size={16} />}>
              <Dropdown.Action label="Email" icon={<Mail size={16} />} />
              <Dropdown.Action label="Messenger" icon={<MessageCircle size={16} />} />
            </Dropdown.ChildMenu>
          </Dropdown.ChildMenu>
        </Dropdown.Menu>
      }
    >
      <Button label="Actions" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
