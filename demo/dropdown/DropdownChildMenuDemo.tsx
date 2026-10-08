"use client";

import { Dropdown, Button } from "altrone-ui";
import { ChevronDown, Share, Link, Mail, MessageCircle, Download, FileText, Image } from "lucide-react";

export default function DropdownChildMenuDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.ChildMenu label="Share" icon={<Share size={16} />}>
            <Dropdown.Action label="Copy link" icon={<Link size={16} />} />
            <Dropdown.Action label="Send by email" icon={<Mail size={16} />} />
            <Dropdown.Action label="Send to messenger" icon={<MessageCircle size={16} />} />
          </Dropdown.ChildMenu>
          <Dropdown.ChildMenu label="Download as" icon={<Download size={16} />}>
            <Dropdown.Action label="PDF" icon={<FileText size={16} />} />
            <Dropdown.Action label="PNG" icon={<Image size={16} />} />
          </Dropdown.ChildMenu>
        </Dropdown.Menu>
      }
    >
      <Button label="Export" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
