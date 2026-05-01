import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root, BlockContent } from "mdast";

const COLUMN_TYPES = ["col-2", "col-3"] as const;

export const columnsPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node) => {
    if (!COLUMN_TYPES.includes(node.name as (typeof COLUMN_TYPES)[number]))
      return;

    const cols = node.name === "col-2" ? 2 : 3;
    const data = node.data ?? (node.data = {});
    data.hName = "columns-block";
    data.hProperties = { cols };

    const groups: BlockContent[][] = [];
    let current: BlockContent[] = [];

    for (const child of node.children) {
      if (child.type === "thematicBreak") {
        groups.push(current);
        current = [];
      } else {
        current.push(child as BlockContent);
      }
    }
    groups.push(current);

    node.children = groups.map((group) => ({
      type: "blockquote",
      data: { hName: "col-item" },
      children: group,
    }));
  });
};
