# Modal

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Modal" name="Modal" open="true"}
**4.0**

- Новый дизайн.
- Переехал на общий с `Drawer` фундамент `Sheet` — единая анимация появления.
- Открытие управляется только пропом `open`: `children`-триггер убран, кнопку-источник больше не нужно оборачивать в `Modal`.
- Добавлен проп `showCloseButton`.
- `leftActions` переименован в `additionalActions`.
- Длинное содержимое прокручивается и колесом мыши над подложкой.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/modal-3.png" name="Modal"}
**3.1**

- Исправлен цвет затемнения фона в Safari.
- Улучшения доступности.
- Исправлена локализация кнопки «Отмена».

**3.0**

- Новый дизайн.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/modal-2.png" name="Modal"}
**2.1**

- Исправлена раскладка на мобильных устройствах.

**2.0**

- Добавлен проп `surface`.
- `ModalAction` получил проп `disabled`.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/modal-1.png" name="Modal"}
**1.3**

- Исправлена кнопка «Отмена», пропадавшая при `showClose`/`showCancel`/`closeOnOverlay`, выставленных в `false`.
- Исправлен тип `ModalAction.onClick`.
- Исправлено закрытие окна при смене одного из пропов.

**1.2**

- Добавлен публичный интерфейс `ModalAction`.
- Исправлена непереведённая строка на русском языке.

**1.0**

- Добавлен в библиотеку — диалоговое окно для подтверждений и ввода данных поверх страницы.
:::
