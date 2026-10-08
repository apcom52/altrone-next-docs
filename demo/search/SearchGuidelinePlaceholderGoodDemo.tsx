"use client";

import { useState } from "react";
import { Search } from "altrone-ui";

export default function SearchGuidelinePlaceholderGoodDemo() {
  const [query, setQuery] = useState("");

  return (
    <Search
      value={query}
      onChange={setQuery}
      placeholder="Find a component"
      style={{ width: "100%" }}
    />
  );
}
