"use client";

import { useState } from "react";
import { AutocompleteInput, Text } from "altrone-ui";

const FRUITS = [
  "Яблоко", "Апельсин", "Банан", "Арбуз", "Абрикос",
  "Авокадо", "Ананас", "Груша", "Персик", "Слива",
  "Виноград", "Вишня", "Клубника", "Малина", "Черника",
];

let callCount = 0;

export default function AutocompleteInputCacheDemo() {
  const [value, setValue] = useState("");
  const [calls, setCalls] = useState(0);

  const getSuggestions = ({ value }: { value: string }) => {
    callCount++;
    setCalls(callCount);
    return FRUITS.filter((f) => f.toLowerCase().startsWith(value.toLowerCase()));
  };

  return (
    <div style={{ maxWidth: 360 }}>
      <AutocompleteInput
        value={value}
        onChange={setValue}
        getSuggestions={getSuggestions}
        cacheResults
        placeholder="Введите фрукт..."
      />
      <Text block size={2} color="muted" style={{ marginTop: 8 }}>
        Запросов к getSuggestions: {calls} — повторный ввод использует кэш
      </Text>
    </div>
  );
}
