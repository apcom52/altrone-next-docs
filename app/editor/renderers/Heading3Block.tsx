import { Text } from "altrone-ui";
import type { RenderElementProps } from "slate-react";

export function Heading3Block({ attributes, children }: RenderElementProps) {
  return (
    <Text
      block
      size={5}
      weight="bold"
      {...(attributes as object)}
      style={{ marginTop: 24 }}
    >
      {children}
    </Text>
  );
}
