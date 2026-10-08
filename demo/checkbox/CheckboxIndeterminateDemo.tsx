"use client";

import { useState } from "react";
import { Checkbox, Flex } from "altrone-ui";

const OPTIONS = ["Read", "Write", "Delete"];

export default function CheckboxIndeterminateDemo() {
  const [selected, setSelected] = useState<string[]>(["Read"]);

  const allChecked = selected.length === OPTIONS.length;
  const someChecked = selected.length > 0 && !allChecked;

  const toggleAll = () => setSelected(allChecked ? [] : OPTIONS);
  const toggle = (option: string) =>
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((x) => x !== option) : [...prev, option],
    );

  return (
    <Flex orientation="vertical" gap="s">
      <Checkbox checked={allChecked} indeterminate={someChecked} onChange={toggleAll}>
        All permissions
      </Checkbox>
      {OPTIONS.map((option) => (
        <Checkbox
          key={option}
          checked={selected.includes(option)}
          onChange={() => toggle(option)}
          style={{ marginLeft: 24 }}
        >
          {option}
        </Checkbox>
      ))}
    </Flex>
  );
}
