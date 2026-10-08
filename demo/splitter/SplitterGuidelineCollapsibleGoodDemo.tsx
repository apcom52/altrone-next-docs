"use client";

import { Splitter, Text } from "altrone-ui";

export default function SplitterGuidelineCollapsibleGoodDemo() {
  return (
    <div style={{ height: 140, width: "100%" }}>
      <Splitter>
        <Splitter.Panel defaultSize={30} minSize={20} collapsible>
          <Text block weight="bold" style={{ padding: 16 }}>Properties</Text>
        </Splitter.Panel>
        <Splitter.Panel>
          <Text block weight="bold" style={{ padding: 16 }}>Canvas</Text>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
