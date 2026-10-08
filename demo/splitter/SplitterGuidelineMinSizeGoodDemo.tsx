"use client";

import { Splitter, Text } from "altrone-ui";

export default function SplitterGuidelineMinSizeGoodDemo() {
  return (
    <div style={{ height: 140, width: "100%" }}>
      <Splitter>
        <Splitter.Panel defaultSize={30} minSize={20}>
          <Text block weight="bold" style={{ padding: 16 }}>Filters</Text>
        </Splitter.Panel>
        <Splitter.Panel minSize={30}>
          <Text block weight="bold" style={{ padding: 16 }}>Results</Text>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
