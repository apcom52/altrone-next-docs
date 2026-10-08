"use client";

import { Children, isValidElement, useState } from "react";
import type { CSSProperties, ReactElement, ReactNode } from "react";
import { Button } from "altrone-ui";
import { Ruler, Type, MoveHorizontal, SquareRoundCorner, Layers, Blend } from "lucide-react";
import clsx from "clsx";
import { DOCS_ACCENT } from "@/lib/accent";
import { DocCard } from "./DocCard";
import s from "./cards.module.css";

const COPIED_MESSAGE: Record<string, string> = {
  en: "Variable name copied",
  ru: "Название переменной скопировано",
};

const MIN_CARDS_FOR_FILTERS = 6;

const COLOR_KINDS = ["fill", "text", "border"];

const ICONS: Record<string, ReactNode> = {
  font: <Type />,
  gap: <MoveHorizontal />,
  radius: <SquareRoundCorner />,
  shadow: <Layers />,
  blur: <Blend />,
};

function Dot({ theme, value, ring }: { theme: "light" | "dark"; value: string; ring: boolean }) {
  return (
    <span
      data-altrone-root="true"
      data-altrone-theme={theme}
      data-altrone-accent={DOCS_ACCENT}
      className={clsx(s.Dot, ring && s.Ring)}
      style={{ "--css-var-color": value } as CSSProperties}
    />
  );
}

const getType = (child: ReactElement<{ varType?: string }>) => child.props.varType ?? "";

export function CssVarsBlock({ children }: { children?: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  const cards = Children.toArray(children).filter(isValidElement) as ReactElement<{
    varType?: string;
  }>[];
  const types = Array.from(new Set(cards.map(getType).filter(Boolean)));

  const toggle = (type: string) =>
    setSelected((current) =>
      current.includes(type) ? current.filter((item) => item !== type) : [...current, type],
    );

  const visible = selected.length === 0 ? cards : cards.filter((card) => selected.includes(getType(card)));

  return (
    <div className={s.Block}>
      {cards.length > MIN_CARDS_FOR_FILTERS ? (
        <div className={s.Filters}>
          {types.map((type) => (
            <Button
              key={type}
              size="s"
              label={type}
              selected={selected.includes(type)}
              onClick={() => toggle(type)}
            />
          ))}
        </div>
      ) : null}
      <div className={s.Grid}>{visible}</div>
    </div>
  );
}

export function CssVarBlock({
  varName,
  varKind,
  varType,
  varColor,
  varLight,
  varDark,
  children,
}: {
  varName?: string;
  varKind?: string;
  varType?: string;
  varColor?: string;
  varLight?: string;
  varDark?: string;
  children?: ReactNode;
}) {
  const isColor = !!varKind && COLOR_KINDS.includes(varKind);
  const ring = varKind === "border";
  const indicator = isColor ? (
    <>
      <Dot theme="light" value={varLight || varColor || "transparent"} ring={ring} />
      <Dot theme="dark" value={varDark || varColor || "transparent"} ring={ring} />
    </>
  ) : (
    <span className={s.Icon}>{(varKind && ICONS[varKind]) ?? <Ruler />}</span>
  );

  return (
    <DocCard name={varName} indicator={indicator} caption={varType} copiedMessage={COPIED_MESSAGE}>
      {children}
    </DocCard>
  );
}
