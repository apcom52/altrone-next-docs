"use client";

import { useRef } from "react";
import { Box, Button, Flex, Scrollable, ScrollableRef, Text } from "altrone-ui";
import { ArrowDown, ArrowUp } from "lucide-react";

const ITEMS = Array.from({ length: 30 }, (_, i) => `Row ${i + 1}`);

export default function ScrollableProgrammaticDemo() {
  const controlRef = useRef<ScrollableRef>(null);

  const scrollToTop = () => {
    controlRef.current?.getViewport()?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    const viewport = controlRef.current?.getViewport();
    viewport?.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
  };

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <Flex gap="s">
        <Button label="To the top" icon={<ArrowUp size={16} />} size="s" onClick={scrollToTop} />
        <Button label="To the bottom" icon={<ArrowDown size={16} />} size="s" onClick={scrollToBottom} />
      </Flex>
      <Box material="pale" shape="rounded" radius={12} padding={12} height={200}>
        <Scrollable controlRef={controlRef}>
          {ITEMS.map((item) => (
            <Text key={item} block>{item}</Text>
          ))}
        </Scrollable>
      </Box>
    </Flex>
  );
}
