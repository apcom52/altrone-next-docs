"use client";

import { useState } from "react";
import { Flex, Pagination, Text } from "altrone-ui";

export default function PaginationControlledDemo() {
  const [page, setPage] = useState(3);

  return (
    <Flex orientation="vertical" align="center" gap="m">
      <Pagination totalPages={12} currentPage={page} onChange={(next) => setPage(next)} />
      <Text>Showing page {page} of 12</Text>
    </Flex>
  );
}
