# Search

Поле само рисует две иконки: лупу и кнопку очистки, а также иконку предупреждения, когда не удалось загрузить подсказки. Спиннер загрузки поле тоже рисует само, но заменить его нельзя. Иконки, которые вы кладёте в острова сами, описаны в [обзоре](/ru/components/controls/search).

:::spoiler[Как заменить иконки]
Передайте иконку в `searchIcon`, `clearIcon` и `errorIcon`. Можно заменить любую из них.

```tsx
import { ScanSearch, Trash2 } from 'lucide-react';

<Search
  value={query}
  onChange={setQuery}
  searchIcon={<ScanSearch />}
  clearIcon={<Trash2 />}
/>
```

::playground{src=search/SearchIconsDemo caption="Другая лупа и корзина вместо стрелки-стирания"}

Каждое значение — `ReactElement`. Размер иконки поле задаёт само, поэтому указывать его не нужно. Иконка из другой библиотеки подключается так же — см. [Иконки](/ru/foundations/icons).

Чтобы заменить иконки во всех поисках приложения сразу, задайте роли `search`, `clear` и `error` через проп `icons` у `Application`.
:::

## Иконки

Карточки показывают пропы, которыми иконки заменяются.

::::icon-cards
:::icon-card[searchIcon]{icon="Search"}
Обозначает поле как поисковое: по центру пустого поля и в начале заполненного
:::

:::icon-card[clearIcon]{icon="Delete"}
Показывается на кнопке очистки, когда в поле есть значение
:::

:::icon-card[errorIcon]{icon="CircleAlert"}
Сообщает, что подсказки загрузить не удалось
:::
::::
