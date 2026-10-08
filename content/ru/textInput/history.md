# TextInput

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="TextInput" name="TextInput" open="true"}
**4.0**

- Новый дизайн.
- Переработаны динамические острова: точнее позиционирование, полноценные кнопки в островах-действиях и новый остров со счётчиком символов.
- `className`, `style` и `ref` теперь ведут на корневой элемент; для самого `<input>` появились `inputClassName` и `inputStyle`.
- Убран зум вьюпорта при фокусе в iOS Safari для размера `m`.
- Убран проп `shape`: обёртка всегда капсула.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/textInput-3.png" name="TextInput"}
**3.4**

- Исправлен цвет плейсхолдера у `readOnly`-полей.

**3.1**

- Добавлен сабкомпонент `LoadingIsland`.
- Улучшен алгоритм определения островов.

**3.0**

- Новый дизайн.
- Острова переосмыслены как сабкомпоненты: их можно оборачивать в `Popover` или `Tooltip` и рендерить условно.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/textInput-2.png" name="TextInput"}
**2.0**

- Добавлены `suggestions`, `useLiveSuggestions`, `loading`, `children`, `surface` и `elevation`.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/textInput-1.png" name="TextInput"}
**1.2**

- Исправлены типы вокруг хука `useTextInputIsland` и пропа `ref`.

**1.1**

- Исправлена работа пропа `className`.

**1.0**

- Добавлен в библиотеку — однострочное поле ввода.
:::
