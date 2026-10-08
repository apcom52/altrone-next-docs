"use client";

import { CollapsedList, Flex, Text } from "altrone-ui";

const FILES = ["report.pdf", "budget.xlsx", "notes.md", "logo.svg", "photo.jpg", "draft.docx"];

export default function CollapsedListGuidelineSiblingsBadDemo() {
  return (
    <CollapsedList limit={3} gap="xs" style={{ width: "100%" }}>
      <Flex orientation="vertical" gap="xs">
        {FILES.map((file) => (
          <Text key={file} block size={4}>
            {file}
          </Text>
        ))}
      </Flex>
    </CollapsedList>
  );
}
