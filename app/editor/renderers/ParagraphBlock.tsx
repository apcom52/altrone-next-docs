import { Text } from "altrone-ui";
import type { RenderElementProps } from "slate-react";

export function ParagraphBlock({ attributes, children }: RenderElementProps) {
  return (
    <Text block size={4} {...(attributes as object)}>
      {children}
    </Text>
  );
}
