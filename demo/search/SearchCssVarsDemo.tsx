"use client";

import { Search } from "altrone-ui";

export default function SearchCssVarsDemo() {
  return (
    <Search
      value=""
      onChange={() => undefined}
      placeholder="Find a component"
      style={
        {
          "--search-icon-size": "24px",
          "--search-placeholder-color": "var(--accent-11)",
          width: "100%",
          maxWidth: 360,
        } as React.CSSProperties
      }
    />
  );
}
