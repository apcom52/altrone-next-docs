"use client";

import { Avatar, DataTable, Flex, Label, Text, type DataTableColumn } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  {
    accessor: "name",
    label: "Person",
    type: "custom",
    options: {
      renderReadMode: ({ value }) => {
        const [firstName, lastName] = String(value).split(" ");

        return (
          <Flex align="center" gap="m">
            <Avatar firstName={firstName} lastName={lastName} size="s" />
            <Text weight="medium">{String(value)}</Text>
          </Flex>
        );
      },
    },
  },
  { accessor: "role", label: "Role", type: "string" },
  {
    accessor: "active",
    label: "Status",
    type: "custom",
    options: {
      renderReadMode: ({ value }) => (
        <Label variant="status" shape="pill" color={value ? "success" : "warning"}>
          {value ? "Active" : "On leave"}
        </Label>
      ),
    },
  },
];

export default function DataTableCustomCellDemo() {
  return (
    <DataTable<Person>
      data={PEOPLE}
      columns={columns}
      getRowId={(person) => String(person.id)}
      rowsPerPage={5}
    />
  );
}
