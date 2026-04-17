import { writeFile } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import type { Navigation } from "@/lib/types";

export async function PUT(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return Response.json({ error: "Read-only" }, { status: 403 });
  }

  const { en, ru }: { en: Navigation; ru: Navigation } = await request.json();

  await Promise.all([
    writeFile(
      path.join(process.cwd(), "content", "en", "navigation.json"),
      JSON.stringify(en, null, 2),
      "utf-8"
    ),
    writeFile(
      path.join(process.cwd(), "content", "ru", "navigation.json"),
      JSON.stringify(ru, null, 2),
      "utf-8"
    ),
  ]);

  revalidatePath("/", "layout");

  return Response.json({ ok: true });
}
