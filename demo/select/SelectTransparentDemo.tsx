"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function SelectTransparentDemo() {
  const [sort, setSort] = useState<string | undefined>("new");

  return (
    <Select
      transparent
      value={sort}
      onChange={(value) => setSort(value as string | undefined)}
      options={[
        { value: "new", label: "Newest first" },
        { value: "old", label: "Oldest first" },
        { value: "az", label: "Name A→Z" },
      ]}
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
