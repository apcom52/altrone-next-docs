"use client";

import { Text } from "altrone-ui";

export default function TextGuidelineDecorationBadDemo() {
  return (
    <Text block style={{ maxWidth: 340 }}>
      <Text highlighted italic underline>Run</Text>{" "}
      <Text code highlighted>npm run build</Text>{" "}
      <Text weight="bold" italic color="danger">before you deploy</Text>, then{" "}
      <Text underline highlighted>press</Text> <Text kbd>Ctrl + C</Text>.
    </Text>
  );
}
