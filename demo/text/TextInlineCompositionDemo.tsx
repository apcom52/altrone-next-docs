"use client";

import { Text } from "altrone-ui";

export default function TextInlineCompositionDemo() {
  return (
    <Text block style={{ maxWidth: 460 }}>
      Press <Text kbd>Ctrl + S</Text> to save, or run <Text code>git commit</Text>{" "}
      in the terminal. Changes <Text deleted>will not</Text> be applied
      immediately — a <Text highlighted>review</Text> comes first.{" "}
      <Text href="#composition" color="muted">Learn more →</Text>
    </Text>
  );
}
