"use client";

import { Dropdown, Button, Divider } from "altrone-ui";
import { ChevronDown, Pencil, Copy, Trash } from "lucide-react";

export default function DropdownBasicDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Редактировать" icon={<Pencil size={16} />} />
          <Dropdown.Action label="Дублировать" icon={<Copy size={16} />} />
          <Divider />
          <Dropdown.Action label="Удалить" icon={<Trash size={16} />} danger />
        </Dropdown.Menu>
      }
    >
      <Button label="Действия" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
