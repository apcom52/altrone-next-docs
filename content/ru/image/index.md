# Image

`Image` оформляет картинку, которая является частью контента: фото, иллюстрацию, диаграмму — с необязательной подписью под ней. Он рисует рамку сам — скруглённые углы, тонкую кромку, — показывает заглушку, пока картинка грузится, и нейтральную замену вместо браузерной иконки «битого изображения», если загрузка не удалась. Сама картинка — это либо обычный URL, либо любой переданный вами элемент, например компонент изображения фреймворка или инлайновый SVG.

`Image` рендерит `<figure>` и всегда центрируется в контейнере. Он предназначен для контентных картинок; для изображения человека используйте `Avatar`.

```tsx
import { Image } from "altrone-ui";

<Image src="/fjord.jpg" alt="A fjord at sunset" caption="Fjord at sunset" />;
```

## Базовое использование

Передайте `src` и всегда — `alt`, описывающий картинку. `width` по умолчанию равна ширине контейнера, а `height` — высоте самой картинки, поэтому задайте `height`, если рамка должна сохранять размер.

```tsx
<Image
  src="/mountains.jpg"
  alt="Mountains under a pink evening sky"
  caption="Evening in the mountains"
  width="100%"
  height={240}
/>
```

::playground{src=image/ImageBasicDemo caption="Картинка с подписью в рамке фиксированной высоты"}

В этом режиме тонкую кромку получает сама картинка, а не рамка. У заглушки загрузки и у замены битого изображения её нет: обводить пока нечего.

## Размер и углы

`width` и `height` принимают число (пиксели) или любую CSS-длину. `radius` задаёт радиус скругления так же и по умолчанию равен `12px`.

```tsx
<Image src={photo} alt="Mountains" width={150} height={200} />
<Image src={photo} alt="Mountains" width={150} height={200} radius={0} />
<Image src={photo} alt="Mountains" width={150} height={200} radius={32} />
```

::playground{src=image/ImageRadiusDemo caption="Без скругления, по умолчанию и с большим радиусом"}

:::note
Рамка никогда не бывает ниже `200px`, поэтому меньшая `height` поднимается до этого значения. Чтобы разрешить более низкую рамку, уменьшите `--image-min-height` (см. вкладку CSS-переменных).
:::

## Вписывание картинки

`fit` решает, как картинка располагается в рамке другой формы. Он работает как CSS `object-fit` и по умолчанию равен `cover`.

```tsx
<Image src={photo} alt="Mountains" fit="cover" width={150} height={200} />
<Image src={photo} alt="Mountains" fit="contain" width={150} height={200} />
```

::playground{src=image/ImageFitDemo caption="Все пять значений в одной портретной рамке"}

| Значение     | Что происходит                                                       |
| ------------ | -------------------------------------------------------------------- |
| `cover`      | Заполняет рамку и обрезает то, что не поместилось                     |
| `contain`    | Показывает картинку целиком, вокруг остаётся пустое место             |
| `fill`       | Растягивается по рамке, не сохраняя пропорции                         |
| `scale-down` | Меньшее из `contain` и натурального размера картинки                  |
| `none`       | Натуральный размер, обрезанный рамкой                                 |

При `contain`, `scale-down` и `none` картинка может оказаться меньше рамки. Кромка при этом повторяет саму картинку, а не пустое место вокруг.

## Выбор видимой части

Когда `cover` обрезает картинку, `objectPosition` решает, какая часть останется. Он принимает любое значение CSS `object-position`.

```tsx
<Image src={photo} alt="Mountains" objectPosition="left" width={150} height={200} />
<Image src={photo} alt="Mountains" objectPosition="80% center" width={150} height={200} />
```

::playground{src=image/ImagePositionDemo caption="Левая часть, центр и правая часть одной картинки"}

## Произвольная картинка

Передайте любой элемент в `children` вместо `src`, когда картинку должен рисовать кто-то другой: `next/image`, инлайновый `<svg>`, `<picture>` с несколькими источниками, график. `Image` тогда даёт только рамку, `fit` и подпись.

```tsx
<Image fit="cover" width="100%" height={200} caption="Aurora over Reykjavik">
  <NextImage src={photo} alt="Aurora over Reykjavik" fill />
</Image>
```

::playground{src=image/ImageChildrenDemo caption="Инлайновый SVG в рамке"}

