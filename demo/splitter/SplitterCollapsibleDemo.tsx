"use client";

import { useRef } from "react";
import { Button, Flex, Splitter, Text, type SplitterHandle } from "altrone-ui";

export default function SplitterCollapsibleDemo() {
  const controlRef = useRef<SplitterHandle>(null);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      <Flex gap="s">
        <Button label="Collapse sidebar" size="s" onClick={() => controlRef.current?.collapse(0)} />
        <Button label="Expand sidebar" size="s" onClick={() => controlRef.current?.expand(0)} />
      </Flex>
      <div style={{ height: 220, width: "100%" }}>
        <Splitter controlRef={controlRef}>
          <Splitter.Panel defaultSize={30} minSize={20} maxSize={50} collapsible>
            <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
              <Text block weight="bold">Sidebar</Text>
              <Text block size={4} color="muted">Use the arrow on the divider or the buttons above.</Text>
            </Flex>
          </Splitter.Panel>
          <Splitter.Panel>
            <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
              <Text block weight="bold">Main area</Text>
              <Text block size={4} color="muted">Takes all the space while the sidebar is collapsed.</Text>
            </Flex>
          </Splitter.Panel>
        </Splitter>
      </div>
    </Flex>
  );
}
