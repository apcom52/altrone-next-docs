"use client";

import { useState } from "react";
import { Button, DataTable, Flex, Text, type DataTableColumn, type DataTableFilter, type Sorting } from "altrone-ui";
import { PEOPLE, type Person } from "./data";

const columns: DataTableColumn<Person>[] = [
  { accessor: "name", label: "Name", type: "string", sortable: true, filterable: true },
  { accessor: "role", label: "Role", type: "select", sortable: true, filterable: true },
  { accessor: "salary", label: "Salary", type: "currency", options: { currency: "USD" }, sortable: true },
];

export default function DataTableControlledDemo() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<Sorting | undefined>({ field: "name", direction: "asc" });
  const [filters, setFilters] = useState<DataTableFilter[]>([]);

  return (
    <Flex orientation="vertical" gap="m">
      <Flex gap="s" align="center">
        <Button label="Page 2" onClick={() => setPage(2)} />
        <Button label="Top salaries" onClick={() => setSort({ field: "salary", direction: "desc" })} />
        <Button label="Reset" variant="text" onClick={() => { setPage(1); setSort(undefined); setFilters([]); }} />
      </Flex>
      <Text color="muted" size={2}>
        Page {page}, sorted by {sort ? `${sort.field} ${sort.direction}` : "nothing"}, {filters.length} filters
      </Text>
      <DataTable<Person>
        data={PEOPLE}
        columns={columns}
        getRowId={(person) => String(person.id)}
        rowsPerPage={4}
        page={page}
        sort={sort ?? null}
        filters={filters}
        onPageChange={setPage}
        onSortChange={setSort}
        onFilterChange={setFilters}
      />
    </Flex>
  );
}
