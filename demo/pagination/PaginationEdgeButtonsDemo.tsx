"use client";

import { Flex, Pagination } from "altrone-ui";

export default function PaginationEdgeButtonsDemo() {
  return (
    <Flex orientation="vertical" align="center" gap="m">
      <Pagination totalPages={20} defaultPage={8} />
      <Pagination totalPages={20} defaultPage={8} showEdgeButtons={false} />
    </Flex>
  );
}
