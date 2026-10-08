"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function SelectGuidelineClearableGoodDemo() {
  const [value, setValue] = useState<string | undefined>("open");

  return (
    <Select
      clearable
      value={value}
      onChange={(next) => setValue(next as string | undefined)}
      placeholder="All statuses"
      options={[
        { value: "open", label: "Open" },
        { value: "closed", label: "Closed" },
      ]}
      style={{ width: "100%" }}
    />
  );
}
