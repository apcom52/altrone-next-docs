"use client";

import { SideNavigation } from "altrone-ui";
import type { Heading } from "@/lib/headings";
import type { ReactNode } from "react";
import s from "./DocSideNav.module.css";

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
    <SideNavigation.Link key={node.id} href={`#${node.id}`} label={node.text}>
      {node.children.length > 0 ? renderTree(node.children) : undefined}
    </SideNavigation.Link>
  ));
}

const TITLE: Record<string, string> = {
  en: "On this page",
  ru: "Содержание",
};

export function DocSideNav({ headings, locale }: { headings: Heading[]; locale: string }) {
  const tree = buildTree(headings.filter((h) => h.id !== ""));
  if (tree.length === 0) return null;

  return (
    <div className={s.sticky}>
      <SideNavigation title={TITLE[locale] ?? TITLE.en}>{renderTree(tree)}</SideNavigation>
    </div>
  );
}
