import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function labelText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(labelText).join("");
  return "";
}

export const propPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node: any) => {
    if (node.name !== "prop") return;

    const data = node.data ?? (node.data = {});
    const attrs = node.attributes ?? {};

    let rawName = "";
    if (node.children[0]?.data?.directiveLabel) {
      rawName = labelText(node.children[0]);
      node.children.shift();
    }

    const required = rawName.endsWith("*");
    const name = required ? rawName.slice(0, -1).trim() : rawName.trim();

    data.hName = "prop-block";
    data.hProperties = {
      name,
      required,
      propType: attrs.type ?? "",
      propDefault: attrs.default ?? "",
      version: attrs.version ?? "",
      deprecated: attrs.deprecated === "true",
    };
  });
};
