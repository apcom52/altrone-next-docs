"use client";

import { Text } from "altrone-ui";

export default function TextGuidelineDecorationGoodDemo() {
  return (
    <Text block style={{ maxWidth: 340 }}>
      Run <Text code>npm run build</Text> before you deploy, then press{" "}
      <Text kbd>Ctrl + C</Text> to stop the server.
    </Text>
  );
}
