"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

const OPTIONS = Array.from({ length: 40 }, (_, index) => ({
  value: `tz-${index}`,
  label: `UTC${index - 12 >= 0 ? "+" : "−"}${String(Math.abs(index - 12)).padStart(2, "0")}:00`,
}));

export default function SelectGuidelineSearchBadDemo() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <Select
      value={value}
      onChange={(next) => setValue(next as string | undefined)}
      placeholder="Select a time zone"
      options={OPTIONS}
      style={{ width: "100%" }}
    />
  );
}
