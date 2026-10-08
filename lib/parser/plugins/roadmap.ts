import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function labelText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(labelText).join("");
  return "";
}

export const roadmapPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node: any) => {
    if (node.name === "roadmap") {
      const data = node.data ?? (node.data = {});
      data.hName = "roadmap-block";
      return;
    }

    if (node.name !== "roadmap-item") return;

    let title = "";
    if (node.children[0]?.data?.directiveLabel) {
      title = labelText(node.children[0]).trim();
      node.children.shift();
    }

    const attrs = node.attributes ?? {};
    const data = node.data ?? (node.data = {});
    data.hName = "roadmap-item-block";
    data.hProperties = {
      title,
      component: attrs.component ?? "",
      status: attrs.status ?? "planned",
      version: attrs.version ?? "",
    };
  });
};
