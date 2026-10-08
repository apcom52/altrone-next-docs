"use client";

import { CollapsedList, Text } from "altrone-ui";

const COMMENTS = ["Looks good to me", "Please add tests", "Approved", "Minor typo in the title", "Merged", "Thanks!"];

export default function CollapsedListGuidelineLabelBadDemo() {
  return (
    <CollapsedList limit={2} gap="xs" style={{ width: "100%" }} expandButtonLabel="More">
      {COMMENTS.map((comment) => (
        <Text key={comment} block size={4}>
          {comment}
        </Text>
      ))}
    </CollapsedList>
  );
}
