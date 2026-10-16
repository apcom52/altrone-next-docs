"use client";

import { useState } from "react";
import { DataTable, Text, Flex, type DataTableColumn } from "altrone-ui";
import { Eye, Pencil, Trash } from "lucide-react";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "role", label: "Role", type: "string" },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" } },
];

export default function DataTableRowActionsDemo() {
  const [message, setMessage] = useState("Use the row buttons");

  return (
    <Flex orientation="vertical" gap="m">
      <Text color="muted" size={2}>{message}</Text>
      <DataTable<Person>
        data={PEOPLE.slice(0, 5)}
        columns={columns}
        getRowId={(person) => String(person.id)}
        showFooter={false}
        rowActions={({ row }) => [
          <DataTable.RowAction key="view" label="View" icon={<Eye />} showLabel={false} onClick={() => setMessage(`Viewing ${row.name}`)} />,
          <DataTable.RowAction key="edit" label="Edit" icon={<Pencil />} collapsed onClick={() => setMessage(`Editing ${row.name}`)} />,
          <DataTable.RowAction key="delete" label="Delete" icon={<Trash />} danger collapsed onClick={() => setMessage(`Deleting ${row.name}`)} />,
        ]}
      />
    </Flex>
  );
}
