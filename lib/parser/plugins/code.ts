import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "mdast";

function parseMeta(meta: string): Record<string, string> {
  const result: Record<string, string> = {};
  const re = /(\w+)="([^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(meta)) !== null) {
    result[m[1]] = m[2];
  }
  return result;
}

export const codePlugin: Plugin<[], Root> = () => (tree) => {
  visit(tree, "code", (node) => {
    const data = node.data ?? (node.data = {});
    data.hName = "code-block";
    data.hProperties = {
      lang: node.lang ?? "",
      code: node.value,
      ...(node.meta ? parseMeta(node.meta) : {}),
    };
  });
};
