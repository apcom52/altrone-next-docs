"use client";

import { useState } from "react";
import { DataTable, type DataTableColumn } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", width: 200 },
  { accessor: "role", label: "Role", width: 180, filterable: true },
  { accessor: "joined", label: "Joined", width: 180 },
];
const defaultHiddenColumns: Array<keyof Person> = ["joined"];

export default function DataTableColumnVisibilityDemo() {
  const [hiddenColumns, setHiddenColumns] = useState(defaultHiddenColumns);

  return (
    <DataTable<Person>
      data={PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
      hideableColumns
      hiddenColumns={hiddenColumns}
      defaultHiddenColumns={defaultHiddenColumns}
      onHiddenColumnsChange={setHiddenColumns}
    />
  );
}
