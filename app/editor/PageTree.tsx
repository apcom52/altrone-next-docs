"use client";

import { useState, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Text, Loading } from "altrone-ui";
import {
  GripVertical,
  ChevronRight,
  ChevronDown,
  FileText,
  Folder,
  FolderOpen,
  Plus,
} from "lucide-react";
import type {
  Navigation,
  NavItem,
  NavPage,
  NavPageItem,
  NavFlatGroupItem,
  NavNestedGroupItem,
  NavSubGroup,
} from "@/lib/types";
import s from "./styles.module.css";

// ─── Container / Item ID helpers ─────────────────────────────────────────────

const ROOT_CONTAINER = "root";
const gCont = (s: string) => `g:${s}`;
const ngCont = (s: string) => `ng:${s}`;
const sgCont = (ng: string, sg: string) => `sg:${ng}:${sg}`;

const rootId = (s: string) => `ri:${s}`;
const gPageId = (g: string, p: string) => `gp:${g}:${p}`;
const sgId = (ng: string, sg: string) => `sg:${ng}:${sg}`;
const sgPageId = (ng: string, sg: string, p: string) => `sgp:${ng}:${sg}:${p}`;

// ─── Container type helpers ───────────────────────────────────────────────────

function isPageContainer(id: string) {
  return id === ROOT_CONTAINER || id.startsWith("g:") || id.startsWith("sg:");
}
function isSubgroupContainer(id: string) {
  return id.startsWith("ng:");
}

// ─── syncNavStructure ─────────────────────────────────────────────────────────
// Rebuilds ruNav to match the structure of newEnNav, preserving ru titles.

function syncNavStructure(newEnNav: Navigation, ruNav: Navigation): Navigation {
  const ruMap = new Map(ruNav.items.map((it) => [it.slug, it]));

  const items = newEnNav.items.map((enItem): NavItem => {
    const ruItem = ruMap.get(enItem.slug);

    if (enItem.type === "page") {
      return { ...enItem, title: (ruItem as NavPageItem | undefined)?.title ?? enItem.title };
    }

    if (enItem.type === "group") {
      const ruGroup = ruItem as NavFlatGroupItem | undefined;
      const ruPageMap = new Map((ruGroup?.pages ?? []).map((p) => [p.slug, p]));
      return {
        ...enItem,
        title: ruGroup?.title ?? enItem.title,
        pages: enItem.pages.map((enPage) => ({
          ...enPage,
          title: ruPageMap.get(enPage.slug)?.title ?? enPage.title,
        })),
      };
    }

    if (enItem.type === "nested-group") {
      const ruNg = ruItem as NavNestedGroupItem | undefined;
      const ruGroupMap = new Map((ruNg?.groups ?? []).map((g) => [g.slug, g]));
      return {
        ...enItem,
        title: ruNg?.title ?? enItem.title,
        groups: enItem.groups.map((enSg) => {
          const ruSg = ruGroupMap.get(enSg.slug);
          const ruPageMap = new Map((ruSg?.pages ?? []).map((p) => [p.slug, p]));
          return {
            ...enSg,
            title: ruSg?.title ?? enSg.title,
            pages: enSg.pages.map((enPage) => ({
              ...enPage,
              title: ruPageMap.get(enPage.slug)?.title ?? enPage.title,
            })),
          };
        }),
      };
    }

    return enItem;
  });

  return { items };
}

// ─── Nav mutation helpers ─────────────────────────────────────────────────────

function reorderInContainer(nav: Navigation, cid: string, from: number, to: number): Navigation {
  if (cid === ROOT_CONTAINER)
    return { ...nav, items: arrayMove([...nav.items], from, to) };

  if (cid.startsWith("g:")) {
    const gs = cid.slice(2);
    return {
      ...nav,
      items: nav.items.map((it) =>
        it.type === "group" && it.slug === gs
          ? { ...it, pages: arrayMove([...it.pages], from, to) }
          : it
      ),
    };
  }

  if (cid.startsWith("ng:")) {
    const ngs = cid.slice(3);
    return {
      ...nav,
      items: nav.items.map((it) =>
        it.type === "nested-group" && it.slug === ngs
          ? { ...it, groups: arrayMove([...it.groups], from, to) }
          : it
      ),
    };
  }

  if (cid.startsWith("sg:")) {
    const [ngs, sgs] = cid.slice(3).split(":");
    return {
      ...nav,
      items: nav.items.map((it) =>
        it.type === "nested-group" && it.slug === ngs
          ? {
              ...it,
              groups: it.groups.map((g) =>
                g.slug === sgs ? { ...g, pages: arrayMove([...g.pages], from, to) } : g
              ),
            }
          : it
      ),
    };
  }

  return nav;
}

