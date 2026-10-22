"use client";

import type { CSSProperties } from "react";
import { Pagination } from "altrone-ui";

export default function PaginationCssVarsDemo() {
  return (
    <Pagination
      totalPages={12}
      defaultPage={5}
      style={
        {
          "--pagination-background": "var(--background-a2)",
          "--pagination-rounding": "4px",
          "--pagination-gap": "8px",
        } as CSSProperties
      }
    />
  );
}
