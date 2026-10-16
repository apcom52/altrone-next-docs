"use client";

import { DataTable, type DataTableColumn } from "altrone-ui";
import { Pencil, Trash } from "lucide-react";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "role", label: "Role", type: "string" },
];

export default function DataTableGuidelineRowActionsGoodDemo() {
  return (
    <DataTable<Person>
      data={PEOPLE.slice(0, 4)}
      columns={columns}
      getRowId={(person) => String(person.id)}
      showFooter={false}
      rowActions={[
        <DataTable.RowAction key="edit" label="Edit" icon={<Pencil />} showLabel={false} onClick={() => undefined} />,
        <DataTable.RowAction key="delete" label="Delete" icon={<Trash />} danger collapsed onClick={() => undefined} />,
      ]}
    />
  );
}
