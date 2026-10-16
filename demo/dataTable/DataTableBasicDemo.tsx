"use client";

import { DataTable, type DataTableColumn } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "role", label: "Role", type: "string" },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" } },
  { accessor: "active", label: "Active", type: "boolean" },
  { accessor: "joined", label: "Joined", type: "date" },
];

export default function DataTableBasicDemo() {
  return (
    <DataTable<Person>
      data={PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
    />
  );
}
