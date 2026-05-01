import type { ReactNode } from "react";
import s from "./columns.module.css";

export function ColumnsBlock({
  cols = 2,
  children,
}: {
  cols?: number | string;
  children?: ReactNode;
}) {
  const colClass = Number(cols) === 3 ? s.col3 : s.col2;
  return <div className={`${s.columns} ${colClass}`}>{children}</div>;
}

export function ColumnItem({ children }: { children?: ReactNode }) {
  return <div className={s.colItem}>{children}</div>;
}
