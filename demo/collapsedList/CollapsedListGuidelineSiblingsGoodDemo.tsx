"use client";

import { CollapsedList, Text } from "altrone-ui";

const FILES = ["report.pdf", "budget.xlsx", "notes.md", "logo.svg", "photo.jpg", "draft.docx"];

export default function CollapsedListGuidelineSiblingsGoodDemo() {
  return (
    <CollapsedList limit={3} gap="xs" style={{ width: "100%" }}>
      {FILES.map((file) => (
        <Text key={file} block size={4}>
          {file}
        </Text>
      ))}
    </CollapsedList>
  );
}
