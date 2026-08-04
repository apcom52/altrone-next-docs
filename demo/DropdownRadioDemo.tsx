"use client";

import { useState } from "react";
import { Dropdown, Button, Divider } from "altrone-ui";
import { SlidersHorizontal } from "lucide-react";

export default function DropdownRadioDemo() {
  const [sort, setSort] = useState("date");
  const [view, setView] = useState("grid");
  const [compact, setCompact] = useState(false);

  const sortLabels: Record<string, string> = {
    date: "По дате",
    name: "По имени",
    size: "По размеру",
  };

  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.RadioList label="Сортировка" value={sort} onChange={setSort}>
            <Dropdown.RadioItem value="date" label="По дате" />
            <Dropdown.RadioItem value="name" label="По имени" />
            <Dropdown.RadioItem value="size" label="По размеру" />
          </Dropdown.RadioList>
          <Divider />
          <Dropdown.RadioList label="Вид" value={view} onChange={setView}>
            <Dropdown.RadioItem value="grid" label="Сетка" />
            <Dropdown.RadioItem value="list" label="Список" />
          </Dropdown.RadioList>
          <Divider />
          <Dropdown.Checkbox
            label="Компактный режим"
            checked={compact}
            onChange={setCompact}
          />
        </Dropdown.Menu>
      }
    >
      <Button label={`Вид: ${sortLabels[sort]}`} icon={<SlidersHorizontal size={16} />} />
    </Dropdown>
  );
}
