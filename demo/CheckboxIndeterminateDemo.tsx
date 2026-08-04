"use client";

import { useState } from "react";
import { Checkbox, Flex } from "altrone-ui";

const OPTIONS = ["JavaScript", "TypeScript", "Python"];

export default function CheckboxIndeterminateDemo() {
  const [selected, setSelected] = useState<string[]>(["TypeScript"]);

  const allChecked = selected.length === OPTIONS.length;
  const someChecked = selected.length > 0 && !allChecked;

  function toggleAll() {
    setSelected(allChecked ? [] : OPTIONS);
  }

  function toggle(opt: string) {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt],
    );
  }

  return (
    <Flex direction="column" gap="s">
      <Checkbox
        checked={allChecked}
        indeterminate={someChecked}
        onChange={toggleAll}
      >
        Все языки
      </Checkbox>
      {OPTIONS.map((opt) => (
        <Checkbox
          key={opt}
          checked={selected.includes(opt)}
          onChange={() => toggle(opt)}
          style={{ marginLeft: 24 }}
        >
          {opt}
        </Checkbox>
      ))}
    </Flex>
  );
}
