"use client";

import { useEffect, useState } from "react";
import { DataTable, type DataTableColumn, type DataTableMode } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "role", label: "Role", type: "string" },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" } },
];

export default function DataTableLoadingDemo() {
  const [mode, setMode] = useState<DataTableMode>("loading");

  useEffect(() => {
    const timer = setTimeout(() => setMode("read"), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DataTable<Person>
      data={mode === "loading" ? PEOPLE.slice(0, 4) : PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
      mode={mode}
    />
  );
}
