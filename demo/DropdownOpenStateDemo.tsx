"use client";

import { Dropdown, Button, Divider } from "altrone-ui";
import { ChevronDown, ChevronUp, Download, Printer, Share } from "lucide-react";

export default function DropdownOpenStateDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Скачать PDF" icon={<Download size={16} />} hintText="⌘D" />
          <Dropdown.Action label="Печать" icon={<Printer size={16} />} hintText="⌘P" />
          <Divider />
          <Dropdown.Action label="Поделиться" icon={<Share size={16} />} />
        </Dropdown.Menu>
      }
    >
      {({ opened }) => (
        <Button
          label="Экспорт"
          additionalIcon={opened ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        />
      )}
    </Dropdown>
  );
}
