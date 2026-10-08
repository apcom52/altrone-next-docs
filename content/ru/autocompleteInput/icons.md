# AutocompleteInput

Поле само рисует одну иконку: иконку ошибки, которая появляется в его конце, когда загрузка подсказок не удалась. Спиннер, который показывается, пока подсказки грузятся, — собственный `LoadingIsland` поля, его заменить нельзя. Иконки, которые вы кладёте в острова сами, описаны в [обзоре](/ru/components/controls/autocompleteInput).

:::spoiler[Как заменить иконку]
Передайте иконку в `errorIcon`.

```tsx
import { ServerCrash } from 'lucide-react';

<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  errorIcon={<ServerCrash />}
/>
```

::playground{src=autocompleteInput/AutocompleteInputIconsDemo caption="Упавший сервер вместо знака предупреждения"}

Значение — `ReactElement`; размер поле подбирает само по своему `size`, задавать его не нужно. Иконка сохраняет цвет опасности и показывается с подсказкой. Иконка из другой библиотеки подставляется так же — см. [Иконки](/ru/foundations/icons).

Чтобы сменить иконку ошибки сразу во всех компонентах, задайте роль `error` через проп `icons` у `Application` — `errorIcon` нужен, только когда одному полю требуется что-то другое.
:::

## Иконки

Карточка показывает проп, которым заменяется иконка.

::::icon-cards
:::icon-card[errorIcon]{icon="CircleAlert"}
Показывается в конце поля, когда загрузить подсказки не удалось
:::
::::
