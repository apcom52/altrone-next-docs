import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function labelText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(labelText).join("");
  return "";
}

export const goodBadPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node: any) => {
    if (node.name === "good-bad") {
      const data = node.data ?? (node.data = {});
      data.hName = "good-bad-block";
      return;
    }

    if (node.name !== "good" && node.name !== "bad") return;

    let summary = "";
    if (node.children[0]?.data?.directiveLabel) {
      summary = labelText(node.children[0]).trim();
      node.children.shift();
    }

    const data = node.data ?? (node.data = {});
    data.hName = "good-bad-item";
    data.hProperties = { verdict: node.name, summary };
  });
};
