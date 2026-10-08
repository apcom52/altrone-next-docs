import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function labelText(node: any): string {
  if (node.type === "text") return node.value ?? "";
  if (node.children) return (node.children as any[]).map(labelText).join("");
  return "";
}

export const releasePlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "containerDirective", (node: any) => {
    if (node.name !== "release") return;

    let summary = "";
    if (node.children[0]?.data?.directiveLabel) {
      summary = labelText(node.children[0]);
      node.children.shift();
    }

    const attrs = node.attributes ?? {};
    const data = node.data ?? (node.data = {});
    data.hName = "release-block";
    data.hProperties = {
      summary,
      icon: attrs.icon ?? "",
      image: attrs.image ?? "",
      logo: attrs.logo ?? "",
      componentName: attrs.name ?? "",
      open: attrs.open === "true",
    };
  });

  visit(tree, (node: any) => {
    if (!node.children || node.data?.hName === "release-list") return;

    const grouped: any[] = [];
    for (const child of node.children) {
      const isRelease = child.data?.hName === "release-block";
      const last = grouped[grouped.length - 1];
      if (isRelease && last?.data?.hName === "release-list") {
        last.children.push(child);
      } else if (isRelease) {
        grouped.push({
          type: "containerDirective",
          name: "release-list",
          data: { hName: "release-list" },
          children: [child],
        });
      } else {
        grouped.push(child);
      }
    }
    node.children = grouped;
  });
};
