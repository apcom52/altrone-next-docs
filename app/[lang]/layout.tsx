import { readFile } from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { AltroneWrapper } from "@/app/AltroneWrapper";
import type { Navigation } from "@/lib/types";
import { LOCALES } from "@/lib/types";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!LOCALES.includes(lang as (typeof LOCALES)[number])) notFound();

  const navPath = path.join(
    process.cwd(),
    "content",
    lang,
    "navigation.json"
  );
  const nav: Navigation = JSON.parse(await readFile(navPath, "utf-8"));

  return <AltroneWrapper nav={nav}>{children}</AltroneWrapper>;
}
