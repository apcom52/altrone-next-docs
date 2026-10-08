"use client";

import { useState } from "react";
import { Search, Toolbar } from "altrone-ui";

export default function SearchToolbarDemo() {
  const [query, setQuery] = useState("");

  return (
    <Toolbar>
      <Toolbar.Leading>
        <Toolbar.Title title="Projects" />
      </Toolbar.Leading>
      <Toolbar.Center>
        <Search
          value={query}
          onChange={setQuery}
          placeholder="Search projects"
          aria-label="Search projects"
          style={{ width: 280 }}
        />
      </Toolbar.Center>
    </Toolbar>
  );
}