type AnyItem = NavItem | NavPage | NavSubGroup;

function extractFromContainer(
  nav: Navigation,
  cid: string,
  index: number
): { nav: Navigation; item: AnyItem } {
  if (cid === ROOT_CONTAINER) {
    const item = nav.items[index];
    return { nav: { ...nav, items: nav.items.filter((_, i) => i !== index) }, item };
  }

  if (cid.startsWith("g:")) {
    const gs = cid.slice(2);
    let item!: NavPage;
    const items = nav.items.map((it) => {
      if (it.type === "group" && it.slug === gs) {
        item = it.pages[index];
        return { ...it, pages: it.pages.filter((_, i) => i !== index) };
      }
      return it;
    });
    return { nav: { ...nav, items }, item };
  }

  if (cid.startsWith("ng:")) {
    const ngs = cid.slice(3);
    let item!: NavSubGroup;
    const items = nav.items.map((it) => {
      if (it.type === "nested-group" && it.slug === ngs) {
        item = it.groups[index];
        return { ...it, groups: it.groups.filter((_, i) => i !== index) };
      }
      return it;
    });
    return { nav: { ...nav, items }, item };
  }

  if (cid.startsWith("sg:")) {
    const [ngs, sgs] = cid.slice(3).split(":");
    let item!: NavPage;
    const items = nav.items.map((it) => {
      if (it.type === "nested-group" && it.slug === ngs) {
        return {
          ...it,
          groups: it.groups.map((g) => {
            if (g.slug === sgs) {
              item = g.pages[index];
              return { ...g, pages: g.pages.filter((_, i) => i !== index) };
            }
            return g;
          }),
        };
      }
      return it;
    });
    return { nav: { ...nav, items }, item };
  }

  return { nav, item: nav.items[0] };
}

function insertIntoContainer(
  nav: Navigation,
  cid: string,
  raw: AnyItem,
  index: number
): Navigation {
  if (cid === ROOT_CONTAINER) {
    const navItem = "type" in raw ? raw : ({ ...raw, type: "page" } as NavPageItem);
    const items = [...nav.items];
    items.splice(index, 0, navItem as NavItem);
    return { ...nav, items };
  }

  if (cid.startsWith("g:")) {
    const gs = cid.slice(2);
    const page: NavPage = { slug: (raw as any).slug, title: (raw as any).title, icon: (raw as any).icon };
    return {
      ...nav,
      items: nav.items.map((it) => {
        if (it.type === "group" && it.slug === gs) {
          const pages = [...it.pages];
          pages.splice(index, 0, page);
          return { ...it, pages };
        }
        return it;
      }),
    };
  }

  if (cid.startsWith("ng:")) {
    const ngs = cid.slice(3);
    return {
      ...nav,
      items: nav.items.map((it) => {
        if (it.type === "nested-group" && it.slug === ngs) {
          const groups = [...it.groups];
          groups.splice(index, 0, raw as NavSubGroup);
          return { ...it, groups };
        }
        return it;
      }),
    };
  }

  if (cid.startsWith("sg:")) {
    const [ngs, sgs] = cid.slice(3).split(":");
    const page: NavPage = { slug: (raw as any).slug, title: (raw as any).title, icon: (raw as any).icon };
    return {
      ...nav,
      items: nav.items.map((it) => {
        if (it.type === "nested-group" && it.slug === ngs) {
          return {
            ...it,
            groups: it.groups.map((g) => {
              if (g.slug === sgs) {
                const pages = [...g.pages];
                pages.splice(index, 0, page);
                return { ...g, pages };
              }
              return g;
            }),
          };
        }
        return it;
      }),
    };
  }

  return nav;
}

// ─── SortableRow ──────────────────────────────────────────────────────────────

interface RowProps {
  depth: number;
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
  onAdd?: () => void;
  addLabel?: string;
  dragHandleListeners?: Record<string, unknown>;
  isDragging?: boolean;
}

