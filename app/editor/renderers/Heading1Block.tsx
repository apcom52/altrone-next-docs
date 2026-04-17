import { Text } from "altrone-ui";
import type { RenderElementProps } from "slate-react";

export function Heading1Block({ attributes, children }: RenderElementProps) {
  return (
    <Text
      block
      size={7}
      weight="bold"
      {...(attributes as object)}
      style={{ marginTop: 36 }}
    >
      {children}
    </Text>
  );
}
