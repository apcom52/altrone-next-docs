"use client";

import { useState } from "react";
import { Search } from "altrone-ui";

const CITIES = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону",
  "Уфа", "Красноярск", "Воронеж", "Пермь", "Волгоград", "Краснодар",
];

export default function SearchSuggestionsDemo() {
  const [query, setQuery] = useState("");

  const getSuggestions = (q: string) =>
    CITIES
      .filter((c) => c.toLowerCase().includes(q.toLowerCase()))
      .map((c) => ({ value: c, label: c }));

  return (
    <Search
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      getSuggestions={getSuggestions}
      placeholder="Найти город..."
      style={{ width: "100%", maxWidth: 360 }}
    />
  );
}
