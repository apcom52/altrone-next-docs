"use client";

import { useState } from "react";
import { Button, Flex, Search } from "altrone-ui";

export default function SearchNoControlsDemo() {
  const [query, setQuery] = useState("design");

  return (
    <Flex orientation="horizontal" gap="s" align="center" style={{ width: "100%", maxWidth: 420 }}>
      <Search
        value={query}
        onChange={setQuery}
        showControls={false}
        placeholder="Filter articles"
        style={{ flex: 1 }}
      />
      <Button label="Reset filters" onClick={() => setQuery("")} />
    </Flex>
  );
}
