"use client";

import { useRef } from "react";
import { Scrollable, Button, Text, Flex } from "altrone-ui";
import { ArrowUp, ArrowDown } from "lucide-react";

const ITEMS = Array.from({ length: 30 }, (_, i) => `Строка ${i + 1}`);

export default function ScrollableProgrammaticDemo() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    viewportRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    const el = viewportRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  return (
    <Flex direction="column" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <Flex gap="s">
        <Button
          label="В начало"
          icon={<ArrowUp size={16} />}
          size="s"
          onClick={scrollToTop}
        />
        <Button
          label="В конец"
          icon={<ArrowDown size={16} />}
          size="s"
          onClick={scrollToBottom}
        />
      </Flex>
      <div style={{ height: 200 }}>
        <Scrollable ref={viewportRef}>
          <div style={{ padding: "4px 0" }}>
            {ITEMS.map((item) => (
              <Text key={item} block size={4} style={{ padding: "6px 0" }}>
                {item}
              </Text>
            ))}
          </div>
        </Scrollable>
      </div>
    </Flex>
  );
}
