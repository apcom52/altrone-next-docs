"use client";

import { CollapsedList, Text } from "altrone-ui";

const REVIEWS = [
  "Great product, would recommend to everyone!",
  "Good quality for the price.",
  "Fast delivery, neat packaging.",
  "Second order already — no regrets.",
  "Everything matches the description.",
  "Waited a bit longer than usual, but I like the product.",
  "Will buy again.",
];

export default function CollapsedListCustomLabelDemo() {
  return (
    <CollapsedList
      limit={3}
      gap="s"
      style={{ width: "100%", maxWidth: 480 }}
      expandButtonLabel={({ hiddenItems, expanded }) =>
        expanded ? "Hide reviews" : `Show ${hiddenItems} more reviews`
      }
    >
      {REVIEWS.map((review) => (
        <Text key={review} block size={4}>
          {review}
        </Text>
      ))}
    </CollapsedList>
  );
}