В этом режиме дочерний элемент всегда заполняет рамку независимо от `fit`, а кромки нет — произвольную картинку вы оформляете сами. Элементу без собственного размера, например голому `<svg>`, задайте `width="100%" height="100%"`. `alt` ставится на ваш элемент, а не на `Image`.

## Загрузка

С `src` `Image` отслеживает загрузку сам: `Skeleton` закрывает рамку, пока картинка не придёт, и затем исчезает. Смена `src` запускает всё заново. `onLoad` и `onError` сообщают, чем закончилась загрузка.

У произвольной `children`-картинки нет единого события, которое можно слушать, поэтому вы сами сообщаете, что она грузится, через `isLoading`. `preloader` заменяет `Skeleton` любым элементом.

```tsx
<Image isLoading={!ready} preloader={<Loading size={32} />}>
  <NextImage src={photo} alt="Misty forest path" />
</Image>
```

::playground{src=image/ImagePreloaderDemo caption="Переключайте состояние загрузки"}

С `src` `isLoading` ничего не делает.

## Битое изображение

Если `src` не загрузился, картинка заменяется нейтральной заглушкой: иконка в сером круге на собственном фоне рамки. Её `alt` остаётся доступным программам чтения с экрана.

```tsx
<Image src="/missing.jpg" alt="A photo that failed to load" />
```

::playground{src=image/ImageBrokenDemo caption="Несуществующий URL"}

Иконку можно заменить — см. [вкладку Иконки](/ru/components/content/image/icons).

## Подпись

`caption` показывает отцентрированную строку приглушённого текста под рамкой. Она принимает любой узел, а не только строку.

```tsx
<Image
  src={photo}
  alt="Mountains"
  caption={<>Illustration by <Text href="/authors/altrone">Altrone docs</Text></>}
/>
```

::playground{src=image/ImageCaptionDemo caption="Подпись со ссылкой"}

## Свойства

:::prop[src]{type="string"}
URL картинки. Игнорируется, если передан `children`.
:::

:::prop[alt]{type="string" default="''"}
Текстовая альтернатива картинки. Также доступное имя заглушки битого изображения.
:::

:::prop[children]{type="ReactNode"}
Произвольный элемент картинки, рендерится вместо `src`.
:::

:::prop[fit]{type="'cover' | 'contain' | 'fill' | 'none' | 'scale-down'" default="'cover'"}
Как картинка располагается в рамке, как CSS `object-fit`.
:::

:::prop[objectPosition]{type="string"}
Какая часть картинки остаётся видимой, как CSS `object-position`.
:::

:::prop[width]{type="number | string" default="'100%'"}
Ширина рамки. Число — пиксели.
:::

:::prop[height]{type="number | string" default="'auto'"}
Высота рамки. Число — пиксели. Рамка не ниже `200px`.
:::

:::prop[radius]{type="number | string" default="'var(--radius-l)'"}
Радиус скругления рамки. Число — пиксели.
:::

:::prop[caption]{type="ReactNode"}
Подпись, отцентрированная под рамкой.
:::

:::prop[isLoading]{type="boolean"}
Показывает прелоадер поверх произвольной `children`-картинки. С `src` игнорируется.
:::

:::prop[preloader]{type="ReactElement" default="Skeleton"}
Заменяет прелоадер по умолчанию.
:::

:::prop[brokenIcon]{type="ReactElement"}
Заменяет иконку заглушки битого изображения.
:::

:::prop[onLoad]{type="(event: SyntheticEvent<HTMLImageElement>) => void"}
Вызывается, когда картинка `src` загрузилась. Только с `src`.
:::

:::prop[onError]{type="(event: SyntheticEvent<HTMLImageElement>) => void"}
Вызывается, когда картинка `src` не загрузилась. Только с `src`.
:::

`Image` также принимает `className`, `style` и любые стандартные HTML-атрибуты, все они применяются к `<figure>`, и передаёт ему `ref`.

## Похожие темы

- [Text](/ru/components/content/text) — компонент, который рисует подпись
- [Box](/ru/components/layout/box) — примитив поверхности для оформленного контента, не являющегося картинкой
- [Доступность](/ru/foundations/accessibility) — текстовые альтернативы и правила, стоящие за `alt`
- [Загрузка](/ru/foundations/loading) — как заглушка картинки сочетается с остальными паттернами загрузки
- [Иконки](/ru/foundations/icons) — общий для библиотеки контракт иконок, которому следует `brokenIcon`
