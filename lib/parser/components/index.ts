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
import { SpoilerBlock } from "./Spoiler";
import { ReleaseBlock, ReleaseList, RemovedText } from "./Release";
import { CssVarsBlock, CssVarBlock } from "./CssVar";
import { IconCardsBlock, IconCardBlock } from "./IconCard";
import { GoodBadBlock, GoodBadItem } from "./GoodBad";
import { RoadmapBlock, RoadmapItemBlock } from "./Roadmap";

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
  "spoiler-block": SpoilerBlock,
  "release-block": ReleaseBlock,
  "release-list": ReleaseList,
  "removed-text": RemovedText,
  "css-vars-block": CssVarsBlock,
  "css-var-block": CssVarBlock,
  "icon-cards-block": IconCardsBlock,
  "icon-card-block": IconCardBlock,
  "good-bad-block": GoodBadBlock,
  "good-bad-item": GoodBadItem,
  "roadmap-block": RoadmapBlock,
  "roadmap-item-block": RoadmapItemBlock,
};
