"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function SelectGuidelineLabelBadDemo() {
  const [value, setValue] = useState<string | undefined>("team");

  return (
    <Select
      value={value}
      onChange={(next) => setValue(next as string | undefined)}
      options={[
        { value: "free", label: "Free" },
        { value: "team", label: "Team" },
        { value: "business", label: "Business" },
      ]}
      style={{ width: "100%" }}
    />
  );
}
