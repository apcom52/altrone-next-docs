import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import { createHeadingAnchor } from "@/lib/slugify";

function hastToText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(hastToText).join("");
  return "";
}

export const headingIdsPlugin: Plugin = () => (tree: any) => {
  const anchor = createHeadingAnchor();
  visit(tree, "element", (node: any) => {
    if (!["h2", "h3", "h4"].includes(node.tagName)) return;
    node.properties ??= {};
    node.properties.id = anchor(hastToText(node));
  });
};
