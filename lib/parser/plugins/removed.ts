import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

export const removedPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "textDirective", (node: any) => {
    if (node.name !== "removed") return;

    const data = node.data ?? (node.data = {});
    data.hName = "removed-text";
    data.hProperties = {};
  });
};
