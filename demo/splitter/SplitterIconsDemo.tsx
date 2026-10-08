"use client";

import { Flex, Splitter, Text } from "altrone-ui";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SplitterIconsDemo() {
  return (
    <div style={{ height: 180, width: "100%" }}>
      <Splitter icons={{ chevronLeft: <ArrowLeft />, chevronRight: <ArrowRight /> }}>
        <Splitter.Panel defaultSize={30} collapsible>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">Sidebar</Text>
            <Text block size={4} color="muted">Hover the divider to see the arrows.</Text>
          </Flex>
        </Splitter.Panel>
        <Splitter.Panel>
          <Text block weight="bold" style={{ padding: 16 }}>Main area</Text>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
