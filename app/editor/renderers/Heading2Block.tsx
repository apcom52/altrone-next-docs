import { Text } from "altrone-ui";
import type { RenderElementProps } from "slate-react";

export function Heading2Block({ attributes, children }: RenderElementProps) {
  return (
    <Text
      block
      size={6}
      weight="bold"
      {...(attributes as object)}
      style={{ marginTop: 28 }}
    >
      {children}
    </Text>
  );
}
