"use client";

import { DataTable, type DataTableColumn } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string", sortable: true, filterable: true },
  { accessor: "role", label: "Role", type: "select", sortable: true, filterable: true },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" }, sortable: true, filterable: true },
  { accessor: "active", label: "Active", type: "boolean", filterable: true },
];

export default function DataTableSortFilterDemo() {
  return (
    <DataTable<Person>
      data={PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
      defaultSort={{ field: "salary", direction: "desc" }}
    />
  );
}
