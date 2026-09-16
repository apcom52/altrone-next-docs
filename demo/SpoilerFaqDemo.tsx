"use client";

import { Spoiler, Text } from "altrone-ui";

const FAQ = [
  {
    q: "Нужно ли устанавливать дополнительные зависимости?",
    a: "Только React 18+ и TypeScript 4.9+. Все остальные зависимости включены в пакет.",
  },
  {
    q: "Поддерживается ли серверный рендеринг?",
    a: "Да. Компоненты совместимы с Next.js App Router. Интерактивные компоненты нужно использовать в клиентских модулях с директивой 'use client'.",
  },
  {
    q: "Можно ли кастомизировать тему?",
    a: "Да — через CSS-переменные или проп accent в Application. Кастомные токены можно переопределить глобально.",
  },
  {
    q: "Есть ли поддержка RTL?",
    a: "Частичная. Базовые компоненты следуют логическим свойствам CSS, но полноценная RTL-поддержка находится в разработке.",
  },
];

export default function SpoilerFaqDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 560, display: "flex", flexDirection: "column", gap: "8px" }}>
      {FAQ.map((item) => (
        <Spoiler key={item.q} title={item.q}>
          <Text block size={4}>{item.a}</Text>
        </Spoiler>
      ))}
    </div>
  );
}
