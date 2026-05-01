"use client";

import type { ReactNode } from "react";
import { Message } from "altrone-ui";
import { DynamicIcon } from "lucide-react/dynamic";

const SEVERITY_MAP: Record<
  string,
  "primary" | "success" | "warning" | "danger"
> = {
  note: "primary",
  tip: "success",
  warning: "warning",
  danger: "danger",
};

const LABEL_MAP: Record<string, string> = {
  note: "Note",
  tip: "Tip",
  warning: "Warning",
  danger: "Danger",
};

export function Callout({
  type = "note",
  title,
  compact = false,
  icon,
  children,
}: {
  type?: string;
  title?: string;
  compact?: boolean;
  icon?: string;
  children?: ReactNode;
}) {
  return (
    <Message
      severity={SEVERITY_MAP[type] ?? "primary"}
      header={title}
      icon={icon ? <DynamicIcon name={icon} /> : null}
      compact={compact}
    >
      {children}
    </Message>
  );
}
