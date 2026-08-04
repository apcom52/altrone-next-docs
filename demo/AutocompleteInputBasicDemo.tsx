"use client";

import { useState } from "react";
import { AutocompleteInput } from "altrone-ui";

const CITIES = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону",
  "Уфа", "Красноярск", "Воронеж", "Пермь", "Волгоград",
];

export default function AutocompleteInputBasicDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    CITIES.filter((c) => c.toLowerCase().includes(value.toLowerCase()));

  return (
    <AutocompleteInput
      value={value}
      onChange={setValue}
      getSuggestions={getSuggestions}
      placeholder="Введите город"
      style={{ maxWidth: 360 }}
    />
  );
}
