"use client";

import { useState } from "react";
import { Button, Flex, Text } from "altrone-ui";

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <Flex align="center" gap="m">
      <Button label="−" onClick={() => setCount((c) => c - 1)} />
      <Text size={6} weight="bold">{count}</Text>
      <Button label="+" variant="submit" onClick={() => setCount((c) => c + 1)} />
    </Flex>
  );
}
