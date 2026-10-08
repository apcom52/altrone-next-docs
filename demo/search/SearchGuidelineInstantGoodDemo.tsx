"use client";

import { useState } from "react";
import { Flex, Search, Text } from "altrone-ui";

const ITEMS = ["Invoices", "Invoice templates", "Payments", "Payouts", "Customers"];

export default function SearchGuidelineInstantGoodDemo() {
  const [query, setQuery] = useState("inv");

  const results = ITEMS.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
      <Search value={query} onChange={setQuery} placeholder="Search billing" />
      <Text size={4} color="muted">
        {results.join(", ")}
      </Text>
    </Flex>
  );
}