function Row({
  depth,
  icon,
  label,
  selected,
  expandable,
  expanded,
  onToggle,
  onClick,
  onAdd,
  addLabel = "Add",
  dragHandleListeners,
  isDragging,
}: RowProps) {
  return (
    <div
      className={[s.row, selected && s.active, isDragging && s.dragging, "group"].filter(Boolean).join(" ")}
      style={{ paddingLeft: depth * 16 + 2 }}
      onClick={onClick ?? onToggle}
    >
      {/* Drag handle — native button because we spread dnd listeners */}
      <button
        className="w-6 h-6 flex items-center justify-center shrink-0 text-[var(--a-minor-text)] opacity-0 group-hover:opacity-60 hover:!opacity-100 cursor-grab active:cursor-grabbing rounded"
        {...(dragHandleListeners as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        onClick={(e) => e.stopPropagation()}
      >
        <GripVertical size={12} />
      </button>

      {/* Expand / collapse */}
      {expandable ? (
        <Button
          label={expanded ? "Свернуть" : "Развернуть"}
          icon={expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          variant="text"
          size="mini"
          showLabel={false}
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.();
          }}
        />
      ) : (
        <span className="w-6 shrink-0" />
      )}

      <span className="shrink-0 text-[var(--a-minor-text)] flex items-center">{icon}</span>

      <Text
        size={3}
        truncate
        color={selected ? undefined : undefined}
        className="flex-1 ml-1"
      >
        {label}
      </Text>

      {onAdd && (
        <Button
          label={addLabel}
          icon={<Plus size={12} />}
          variant="text"
          size="mini"
          showLabel={false}
          className="opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
        />
      )}
    </div>
  );
}

interface SortableRowProps extends RowProps {
  id: string;
}

function SortableRow({ id, ...rowProps }: SortableRowProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
    >
      <Row {...rowProps} isDragging={isDragging} dragHandleListeners={listeners} />
    </div>
  );
}

// ─── PageTree ─────────────────────────────────────────────────────────────────

type SaveStatus = "idle" | "saving" | "saved" | "error";

interface PageTreeProps {
  enNav: Navigation;
  ruNav: Navigation;
  selected: string | null;
  onSelect: (path: string) => void;
}

