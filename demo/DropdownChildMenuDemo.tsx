"use client";

import { Dropdown, Button, Divider } from "altrone-ui";
import { ChevronDown, Share, Link, Mail, MessageCircle, Download, FileText, Image } from "lucide-react";

export default function DropdownChildMenuDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.ChildMenu label="Поделиться" icon={<Share size={16} />}>
            <Dropdown.Action label="Скопировать ссылку" icon={<Link size={16} />} />
            <Dropdown.Action label="Отправить по email" icon={<Mail size={16} />} />
            <Dropdown.Action label="В мессенджер" icon={<MessageCircle size={16} />} />
          </Dropdown.ChildMenu>
          <Dropdown.ChildMenu label="Скачать как" icon={<Download size={16} />}>
            <Dropdown.Action label="PDF" icon={<FileText size={16} />} />
            <Dropdown.Action label="PNG" icon={<Image size={16} />} />
          </Dropdown.ChildMenu>
        </Dropdown.Menu>
      }
    >
      <Button label="Экспорт" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
