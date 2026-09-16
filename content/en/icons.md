# Icons

Altrone doesn't ship an icon set for you to pick from. There's no `<Icon name="trash" />` component, no proprietary icon vocabulary, no registry to browse. Every prop that takes an icon — `Button`'s `icon`, `TextInput`'s `icon`, `Toolbar.Action`'s `icon`, and so on — is typed simply as a `ReactElement`. You bring whichever icon library your app already uses (or plain inline SVGs), and it just works.

```ts
// Button.types.ts — this is the whole contract
icon?: ReactElement;
```

That's a deliberate choice, not an oversight: a component library that bundles its own icon set forces every consumer to either adopt it wholesale or maintain two icon vocabularies side by side. Accepting a plain element instead means your app's existing icon choice — whatever it already is — is the only one you ever have to think about.

```tsx
import { Button } from "altrone-ui";
import { Trash2 } from "lucide-react";
// or, just as validly:
// import { TrashIcon } from "@heroicons/react/24/outline";
// import { Trash } from "phosphor-react";

<Button label="Delete" icon={<Trash2 />} />;
```

## What Altrone uses internally

Altrone's own chrome — the chevrons in `Select`/`Dropdown`, the help icon in `Form.Field`, and similar built-in bits the library renders itself rather than asking you for — is built on [lucide-react](https://lucide.dev/). That's an implementation detail of the library's own components, not a public API you're locked into: nothing requires your app to use lucide-react too.

:::note
If you do happen to use lucide-react already, you get one concrete benefit for free — see sizing below.
:::

## Sizing

Icon-accepting components size their icon slot via `font-size` plus a scoped CSS variable, one per component size tier:

```scss
/* Simplified — Button's own icon sizing */
.Button {
  --button-icon-size: 16px; /* size="m", the default */
}
.ButtonIcon {
  font-size: var(--button-icon-size);
}
```

This relies on the icon itself resolving its width/height to `1em` — which is exactly what lucide-react icons do, via a global rule Altrone ships that targets the `lucide` class every lucide icon carries:

```scss
:global(.lucide) {
  width: 1em !important;
  height: 1em !important;
  color: currentColor;
}
```

That's the concrete payoff of using lucide-react alongside Altrone: pass one in, and it automatically matches whatever size and color the surrounding component expects — no explicit `size`/`color` prop needed on the icon itself.

:::warning
This automatic sizing is keyed to the `lucide` class specifically. If you bring a different icon library, its icons won't pick up `--button-icon-size` on their own — most icon libraries accept an explicit `size` prop of their own (`<TrashIcon className="size-4" />`, `<Trash size={16} />`, …), so size them to match, or wrap them in your own CSS that mirrors the `1em` convention.
:::

## Icon-only controls still need a name

Passing only an icon with no visible label doesn't give a control an accessible name for free — that's true regardless of which icon library drew the SVG. `Button`'s own `label` prop stays required even when `showLabel={false}` hides it visually, specifically so this can't be skipped by accident:

```tsx
<Button label="Delete item" showLabel={false} icon={<Trash2 />} />
```

See [Accessibility](accessibility) for the full rule and what to do when you're building an icon-only control from scratch rather than composing `Button`.

## Building your own components

If you're adding an icon slot to a component of your own on top of Altrone:

1. **Accept `ReactElement` (or `ReactNode`), not a name string.** A name-based prop (`icon="trash"`) implies a registry behind it — exactly the coupling this architecture avoids.
2. **Size via `font-size` + `1em`, the same convention the library uses**, so any icon set — including a consumer's own — resolves to the right size once it's sized to `1em` itself.
3. **Don't add lucide-react (or any icon library) as a hard dependency of a component meant for reuse**, unless the component is internal chrome the way `Form.Field`'s help icon is. A reusable, icon-accepting component should work with whatever the consumer already imports.

## Related topics

- [Accessibility](accessibility) — why an icon-only control needs an explicit accessible name
- [Materials](materials) — `Box`'s own `size` tiers, the same shape icon sizing follows
- [Typography](typography) — how icon size ties into a component's overall text scale
