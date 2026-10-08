"use client";

import type { ComponentType, ReactNode, SVGProps } from "react";
import { usePathname } from "next/navigation";
import { Box, Flex, Text } from "altrone-ui";
import * as Logos from "altrone-ui/logos";
import { CircleDashed } from "lucide-react";
import s from "./roadmap.module.css";

const STATUS_LABEL: Record<string, Record<string, string>> = {
  en: { planned: "Planned", done: "Done" },
  ru: { planned: "Планируется", done: "Выполнено" },
};

export function RoadmapBlock({ children }: { children?: ReactNode }) {
  return <div className={s.Grid}>{children}</div>;
}

export function RoadmapItemBlock({
  title,
  component,
  status,
  version,
  children,
}: {
  title?: string;
  component?: string;
  status?: string;
  version?: string;
  children?: ReactNode;
}) {
  const locale = usePathname().split("/")[1] ?? "en";
  const done = status === "done";
  const names = (component ?? "").split(",").map((name) => name.trim()).filter(Boolean);
  const Logo = names[0]
    ? (Logos[names[0] as keyof typeof Logos] as ComponentType<SVGProps<SVGSVGElement>> | undefined)
    : undefined;
  const statusLabel = (STATUS_LABEL[locale] ?? STATUS_LABEL.en)[done ? "done" : "planned"];

  return (
    <Box
      shape="rounded"
      material="plate"
      radius={28}
      padding={16}
      className={done ? `${s.Card} ${s.Done}` : s.Card}
    >
      <Flex gap="l" align="start">
        <span className={s.Icon}>
          {Logo ? <Logo width={48} height={48} /> : <CircleDashed size={28} />}
        </span>
        <Flex orientation="vertical" gap="mini" className={s.Body}>
          <Text size={4} weight="bold">{title}</Text>
          {children ? <div className={s.Description}>{children}</div> : null}
          <Text size={3} className={s.Status}>
            {[statusLabel, done ? version : "", names.join(", ")].filter(Boolean).join(" · ")}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
