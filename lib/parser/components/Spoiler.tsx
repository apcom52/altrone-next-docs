"use client";

import type { ReactNode } from "react";
import { Spoiler } from "altrone-ui";

export function SpoilerBlock({
  summary,
  children,
}: {
  summary?: string;
  children?: ReactNode;
}) {
  return <Spoiler title={summary}>{children}</Spoiler>;
}
