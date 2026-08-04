"use client";

import { useState } from "react";
import { Search, Text, Flex } from "altrone-ui";

const ALL_ITEMS = [
  "Кнопка", "Поле ввода", "Выпадающий список", "Модальное окно",
  "Боковая панель", "Всплывающая подсказка", "Поповер", "Поиск",
  "Панель инструментов", "Разделитель", "Прокручиваемая область",
];

export default function SearchBasicDemo() {
  const [query, setQuery] = useState("");

  const filtered = query
    ? ALL_ITEMS.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <Flex direction="column" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <Search
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Найти компонент..."
      />
      {filtered.length > 0 && (
        <div>
          {filtered.map((item) => (
            <Text key={item} block size={4} style={{ padding: "4px 0" }}>
              {item}
            </Text>
          ))}
        </div>
      )}
      {query && filtered.length === 0 && (
        <Text size={4} color="muted">Ничего не найдено</Text>
      )}
    </Flex>
  );
}
