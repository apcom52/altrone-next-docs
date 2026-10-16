"use client";

import { DataTable, type DataTableColumn } from "altrone-ui";
import { PEOPLE } from "./data";

type Row = { id: number; name: string; salary: string; joined: string };

const rows: Row[] = PEOPLE.map((person) => ({
  id: person.id,
  name: person.name,
  salary: `$${person.salary.toLocaleString("en-US")}`,
  joined: person.joined,
}));

const columns: DataTableColumn<Row>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "salary", label: "Salary", type: "string", sortable: true, filterable: true },
  { accessor: "joined", label: "Joined", type: "string", sortable: true, filterable: true },
];

export default function DataTableGuidelineTypesBadDemo() {
  return (
    <DataTable<Row>
      data={rows}
      columns={columns}
      getRowId={(row) => String(row.id)}
      rowsPerPage={4}
      showFooter={false}
    />
  );
}
