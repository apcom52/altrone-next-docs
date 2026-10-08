# Toolbar

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Toolbar" name="Toolbar" open="true"}
**4.0**

- Новый дизайн.
- Полноценный строительный блок шапки приложения: варианты отображения, размещение на любой из четырёх сторон экрана, несколько размеров, сабкомпоненты заголовка и группировки. `Action` стал полноценной кнопкой со всеми её возможностями.
- Действия, не помещающиеся в тулбар, схлопываются в overflow-меню с управляемым `priority`.
- Переименования: `placement` → `edge`, `Title.label` → `title`, `Group.align` → `justify`.
- :removed[Убраны `BackAction`, `BackForwardAction` и `SearchAction`.]
- Усилен блюр варианта `solid`; исправлен баланс Leading/Trailing и гибкий `Separator`, портивший расчёт overflow.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/toolbar-3.png" name="Toolbar"}
**3.4**

- Добавлен `badge` для `Toolbar.Action`; обновлены цвета `Action` и добавлены новые CSS-переменные.

**3.2**

- Добавлен отступ между действиями в группе.

**3.0**

- Новый дизайн.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/toolbar-2.png" name="Toolbar"}
**2.2**

- Больше контроля над видом действий: скрытие подписи, произвольные дочерние элементы, раскладка `fluid`.
- Исправлено ограничение ширины поповера родительской кнопкой для попапов, созданных через `content`.

**2.0**

- Добавлены `surface` и `elevation`; `label` стал необязательным.
- Исправлена работа пропов `width` и `offset`.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/toolbar-1.png" name="Toolbar"}
**1.3**

- Добавлены режимы контекстного меню и попапа для `ToolbarAction`; `onClick` стал необязательным; `ToolbarGroup` перестаёт схлопывать содержимое при таких действиях.
- Исправлены выравнивание `ToolbarGroup` и отсутствующий импорт `ToolbarAction`.

**1.0**

- Добавлен в библиотеку — панель, собирающая действия в одном месте.
:::
