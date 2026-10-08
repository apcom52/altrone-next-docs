"use client";

import { Flex, Splitter, Text } from "altrone-ui";

const FILES = ["index.tsx", "styles.css", "utils.ts", "types.ts"];

export default function SplitterThreePanelsDemo() {
  return (
    <div style={{ height: 260, width: "100%" }}>
      <Splitter>
        <Splitter.Panel defaultSize={20} minSize={15} maxSize={30}>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">Files</Text>
            {FILES.map((file) => (
              <Text key={file} block size={4}>{file}</Text>
            ))}
          </Flex>
        </Splitter.Panel>
        <Splitter.Panel defaultSize={55} minSize={30}>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">index.tsx</Text>
            <Text block code size={4}>export default function Page() {"{ … }"}</Text>
          </Flex>
        </Splitter.Panel>
        <Splitter.Panel minSize={15}>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">Problems</Text>
            <Text block size={4} color="danger">index.tsx:12 — Property 'label' is missing</Text>
          </Flex>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
