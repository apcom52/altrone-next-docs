"use client";

import type { CSSProperties } from "react";
import { DataTable, type DataTableColumn } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "role", label: "Role", type: "string" },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" } },
];

export default function DataTableCssVarsDemo() {
  return (
    <div
      style={
        {
          "--data-table-rounding": "8px",
          "--data-table-header-text-color": "var(--danger-text-1)",
          "--data-table-even-background-color": "var(--accent-2)",
        } as CSSProperties
      }
    >
      <DataTable<Person>
        data={PEOPLE}
        columns={columns}
        getRowId={(person) => String(person.id)}
        rowsPerPage={4}
      />
    </div>
  );
}
