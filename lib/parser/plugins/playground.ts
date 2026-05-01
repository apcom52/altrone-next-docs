import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

export const playgroundPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "leafDirective", (node: any) => {
    if (node.name !== "playground") return;

    const data = node.data ?? (node.data = {});
    const attrs = node.attributes ?? {};

    data.hName = "playground-block";
    data.hProperties = { src: attrs.src ?? "", caption: attrs.caption ?? "" };
  });
};
