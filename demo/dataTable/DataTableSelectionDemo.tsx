"use client";

import { useState } from "react";
import { DataTable, type DataTableColumn, type DataTableMode } from "altrone-ui";
import { Trash } from "lucide-react";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string" },
  { accessor: "role", label: "Role", type: "string" },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" } },
];

export default function DataTableSelectionDemo() {
  const [people, setPeople] = useState(PEOPLE);
  const [mode, setMode] = useState<DataTableMode>("read");

  return (
    <DataTable<Person>
      data={people}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
      selectable
      mode={mode}
      onModeChange={setMode}
      actions={({ selectedItems }) => (
        <DataTable.Action
          label={`Remove ${selectedItems.length} selected`}
          icon={<Trash />}
          danger
          disabled={selectedItems.length === 0}
          onClick={() => {
            const ids = new Set(selectedItems.map((person) => person.id));
            setPeople((current) => current.filter((person) => !ids.has(person.id)));
          }}
        />
      )}
    />
  );
}
