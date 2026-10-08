# Image

Единственная иконка, которую `Image` рисует сам, — та, что стоит в заглушке вместо картинки, не загрузившейся. Состояние загрузки — это не иконка, а `Skeleton`; заменяется он пропом `preloader`, описанным в [Сведениях](/ru/components/content/image#загрузка). Картинки, которые вы передаёте сами (`src`, `children`), тоже описаны там.

:::spoiler[Как заменить иконку]
Передайте `brokenIcon`, когда `ImageOff` по умолчанию не подходит картинке. Замена встаёт на её место внутри того же серого круга, а её SVG подгоняется по размеру автоматически, из какой бы библиотеки иконок она ни была.

```tsx
import { Camera } from "lucide-react";

<Image src="/missing.jpg" alt="Team photo" brokenIcon={<Camera />} />
```

::playground{src=image/ImageBrokenIconDemo caption="Иконка по умолчанию и замена"}

Иконка имеет размер `18px` в круге `40px`. Меняйте их через `--image-broken-icon-size` и `--image-broken-media-size`, а цвета — через `--image-broken-media-color` и `--image-broken-media-background`; см. вкладку CSS-переменных.

Заглушка показывается только в режиме `src`. С `children` картинку рисуете вы, значит и состояние ошибки — тоже вы.
:::

## Иконки

::::icon-cards
:::icon-card[brokenIcon]{icon="ImageOff"}
Сообщает, что картинка не загрузилась, вместо самой картинки
:::
::::
