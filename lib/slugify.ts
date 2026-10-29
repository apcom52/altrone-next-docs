export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export function createHeadingAnchor() {
  const used = new Set<string>();
  return (text: string) => {
    const base = slugify(text);
    let id = base;
    let suffix = 1;
    while (used.has(id)) id = `${base}-${++suffix}`;
    used.add(id);
    return id;
  };
}
