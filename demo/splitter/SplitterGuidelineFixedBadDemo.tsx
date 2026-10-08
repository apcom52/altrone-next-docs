"use client";

import { Splitter, Text } from "altrone-ui";

export default function SplitterGuidelineFixedBadDemo() {
  return (
    <div style={{ height: 140, width: "100%" }}>
      <Splitter>
        <Splitter.Panel defaultSize={30} resizable={false}>
          <Text block weight="bold" style={{ padding: 16 }}>Summary</Text>
        </Splitter.Panel>
        <Splitter.Panel resizable={false}>
          <Text block weight="bold" style={{ padding: 16 }}>Details</Text>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
