"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { showToast } from "altrone-ui";
import s from "./cards.module.css";

export function DocCard({
  name,
  indicator,
  caption,
  copiedMessage,
  children,
}: {
  name?: string;
  indicator: ReactNode;
  caption?: string;
  copiedMessage: Record<string, string>;
  children?: ReactNode;
}) {
  const locale = usePathname().split("/")[1] ?? "en";

  const copyName = async () => {
    if (!name) return;
    try {
      await navigator.clipboard.writeText(name);
      showToast(copiedMessage[locale] ?? copiedMessage.en, { variant: "success" });
    } catch {
      showToast(name);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      copyName();
    }
  };

  return (
    <div
      className={s.Card}
      role="button"
      tabIndex={0}
      aria-label={name}
      onClick={copyName}
      onKeyDown={handleKeyDown}
    >
      <div className={s.Indicator}>{indicator}</div>
      <div className={s.Body}>
        <div className={s.Name}>{name}</div>
        <div className={s.Description}>{children}</div>
        {caption ? <div className={s.Type}>{caption}</div> : null}
      </div>
    </div>
  );
}
