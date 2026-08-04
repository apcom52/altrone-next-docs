"use client";

import { SideNavigation } from "altrone-ui";
import type { Heading } from "@/lib/headings";
import type { ReactNode } from "react";

type HeadingNode = Heading & { children: HeadingNode[] };

function buildTree(headings: Heading[]): HeadingNode[] {
  const root: HeadingNode[] = [];
  const stack: HeadingNode[] = [];

  for (const h of headings) {
    const node: HeadingNode = { ...h, children: [] };

    while (stack.length > 0 && stack[stack.length - 1].level >= h.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }

  return root;
}

function renderTree(nodes: HeadingNode[]): ReactNode {
  return nodes.map((node) => (
    <SideNavigation.Item key={node.id} href={`#${node.id}`} label={node.text}>
      {node.children.length > 0 ? renderTree(node.children) : undefined}
    </SideNavigation.Item>
  ));
}

export function DocSideNav({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  const tree = buildTree(headings.filter((h) => h.id !== ""));

  return (
    <div className="doc-sidenav">
      <nav className="doc-sidenav-inner">
        <SideNavigation title="On this page">
          {renderTree(tree)}
        </SideNavigation>
      </nav>
    </div>
  );
}
