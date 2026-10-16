"use client";

import { DataTable, type DataTableColumn } from "altrone-ui";
import { ChevronDown, ChevronUp, ListFilter } from "lucide-react";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string", sortable: true, filterable: true },
  { accessor: "role", label: "Role", type: "string", sortable: true },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" }, sortable: true },
];

export default function DataTableIconsDemo() {
  return (
    <DataTable<Person>
      data={PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
      defaultSort={{ field: "name", direction: "asc" }}
      icons={{
        sortAsc: <ChevronUp />,
        sortDesc: <ChevronDown />,
        filter: <ListFilter />,
      }}
    />
  );
}
