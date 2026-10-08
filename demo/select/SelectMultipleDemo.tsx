"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function SelectMultipleDemo() {
  const [tags, setTags] = useState<string[]>(["bug"]);

  return (
    <Select
      multiple
      clearable
      value={tags}
      onChange={(value) => setTags((value as string[] | undefined) ?? [])}
      placeholder="Select tags"
      options={[
        { value: "bug", label: "Bug" },
        { value: "feature", label: "Feature" },
        { value: "docs", label: "Docs" },
        { value: "design", label: "Design" },
      ]}
      style={{ width: "100%", maxWidth: 320 }}
    />
  );
}
