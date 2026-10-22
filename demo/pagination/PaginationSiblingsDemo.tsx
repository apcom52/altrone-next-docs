"use client";

import { Flex, Pagination } from "altrone-ui";

export default function PaginationSiblingsDemo() {
  return (
    <Flex orientation="vertical" align="center" gap="m">
      <Pagination totalPages={30} defaultPage={15} siblings={0} />
      <Pagination totalPages={30} defaultPage={15} siblings={1} />
      <Pagination totalPages={30} defaultPage={15} siblings={2} />
    </Flex>
  );
}
