"use client";

import { useState } from "react";
import { Checkbox, Flex } from "altrone-ui";

export default function CheckboxGuidelineSelectAllBadDemo() {
  const [items, setItems] = useState([true, false]);

  return (
    <Flex orientation="vertical" gap="s">
      <Checkbox
        checked={items.every(Boolean)}
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
