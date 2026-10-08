"use client";

import { useRef, useState } from "react";
import { AutocompleteInput, Flex, Text } from "altrone-ui";

const FRUITS = [
  "Apple", "Apricot", "Avocado", "Banana", "Blackberry",
  "Blueberry", "Cherry", "Grape", "Mango", "Orange",
  "Peach", "Pear", "Pineapple", "Plum", "Strawberry",
];

export default function AutocompleteInputCacheDemo() {
  const [value, setValue] = useState("");
  const [calls, setCalls] = useState(0);
  const callCount = useRef(0);

  const getSuggestions = ({ value }: { value: string }) => {
    callCount.current += 1;
    setCalls(callCount.current);
    return FRUITS.filter((fruit) =>
      fruit.toLowerCase().startsWith(value.toLowerCase()),
    );
  };

  return (
    <Flex orientation="vertical" gap="s" style={{ maxWidth: 360 }}>
      <AutocompleteInput
        value={value}
        onChange={setValue}
        getSuggestions={getSuggestions}
        cacheResults
        placeholder="Type a fruit"
      />
      <Text size={2} color="muted">
        getSuggestions calls: {calls}. Typing a prefix again reuses the cache.
      </Text>
    </Flex>
  );
}
