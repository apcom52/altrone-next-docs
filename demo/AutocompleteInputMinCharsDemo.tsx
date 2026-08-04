"use client";

import { useState } from "react";
import { AutocompleteInput } from "altrone-ui";

const COUNTRIES = [
  "Россия", "Германия", "Франция", "Испания", "Италия",
  "Португалия", "Нидерланды", "Бельгия", "Швеция", "Норвегия",
  "Дания", "Финляндия", "Польша", "Чехия", "Австрия",
];

export default function AutocompleteInputMinCharsDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    COUNTRIES.filter((c) => c.toLowerCase().startsWith(value.toLowerCase()));

  return (
    <AutocompleteInput
      value={value}
      onChange={setValue}
      getSuggestions={getSuggestions}
      minChars={2}
      placeholder="Введите минимум 2 символа..."
      style={{ maxWidth: 360 }}
    />
  );
}
