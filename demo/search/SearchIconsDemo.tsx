"use client";

import { useState } from "react";
import { Search } from "altrone-ui";
import { ScanSearch, Trash2 } from "lucide-react";

export default function SearchIconsDemo() {
  const [query, setQuery] = useState("icons");

  return (
    <Search
      value={query}
      onChange={setQuery}
      searchIcon={<ScanSearch />}
      clearIcon={<Trash2 />}
      style={{ width: "100%", maxWidth: 360 }}
    />
  );
}
