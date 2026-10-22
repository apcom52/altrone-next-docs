"use client";

import { Pagination } from "altrone-ui";
import { ArrowLeft, ArrowRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function PaginationIconsDemo() {
  return (
    <Pagination
      totalPages={12}
      defaultPage={5}
      prevIcon={<ArrowLeft />}
      nextIcon={<ArrowRight />}
      firstPageIcon={<ChevronsLeft />}
      lastPageIcon={<ChevronsRight />}
    />
  );
}
