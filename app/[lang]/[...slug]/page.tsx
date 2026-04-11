import { readFile } from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { SlateRenderer } from "@/components/SlateRenderer";
import type { PageData } from "@/lib/types";

export default async function ContentPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;

  const filePath =
    path.join(process.cwd(), "content", lang, ...slug) + ".json";

  let page: PageData;
  try {
    const raw = await readFile(filePath, "utf-8");
    page = JSON.parse(raw);
  } catch {
    notFound();
  }

  return (
    <article className="slate-article">
      <SlateRenderer document={page.document} />
    </article>
  );
}
