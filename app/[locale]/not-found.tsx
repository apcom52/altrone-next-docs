"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Result } from "altrone-ui";
import { PageAside } from "../AsideContext";

const COPY: Record<string, { title: string; description: string; action: string }> = {
  en: { title: "404", description: "This page doesn't exist.", action: "Go home" },
  ru: { title: "404", description: "Такой страницы не существует.", action: "На главную" },
};

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] ?? "en";
  const copy = COPY[locale] ?? COPY.en;

  return (
    <>
      <PageAside>{null}</PageAside>
      <Result
        status="error"
        title={copy.title}
        description={copy.description}
        actions={
          <Button asChild label={copy.action}>
            <Link href={`/${locale}`} />
          </Button>
        }
      />
    </>
  );
}
