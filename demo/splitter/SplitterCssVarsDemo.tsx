"use client";

import type { CSSProperties } from "react";
import { Flex, Splitter, Text } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function SplitterCssVarsDemo() {
  return (
    <div style={{ height: 160, width: "100%" }}>
      <Splitter
        style={vars({
          "--splitter-handle-color": "var(--accent-a6)",
          "--splitter-handle-hover-color": "var(--accent-a9)",
          "--splitter-handle-length": "56px",
        })}
      >
        <Splitter.Panel>
          <Flex style={{ padding: 16 }}>
            <Text block weight="bold">Left</Text>
          </Flex>
        </Splitter.Panel>
        <Splitter.Panel>
          <Flex style={{ padding: 16 }}>
            <Text block weight="bold">Right</Text>
          </Flex>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
