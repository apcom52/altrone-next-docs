"use client";

import { useState } from "react";
import { Button, Flex, Search, Text } from "altrone-ui";

export default function SearchGuidelineInstantBadDemo() {
  const [query, setQuery] = useState("inv");

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
      <Flex orientation="horizontal" gap="s" align="center">
        <Search
          value={query}
          onChange={setQuery}
          placeholder="Search billing"
          style={{ flex: 1 }}
        />
        <Button label="Find" variant="submit" />
      </Flex>
      <Text size={4} color="muted">
        Press “Find” to see the results
      </Text>
    </Flex>
  );
}