export function PageTree({ enNav: initialEnNav, ruNav, selected, onSelect }: PageTreeProps) {
  const [nav, setNav] = useState(initialEnNav);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    if (!selected) return;
    const parts = selected.split("/");
    const keysToExpand: string[] = [];
    if (parts.length === 2) keysToExpand.push(parts[0]);
    if (parts.length === 3) { keysToExpand.push(parts[0]); keysToExpand.push(`${parts[0]}/${parts[1]}`); }
    if (keysToExpand.length > 0)
      setExpanded((prev) => new Set([...prev, ...keysToExpand]));
  }, [selected]);

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  // ── Save ─────────────────────────────────────────────────────────────────

  async function saveNavigation(newEnNav: Navigation) {
    setSaveStatus("saving");
    try {
      const newRuNav = syncNavStructure(newEnNav, ruNav);
      await fetch("/api/navigation", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ en: newEnNav, ru: newRuNav }),
      });
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch {
      setSaveStatus("error");
    }
  }

  // ── Drag handlers ─────────────────────────────────────────────────────────

  function handleDragStart({ active }: DragStartEvent) {
    setActiveId(active.id as string);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    setActiveId(null);
    if (!over || active.id === over.id) return;

    const activeCid: string = active.data.current?.sortable?.containerId;
    const overCid: string = over.data.current?.sortable?.containerId ?? (over.id as string);
    const fromIndex: number = active.data.current?.sortable?.index ?? 0;
    const toIndex: number = over.data.current?.sortable?.index ?? 0;

    let newNav: Navigation;

    if (activeCid === overCid) {
      newNav = reorderInContainer(nav, activeCid, fromIndex, toIndex);
    } else {
      const canMove =
        (isPageContainer(activeCid) && isPageContainer(overCid)) ||
        (isSubgroupContainer(activeCid) && isSubgroupContainer(overCid));
      if (!canMove) return;
      const { nav: without, item } = extractFromContainer(nav, activeCid, fromIndex);
      newNav = insertIntoContainer(without, overCid, item, toIndex);
    }

    setNav(newNav);
    saveNavigation(newNav);
  }

  // ── Render helpers ────────────────────────────────────────────────────────

  const renderPage = (id: string, title: string, path: string, depth: number) => (
    <SortableRow
      key={id}
      id={id}
      depth={depth}
      icon={<FileText size={14} />}
      label={title}
      selected={selected === path}
      onClick={() => onSelect(path)}
      addLabel="Добавить страницу"
      onAdd={() => {/* TODO */}}
    />
  );

  const renderFlatGroup = (item: NavFlatGroupItem) => {
    const isOpen = expanded.has(item.slug);
    const pageIds = item.pages.map((p) => gPageId(item.slug, p.slug));
    return (
      <div key={item.slug}>
        <SortableRow
          id={rootId(item.slug)}
          depth={0}
          icon={isOpen ? <FolderOpen size={14} /> : <Folder size={14} />}
          label={item.title}
          expandable
          expanded={isOpen}
          onToggle={() => toggle(item.slug)}
          addLabel="Добавить страницу"
          onAdd={() => {/* TODO */}}
        />
        {isOpen && (
          <SortableContext id={gCont(item.slug)} items={pageIds} strategy={verticalListSortingStrategy}>
            {item.pages.map((p) =>
              renderPage(gPageId(item.slug, p.slug), p.title, `${item.slug}/${p.slug}`, 1)
            )}
          </SortableContext>
        )}
      </div>
    );
  };

  const renderSubGroup = (sg: NavSubGroup, ngSlug: string) => {
    const key = `${ngSlug}/${sg.slug}`;
    const isOpen = expanded.has(key);
    const pageIds = sg.pages.map((p) => sgPageId(ngSlug, sg.slug, p.slug));
    return (
      <div key={key}>
        <SortableRow
          id={sgId(ngSlug, sg.slug)}
          depth={1}
          icon={isOpen ? <FolderOpen size={14} /> : <Folder size={14} />}
          label={sg.title}
          expandable
          expanded={isOpen}
          onToggle={() => toggle(key)}
          addLabel="Добавить компонент"
          onAdd={() => {/* TODO */}}
        />
        {isOpen && (
          <SortableContext id={sgCont(ngSlug, sg.slug)} items={pageIds} strategy={verticalListSortingStrategy}>
            {sg.pages.map((p) =>
              renderPage(
                sgPageId(ngSlug, sg.slug, p.slug),
                p.title,
                `${ngSlug}/${sg.slug}/${p.slug}`,
                2
              )
            )}
          </SortableContext>
        )}
      </div>
    );
  };

  const renderNestedGroup = (item: NavNestedGroupItem) => {
    const isOpen = expanded.has(item.slug);
    const sgIds = item.groups.map((g) => sgId(item.slug, g.slug));
    return (
      <div key={item.slug}>
        <SortableRow
          id={rootId(item.slug)}
          depth={0}
          icon={isOpen ? <FolderOpen size={14} /> : <Folder size={14} />}
          label={item.title}
          expandable
          expanded={isOpen}
          onToggle={() => toggle(item.slug)}
          addLabel="Добавить категорию"
          onAdd={() => {/* TODO */}}
        />
        {isOpen && (
          <SortableContext id={ngCont(item.slug)} items={sgIds} strategy={verticalListSortingStrategy}>
            {item.groups.map((sg) => renderSubGroup(sg, item.slug))}
          </SortableContext>
        )}
      </div>
    );
  };

  const renderItem = (item: NavItem) => {
    if (item.type === "page")
      return renderPage(rootId(item.slug), item.title, item.slug, 0);
    if (item.type === "group") return renderFlatGroup(item);
    return renderNestedGroup(item);
  };

  // ── Drag overlay label ────────────────────────────────────────────────────

  const activeLabel = (() => {
    if (!activeId) return null;
    for (const it of nav.items) {
      if (rootId(it.slug) === activeId) return it.title;
      if (it.type === "group")
        for (const p of it.pages)
          if (gPageId(it.slug, p.slug) === activeId) return p.title;
      if (it.type === "nested-group") {
        for (const sg of it.groups) {
          if (sgId(it.slug, sg.slug) === activeId) return sg.title;
          for (const p of sg.pages)
            if (sgPageId(it.slug, sg.slug, p.slug) === activeId) return p.title;
        }
      }
    }
    return null;
  })();

  const rootIds = nav.items.map((it) => rootId(it.slug));

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 py-2 border-b border-[var(--a-border)] flex items-center justify-between shrink-0">
        <Text size={3} weight="medium" color="muted">Pages</Text>
        <div className="flex items-center gap-2">
          {saveStatus === "saving" && <Loading size="14px" />}
          {saveStatus === "saved" && <Text size={2} color="success">Сохранено</Text>}
          {saveStatus === "error" && <Text size={2} color="danger">Ошибка</Text>}
          <Button
            label="Добавить страницу"
            icon={<Plus size={14} />}
            variant="text"
            size="s"
            showLabel={false}
            onClick={() => {/* TODO */}}
          />
        </div>
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-y-auto p-2">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext id={ROOT_CONTAINER} items={rootIds} strategy={verticalListSortingStrategy}>
            {nav.items.map(renderItem)}
          </SortableContext>

          <DragOverlay>
            {activeLabel && (
              <div className="flex items-center gap-2 px-3 py-2 bg-[var(--a-surface)] border border-[var(--a-border)] shadow-lg rounded-md opacity-90">
                <GripVertical size={12} className="text-[var(--a-minor-text)]" />
                <Text size={3}>{activeLabel}</Text>
              </div>
            )}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}
