"use client";

import { useState } from "react";
import { Flex, Search, Text } from "altrone-ui";

const COMPONENTS = [
  "Button",
  "Checkbox",
  "Dropdown",
  "Modal",
  "Popover",
  "Search",
  "Select",
  "Slider",
  "Tabs",
  "Toolbar",
];

export default function SearchBasicDemo() {
  const [query, setQuery] = useState("");

  const results = COMPONENTS.filter((name) =>
    name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <Search value={query} onChange={setQuery} placeholder="Find a component" />
      {results.length > 0 ? (
        <Text size={4} color="muted">
          {results.join(", ")}
        </Text>
      ) : (
        <Text size={4} color="muted">
          Nothing found for “{query}”
        </Text>
      )}
    </Flex>
  );
}
