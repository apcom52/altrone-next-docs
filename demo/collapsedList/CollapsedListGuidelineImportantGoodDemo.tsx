"use client";

import { useState } from "react";
import { Checkbox, CollapsedList, Flex, Text } from "altrone-ui";

const EXTRAS = ["Newsletter", "Product updates", "Event invitations", "Partner offers"];

function Option({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onChange={setChecked}>
      {label}
    </Checkbox>
  );
}

export default function CollapsedListGuidelineImportantGoodDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Option label="I accept the terms of service" />
      <Text block size={3} color="muted">
        Optional
      </Text>
      <CollapsedList limit={2} gap="xs">
        {EXTRAS.map((extra) => (
          <Option key={extra} label={extra} />
        ))}
      </CollapsedList>
    </Flex>
  );
}
