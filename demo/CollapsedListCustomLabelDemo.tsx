"use client";

import { CollapsedList, Text } from "altrone-ui";

const REVIEWS = [
  "Отличный продукт, рекомендую всем!",
  "Хорошее качество за свою цену.",
  "Доставка быстрая, упаковка аккуратная.",
  "Уже второй раз заказываю — не разочаровал.",
  "Всё соответствует описанию.",
  "Немного дольше ждал, чем обычно, но товар понравился.",
  "Буду покупать снова.",
];

export default function CollapsedListCustomLabelDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 480 }}>
      <CollapsedList
        limit={3}
        gap="s"
        expandButtonLabel={({ hiddenItems, expanded }) =>
          expanded ? "Скрыть отзывы" : `Показать ещё ${hiddenItems} отзыва`
        }
      >
        {REVIEWS.map((review, i) => (
          <Text key={i} block size={4}>
            {review}
          </Text>
        ))}
      </CollapsedList>
    </div>
  );
}
