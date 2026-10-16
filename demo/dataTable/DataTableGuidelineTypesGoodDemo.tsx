"use client";

import { DataTable, type DataTableColumn } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "salary", label: "Salary", type: "currency", sortable: true, filterable: true, options: { currency: "USD" } },
  { accessor: "joined", label: "Joined", type: "date", sortable: true, filterable: true },
];

export default function DataTableGuidelineTypesGoodDemo() {
  return (
    <DataTable<Person>
      data={PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={4}
      showFooter={false}
    />
  );
}
