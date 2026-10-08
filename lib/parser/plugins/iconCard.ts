import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function labelText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(labelText).join("");
  return "";
}

export const iconCardPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node: any) => {
    if (node.name === "icon-cards") {
      const data = node.data ?? (node.data = {});
      data.hName = "icon-cards-block";
      return;
    }

    if (node.name !== "icon-card") return;

    const attrs = node.attributes ?? {};
    let propName = "";
    if (node.children[0]?.data?.directiveLabel) {
      propName = labelText(node.children[0]).trim();
      node.children.shift();
    }

    const data = node.data ?? (node.data = {});
    data.hName = "icon-card-block";
    data.hProperties = {
      propName,
      iconName: attrs.icon ?? "",
    };
  });
};
