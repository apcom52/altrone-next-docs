"use client";

import { useState } from "react";
import { Modal, Button, Text, Flex } from "altrone-ui";

type ModalSize = "s" | "m" | "l";

const SIZES: { size: ModalSize; title: string; text: string }[] = [
  { size: "s", title: "Discard changes?", text: "A short question that fits in a line or two." },
  { size: "m", title: "Edit profile", text: "The default width suits most forms and confirmations." },
  { size: "l", title: "Preview", text: "A wide dialog for tables, images, or forms that need more room." },
];

export default function ModalSizesDemo() {
  const [active, setActive] = useState<ModalSize | null>(null);
  const current = SIZES.find((item) => item.size === active);

  return (
    <>
      <Flex gap="s">
        {SIZES.map((item) => (
          <Button key={item.size} label={`Size ${item.size}`} onClick={() => setActive(item.size)} />
        ))}
      </Flex>
      <Modal
        open={current !== undefined}
        onClose={() => setActive(null)}
        size={active ?? "m"}
        title={current?.title}
        content={<Text block>{current?.text}</Text>}
      />
    </>
  );
}
