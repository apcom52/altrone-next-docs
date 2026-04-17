import { Text } from "altrone-ui";
import type { RenderElementProps } from "slate-react";

export function LeadBlock({ attributes, children }: RenderElementProps) {
  return (
    <Text block size={5} {...(attributes as object)}>
      {children}
    </Text>
  );
}
