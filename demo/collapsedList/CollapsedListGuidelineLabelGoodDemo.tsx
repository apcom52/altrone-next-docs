"use client";

import { CollapsedList, Text } from "altrone-ui";

const COMMENTS = ["Looks good to me", "Please add tests", "Approved", "Minor typo in the title", "Merged", "Thanks!"];

export default function CollapsedListGuidelineLabelGoodDemo() {
  return (
    <CollapsedList
      limit={2}
      gap="xs"
      style={{ width: "100%" }}
      expandButtonLabel={({ hiddenItems, expanded }) =>
        expanded ? "Show fewer comments" : `Show ${hiddenItems} more comments`
      }
    >
      {COMMENTS.map((comment) => (
        <Text key={comment} block size={4}>
          {comment}
        </Text>
      ))}
    </CollapsedList>
  );
}
