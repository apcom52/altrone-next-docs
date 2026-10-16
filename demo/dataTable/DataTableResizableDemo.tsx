"use client";

import { DataTable, type DataTableColumn } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "id", label: "ID", type: "number", width: 80, resizable: false },
  { accessor: "name", label: "Name", type: "string", width: 220 },
  { accessor: "role", label: "Role", type: "string", width: 160 },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" }, width: 160 },
];

export default function DataTableResizableDemo() {
  return (
    <DataTable<Person>
      data={PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
      resizableColumns
    />
  );
}
