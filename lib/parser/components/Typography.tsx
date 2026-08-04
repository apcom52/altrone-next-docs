"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { Text, Divider } from "altrone-ui";
import s from "./typography.module.css";

export const H1 = ({ children }: { children?: ReactNode }) => (
  <Text size={7} weight="bold" asChild className={s.h1}>
    <h1>{children}</h1>
  </Text>
);

export const H2 = ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <Text size={6} weight="bold" asChild className={s.h2}>
    <h2 {...props}>{children}</h2>
  </Text>
);

export const H3 = ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <Text size={5} weight="medium" asChild className={s.h3}>
    <h3 {...props}>{children}</h3>
  </Text>
);

export const H4 = ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <Text size={5} weight="medium" asChild>
    <h4 {...props}>{children}</h4>
  </Text>
);

export const P = ({ children }: { children?: ReactNode }) => (
  <Text block className={s.paragraph}>
    {children}
  </Text>
);

export const UL = ({ children }: { children?: ReactNode }) => (
  <Text list="marked">{children}</Text>
);

export const OL = ({ children }: { children?: ReactNode }) => (
  <Text list="numeric">{children}</Text>
);

export const LI = ({ children }: { children?: ReactNode }) => (
  <Text item>{children}</Text>
);

export const Strong = ({ children }: { children?: ReactNode }) => (
  <Text weight="bold">{children}</Text>
);

export const Em = ({ children }: { children?: ReactNode }) => (
  <Text italic>{children}</Text>
);

export const InlineCode = ({ children }: { children?: ReactNode }) => (
  <Text code>{children}</Text>
);

export const A = ({
  children,
  href,
}: {
  children?: ReactNode;
  href?: string;
}) => <Text href={href ?? "#"}>{children}</Text>;

export const HR = () => <Divider />;
