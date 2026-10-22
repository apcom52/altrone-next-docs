"use client";

import { Flex, Label } from "altrone-ui";

const SEMANTIC = [
  { color: "default", text: "Queued" },
  { color: "primary", text: "In progress" },
  { color: "warning", text: "In review" },
  { color: "success", text: "Completed" },
  { color: "danger", text: "Cancelled" },
] as const;

const CATEGORICAL = ["amber", "blue", "brown", "indigo", "pink", "purple", "red", "teal"] as const;

export default function LabelColorsDemo() {
  return (
    <Flex orientation="vertical" gap="m" align="center">
      <Flex gap="s" wrap align="center" justify="center">
        {SEMANTIC.map(({ color, text }) => (
          <Label key={color} color={color} variant="soft">
            {text}
          </Label>
        ))}
      </Flex>
      <Flex gap="s" wrap align="center" justify="center">
        {CATEGORICAL.map((color) => (
          <Label key={color} color={color}>
            {color}
          </Label>
        ))}
      </Flex>
    </Flex>
  );
}
