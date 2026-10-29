import { slugify } from './slugify'

export function createPropAnchor() {
  const counts = new Map<string, number>()
  return (section: string, name: string) => {
    const base = `prop-${slugify(section)}-${slugify(name)}`
    const count = (counts.get(base) ?? 0) + 1
    counts.set(base, count)
    return count === 1 ? base : `${base}-${count}`
  }
}
