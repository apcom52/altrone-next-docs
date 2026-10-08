"use client";

import { useState } from "react";
import { Dropdown, Button, Divider } from "altrone-ui";
import { SlidersHorizontal } from "lucide-react";

export default function DropdownRadioDemo() {
  const [sort, setSort] = useState("date");
  const [view, setView] = useState("grid");
  const [compact, setCompact] = useState(false);

  const sortLabels: Record<string, string> = {
    date: "By date",
    name: "By name",
    size: "By size",
  };

  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.RadioList label="Sort by" value={sort} onChange={setSort}>
            <Dropdown.RadioItem value="date" label="By date" />
            <Dropdown.RadioItem value="name" label="By name" />
            <Dropdown.RadioItem value="size" label="By size" />
          </Dropdown.RadioList>
          <Divider />
          <Dropdown.RadioList label="View" value={view} onChange={setView}>
            <Dropdown.RadioItem value="grid" label="Grid" />
            <Dropdown.RadioItem value="list" label="List" />
          </Dropdown.RadioList>
          <Divider />
          <Dropdown.Checkbox
            label="Compact mode"
            checked={compact}
            onChange={setCompact}
          />
        </Dropdown.Menu>
      }
    >
      <Button label={`Sort: ${sortLabels[sort]}`} icon={<SlidersHorizontal size={16} />} />
    </Dropdown>
  );
}
