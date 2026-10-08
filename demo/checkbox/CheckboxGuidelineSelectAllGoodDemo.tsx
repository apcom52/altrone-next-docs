"use client";

import { useState } from "react";
import { Checkbox, Flex } from "altrone-ui";

export default function CheckboxGuidelineSelectAllGoodDemo() {
  const [items, setItems] = useState([true, false]);
  const all = items.every(Boolean);
  const some = items.some(Boolean);

  return (
    <Flex orientation="vertical" gap="s">
      <Checkbox
        checked={all}
        indeterminate={some && !all}
        onChange={(next) => setItems(items.map(() => next))}
      >
        All files
      </Checkbox>
      {["report.pdf", "photo.png"].map((name, i) => (
        <Checkbox
          key={name}
          checked={items[i]}
          onChange={(next) => setItems(items.map((v, j) => (j === i ? next : v)))}
          style={{ marginLeft: 24 }}
        >
          {name}
        </Checkbox>
      ))}
    </Flex>
  );
}
