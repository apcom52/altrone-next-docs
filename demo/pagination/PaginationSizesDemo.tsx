"use client";

import { Flex, Pagination } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function PaginationSizesDemo() {
  return (
    <Flex orientation="vertical" align="center" gap="s">
      {SIZES.map((size) => (
        <Pagination key={size} size={size} totalPages={9} defaultPage={5} />
      ))}
    </Flex>
  );
}
