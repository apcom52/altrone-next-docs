"use client";

import { CollapsedList, Text } from "altrone-ui";

const CHANGELOG = [
  "3.5.0 — Added the CollapsedList component",
  "3.4.2 — Fixed the Drawer animation on iOS",
  "3.4.1 — Improved performance of virtual lists",
  "3.4.0 — New DataTable component with sorting",
  "3.3.5 — Updated icons from lucide-react",
  "3.3.4 — Fixed a focus bug in Modal",
  "3.3.3 — Improved keyboard support in Dropdown",
  "3.3.2 — Added new sizes for TextInput",
  "3.3.0 — Dark theme support",
];

export default function CollapsedListOneWayDemo() {
  return (
    <CollapsedList
      limit={3}
      gap="xs"
      hideExpandButtonAfterUsage
      style={{ width: "100%", maxWidth: 480 }}
    >
      {CHANGELOG.map((entry) => (
        <Text key={entry} block size={3} color="muted">
          {entry}
        </Text>
      ))}
    </CollapsedList>
  );
}
