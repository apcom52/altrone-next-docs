"use client";

import type { ComponentType, ReactNode, SVGProps } from "react";
import { Flex, Spoiler } from "altrone-ui";
import { Box } from "lucide-react";
import * as Logos from "altrone-ui/logos";
import s from "./release.module.css";

export function ReleaseBlock({
  summary,
  icon,
  image,
  logo,
  componentName,
  open,
  children,
}: {
  summary?: string;
  icon?: string;
  image?: string;
  logo?: string;
  componentName?: string;
  open?: boolean | string;
  children?: ReactNode;
}) {
  const Logo = logo
    ? (Logos[logo as keyof typeof Logos] as ComponentType<SVGProps<SVGSVGElement>> | undefined)
    : undefined;

  return (
    <Spoiler
      title={
        <span className={s.title}>
          {icon ? <img src={icon} alt="" width={32} height={32} className={s.icon} /> : null}
          {summary}
        </span>
      }
      defaultOpen={open === true || open === "true"}
    >
      <div className={s.release}>
        <div className={s.component}>
          {image ? (
            <img src={image} alt="" height={72} className={s.image} />
          ) : Logo ? (
            <div className={s.badge}>
              <Logo width={72} height={72} />
            </div>
          ) : (
            <div className={s.placeholder}>
              <Box size={32} />
            </div>
          )}
          <div className={s.name}>{componentName}</div>
        </div>
        <div className={s.changes}>{children}</div>
      </div>
    </Spoiler>
  );
}

export function ReleaseList({ children }: { children?: ReactNode }) {
  return (
    <Flex orientation="vertical" gap="none">
      {children}
    </Flex>
  );
}

export function RemovedText({ children }: { children?: ReactNode }) {
  return <span className={s.removed}>{children}</span>;
}
