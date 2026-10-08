# Text

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Text" name="Text" open="true"}
**4.0**

- `Text` got a new design.
- All subcomponents (`Text.Heading`, `Text.Paragraph`, `Text.Inline`, `Text.Link` and others) are removed. A large set of props chooses what to render instead.
- The size scale is wider.
- Added text truncation.
- New options for links.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/text-3.png" name="Text"}
**3.1**

- The `role` prop of `Text.Heading` is deprecated because it conflicts with ARIA. Use `variant` for the visual style and `ariaRole` to set the role explicitly.

**3.0**

- `Text` replaces `Heading`, `Paragraph` and `Blockquote` and gets a new design.
- Added subcomponents for different tasks: `Text.Heading`, `Text.Paragraph`, `Text.Inline`, `Text.Link`, `Text.ScreenName` and others.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/text-2.png" name="Heading, Paragraph, Blockquote"}
**2.0**

- Fixed overriding `className` and the missing `id` prop on `Heading`.
- Fixed `padding-right` on `Blockquote`.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/text-1.png" name="Heading, Paragraph, Blockquote"}
**1.3**

- Fixed the required `className` prop on `Blockquote`.

**1.0**

- Typography is added to the library as a set of separate components: `Heading`, `Paragraph` and `Blockquote`.
:::
