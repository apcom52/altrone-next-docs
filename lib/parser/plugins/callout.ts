import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

const CALLOUT_TYPES = ["message", "warning", "danger", "tip"] as const;

export const calloutPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node) => {
    if (!CALLOUT_TYPES.includes(node.name)) return;

    const data = node.data ?? (node.data = {});
    const attrs = node.attributes ?? {};

    data.hName = "callout-block";
    data.hProperties = {
      ...attrs,
      type: node.name,
      compact: attrs.compact === "true",
    };

    if (node.children[0]?.data?.directiveLabel) {
      node.children.shift();
    }
  });
};
