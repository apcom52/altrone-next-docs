"use client";

import { Flex, Spoiler, Text } from "altrone-ui";

const FAQ = [
  {
    q: "Do I need to install extra dependencies?",
    a: "Only React and TypeScript. Everything else ships with the package.",
  },
  {
    q: "Is server rendering supported?",
    a: "Yes. The components are compatible with the Next.js App Router.",
  },
  {
    q: "Can I customize the theme?",
    a: "Yes — through CSS variables or the accent prop of Application.",
  },
];

export default function SpoilerFaqDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 560 }}>
      {FAQ.map((item) => (
        <Spoiler key={item.q} title={item.q}>
          <Text block size={4}>{item.a}</Text>
        </Spoiler>
      ))}
    </Flex>
  );
}
