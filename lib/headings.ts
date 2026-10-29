import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type { Heading as MdastHeading } from "mdast";
import { createHeadingAnchor } from "./slugify";

export type Heading = {
  level: 2 | 3 | 4;
  text: string;
  id: string;
};

function nodeText(node: any): string {
  if (node.type === "text" || node.type === "inlineCode")
    return node.value ?? "";
  if (node.children) return (node.children as any[]).map(nodeText).join("");
  return "";
}

export function parseHeadings(markdown: string): Heading[] {
  const tree = unified().use(remarkParse).parse(markdown);
  const headings: Heading[] = [];
  const anchor = createHeadingAnchor();

  visit(tree, "heading", (node: MdastHeading) => {
    if (node.depth < 2 || node.depth > 4) return;
    const text = nodeText(node);
    headings.push({
      level: node.depth as 2 | 3 | 4,
      text,
      id: anchor(text),
    });
  });

  return headings;
}
