# Loading

## Если форма известна — берите скелетон

Если вы знаете, как будет выглядеть контент — список строк, сетка карточек, — займите его место с помощью `Skeleton`. Спиннер на пустом месте ничего не говорит о том, что придёт, а страница прыгает, когда контент появляется.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineShapeGoodDemo caption="Строки будущего списка уже на своих местах"}
:::

:::bad
::playground{src=loading/LoadingGuidelineShapeBadDemo caption="Спиннер вместо списка известной формы"}
:::
::::

## Показывайте прогресс, если он известен

Если операция сообщает, сколько уже сделано, — загрузка файла, экспорт, — передайте `value`. Заполняющаяся дуга отвечает на вопрос «сколько ещё ждать» лучше бесконечного вращения.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineProgressGoodDemo caption="Дуга показывает, какая часть файла загружена"}
:::

:::bad
::playground{src=loading/LoadingGuidelineProgressBadDemo caption="Прогресс известен, но не показан"}
:::
::::

## Используйте состояние загрузки самой кнопки

Кнопка, запустившая действие, сама показывает ожидание через `state="loading"`: она блокирует повторные нажатия и сохраняет размер. Отдельный спиннер рядом с активной кнопкой провоцирует нажать ещё раз.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineButtonGoodDemo caption="Кнопка показывает ожидание и заблокирована"}
:::

:::bad
::playground{src=loading/LoadingGuidelineButtonBadDemo caption="Спиннер рядом с кнопкой, которую всё ещё можно нажать"}
:::
::::

## Подбирайте размер под контекст

Рядом с текстом спиннер должен быть не больше строки: 16px, тонкая обводка и `currentColor`. Крупные размеры оставьте для ожидания, которое занимает целую область.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineSizeGoodDemo caption="Спиннер размером с текст и его цвета"}
:::

:::bad
::playground{src=loading/LoadingGuidelineSizeBadDemo caption="Спиннер намного крупнее строки"}
:::
::::

## Доступность

- Неопределённый спиннер — `role="status"`; определённый — `role="progressbar"` с `aria-valuenow`, `aria-valuemin` и `aria-valuemax`.
- `aria-label` по умолчанию — локализованное «Загрузка». Передайте конкретное («Loading comments», «Uploading report.pdf»), чтобы было понятно, чего ждём.
- Если видимый текст рядом со спиннером уже говорит, что происходит, держите подпись согласованной с ним.
- SVG внутри скрыт от вспомогательных технологий (`aria-hidden`).
