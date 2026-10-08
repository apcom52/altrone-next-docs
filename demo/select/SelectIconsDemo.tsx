"use client";

import { useState } from "react";
import { Select } from "altrone-ui";
import { ChevronsUpDown, Eraser, ScanSearch } from "lucide-react";

const OPTIONS = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Match system" },
];

export default function SelectIconsDemo() {
  const [theme, setTheme] = useState<string | undefined>("auto");

  return (
    <Select
      searchable
      clearable
      value={theme}
      onChange={(value) => setTheme(value as string | undefined)}
      options={OPTIONS}
      openIcon={<ChevronsUpDown />}
      closeIcon={<ChevronsUpDown />}
      searchIcon={<ScanSearch />}
      clearIcon={<Eraser />}
      style={{ width: "100%", maxWidth: 320 }}
    />
  );
}
