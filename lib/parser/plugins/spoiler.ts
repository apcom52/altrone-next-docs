import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function labelText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(labelText).join("");
  return "";
}

export const spoilerPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node: any) => {
    if (node.name !== "spoiler") return;

    let summary = "";
    if (node.children[0]?.data?.directiveLabel) {
      summary = labelText(node.children[0]);
      node.children.shift();
    }

    const data = node.data ?? (node.data = {});
    data.hName = "spoiler-block";
    data.hProperties = { summary };
  });
};
