"use client";

import { useState } from "react";
import { Search } from "altrone-ui";

export default function SearchGuidelinePlaceholderBadDemo() {
  const [query, setQuery] = useState("");

  return (
    <Search
      value={query}
      onChange={setQuery}
      placeholder="Enter the name of a component to search for"
      style={{ width: "100%" }}
    />
  );
}
