"use client";

import { useState } from "react";
import { Flex, Search, Text } from "altrone-ui";

export default function SearchGuidelineEmptyGoodDemo() {
  const [query, setQuery] = useState("qwerty");

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
      <Search value={query} onChange={setQuery} placeholder="Find a component" />
      <Text size={4} color="muted">
        Nothing found for “{query}”. Check the spelling or try a shorter query.
      </Text>
    </Flex>
  );
}
