import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function labelText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(labelText).join("");
  return "";
}

export const cssVarPlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node: any) => {
    if (node.name === "css-vars") {
      const data = node.data ?? (node.data = {});
      data.hName = "css-vars-block";
      return;
    }

    if (node.name !== "css-var") return;

    const attrs = node.attributes ?? {};
    let varName = "";
    if (node.children[0]?.data?.directiveLabel) {
      varName = labelText(node.children[0]).trim();
      node.children.shift();
    }

    const data = node.data ?? (node.data = {});
    data.hName = "css-var-block";
    data.hProperties = {
      varName,
      varKind: attrs.kind ?? "",
      varType: attrs.type ?? "",
      varColor: attrs.color ?? "",
      varLight: attrs.light ?? "",
      varDark: attrs.dark ?? "",
    };
  });
};
