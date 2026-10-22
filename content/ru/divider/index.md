# Divider

`Divider` — тонкая линия, которая разделяет группы содержимого: разделы страницы, группы кнопок в ряду, группы пунктов меню. Он рендерит нативный `<hr>`, у которого уже есть роль `separator`, поэтому вспомогательные технологии объявляют границу без дополнительных атрибутов.

```tsx
import { Divider } from 'altrone-ui';
```

## Разделение разделов

По умолчанию линия горизонтальная: она занимает ширину контейнера с небольшим отступом от его краёв и сохраняет небольшой вертикальный отступ.

```tsx
<Flex orientation="vertical" gap="m">
  <Text block>Profile</Text>
  <Divider />
  <Text block>Security</Text>
</Flex>
```

::playground{src=divider/DividerBasicDemo caption="Три раздела, разделённые горизонтальными линиями"}

## Вертикальный разделитель

`orientation="vertical"` ставит линию вертикально, чтобы разделять элементы в ряду. Она растягивается на высоту ряда, поэтому ей нужен родитель с flex-раскладкой, и получает `aria-orientation="vertical"`.

```tsx
<Flex gap="m" align="center">
  <Button label="Cut" />
  <Button label="Copy" />
  <Divider orientation="vertical" />
  <Button label="Paste" />
</Flex>
```

::playground{src=divider/DividerVerticalDemo caption="Группы кнопок в ряду"}

## В меню

Внутри `Dropdown.Menu` `Divider` делит пункты на группы — например, чтобы отделить опасное действие от остальных.

```tsx
<Dropdown.Menu>
  <Dropdown.Action label="Rename" />
  <Dropdown.Action label="Duplicate" />
  <Divider />
  <Dropdown.Action label="Archive" />
  <Dropdown.Action label="Delete" danger />
</Dropdown.Menu>
```

::playground{src=divider/DividerMenuDemo caption="Две группы действий в меню"}

## Свойства

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Направление линии. `vertical` растягивает её на высоту flex-ряда и задаёт `aria-orientation="vertical"`.
:::

:::prop[ref]{type="Ref<HTMLHRElement>"}
Ссылка на элемент `<hr>`.
:::

Остальные атрибуты `<hr>`, включая `className`, `style` и `aria-*`, передаются элементу. Дочерних элементов `Divider` не принимает.

## Похожие темы

- [Flex](/ru/components/layout/flex) — раскладка, в которой обычно стоит разделитель
- [Dropdown](/ru/components/overlays/dropdown) — меню, разделённые на группы разделителем
- [Toolbar](/ru/components/layout/toolbar) — у него есть свой `Toolbar.Separator variant="line"` для групп действий
- [Раскладка](/ru/foundations/layout) — отступы и структура страницы
