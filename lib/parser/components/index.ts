import type { ElementType } from "react";
import {
  H1,
  H2,
  H3,
  H4,
  P,
  UL,
  OL,
  LI,
  Strong,
  Em,
  InlineCode,
  A,
  HR,
} from "./Typography";
import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";
import { ColumnsBlock, ColumnItem } from "./Columns";
import { Playground } from "./Playground";
import { PropBlock } from "./PropBlock";

export const components: Record<string, ElementType> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  strong: Strong,
  em: Em,
  code: InlineCode,
  a: A,
  hr: HR,
  "callout-block": Callout,
  "code-block": CodeBlock,
  "columns-block": ColumnsBlock,
  "col-item": ColumnItem,
  "playground-block": Playground,
  "prop-block": PropBlock,
};
