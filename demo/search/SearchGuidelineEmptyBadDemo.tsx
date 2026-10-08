"use client";

import { useState } from "react";
import { Flex, Search } from "altrone-ui";

export default function SearchGuidelineEmptyBadDemo() {
  const [query, setQuery] = useState("qwerty");

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
      <Search value={query} onChange={setQuery} placeholder="Find a component" />
    </Flex>
  );
}
