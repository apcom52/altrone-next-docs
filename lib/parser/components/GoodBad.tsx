"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Check, X } from "lucide-react";
import clsx from "clsx";
import s from "./goodBad.module.css";

const LABELS: Record<string, { good: string; bad: string }> = {
  en: { good: "Good", bad: "Bad" },
  ru: { good: "Хорошо", bad: "Плохо" },
};

export function GoodBadBlock({ columns, children }: { columns?: string; children?: ReactNode }) {
  return <div className={clsx(s.Columns, { [s.Single]: columns === "1" })}>{children}</div>;
}

export function GoodBadItem({
  verdict,
  summary,
  children,
}: {
  verdict?: string;
  summary?: string;
  children?: ReactNode;
}) {
  const locale = usePathname().split("/")[1] ?? "en";
  const isGood = verdict === "good";
  const labels = LABELS[locale] ?? LABELS.en;

  return (
    <div className={s.Column}>
      <div className={s.Header}>
        <span className={clsx(s.Badge, isGood ? s.Good : s.Bad)}>{isGood ? <Check /> : <X />}</span>
        <span className={s.Label}>{summary || (isGood ? labels.good : labels.bad)}</span>
      </div>
      <div className={s.Content}>{children}</div>
    </div>
  );
}
