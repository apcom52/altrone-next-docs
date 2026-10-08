"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function SelectClearableDemo() {
  const [status, setStatus] = useState<string | undefined>("open");

  return (
    <Select
      value={status}
      onChange={(value) => setStatus(value as string | undefined)}
      placeholder="All statuses"
      clearable
      options={[
        { value: "open", label: "Open" },
        { value: "in-progress", label: "In progress" },
        { value: "closed", label: "Closed" },
      ]}
      style={{ width: "100%", maxWidth: 320 }}
    />
  );
}
