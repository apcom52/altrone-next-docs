"use client";

import type { ReactNode } from "react";
import { Calendar, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, CircleAlert, Delete, Eye, EyeOff, Grid3X3, HelpCircle, ImageOff, Minus, PanelLeftClose, PanelLeftOpen, Palette, Plus, RotateCw, Search, Trash2, Upload, X } from "lucide-react";
import { DocCard } from "./DocCard";
import s from "./cards.module.css";

const COPIED_MESSAGE: Record<string, string> = {
  en: "Prop name copied",
  ru: "Название пропа скопировано",
};

const ICONS: Record<string, ReactNode> = {
  Calendar: <Calendar />,
  Check: <Check />,
  CircleAlert: <CircleAlert />,
  Delete: <Delete />,
  X: <X />,
  ImageOff: <ImageOff />,
  HelpCircle: <HelpCircle />,
  Eye: <Eye />,
  EyeOff: <EyeOff />,
  Plus: <Plus />,
  Search: <Search />,
  Grid3X3: <Grid3X3 />,
  Palette: <Palette />,
  Upload: <Upload />,
  RotateCw: <RotateCw />,
  Trash2: <Trash2 />,
  Minus: <Minus />,
  ChevronDown: <ChevronDown />,
  ChevronUp: <ChevronUp />,
  ChevronLeft: <ChevronLeft />,
  ChevronRight: <ChevronRight />,
  ChevronsDown: <ChevronsDown />,
  ChevronsUp: <ChevronsUp />,
  ChevronsLeft: <ChevronsLeft />,
  ChevronsRight: <ChevronsRight />,
  PanelLeftOpen: <PanelLeftOpen />,
  PanelLeftClose: <PanelLeftClose />,
};

export function IconCardsBlock({ children }: { children?: ReactNode }) {
  return <div className={s.Grid}>{children}</div>;
}

export function IconCardBlock({
  propName,
  iconName,
  children,
}: {
  propName?: string;
  iconName?: string;
  children?: ReactNode;
}) {
  const indicator = <span className={s.Icon}>{(iconName && ICONS[iconName]) ?? null}</span>;

  return (
    <DocCard name={propName} indicator={indicator} copiedMessage={COPIED_MESSAGE}>
      {children}
    </DocCard>
  );
}
