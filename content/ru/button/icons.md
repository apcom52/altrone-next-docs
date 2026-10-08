# Button

Единственные иконки, которые `Button` рисует сам, — те, что сообщают об асинхронном `state`. Пока одна из них видна, собственное содержимое кнопки скрыто, но сохраняет своё место, поэтому ширина не меняется; кнопка в загрузке дополнительно получает `aria-busy`. Спиннер загрузки — собственный `Loading` из altrone-ui, заменить его нельзя. Иконки, которые передаёте вы сами (`icon`, `additionalIcon`), описаны в [сведениях](/ru/components/controls/button#иконки).

:::spoiler[Как заменить иконки]
Передайте `successIcon` и `failedIcon`, если результат заслуживает более конкретного сигнала. Замена встаёт на место галочки или крестика в том же цветном круге и — как любая иконка из `lucide-react` — сама подстраивается под его размер.

```tsx
import { PartyPopper, TriangleAlert } from "lucide-react";

<Button
  label="Publish"
  variant="submit"
  state={state}
  successIcon={<PartyPopper />}
  failedIcon={<TriangleAlert />}
  onClick={handleClick}
/>
```

::playground{src=button/ButtonStateIconsDemo caption="Нажмите кнопку — результат случайный"}

Цвет круга зависит от результата, а не от иконки: зелёный для `succeeded`, красный для `failed`. Иконкой говорите, *что* произошло, а не удалось ли это, и делайте её узнаваемой с одного взгляда — она на экране, лишь пока вы держите состояние.

Оба пропа принимают любой `ReactElement`. Автоматический размер привязан к классу `lucide`, поэтому иконке из другой библиотеки нужен явный размер около `16px` — см. статью [Иконки](/ru/foundations/icons).

```tsx
<Button label="Save" state={state} successIcon={<CheckIcon className="size-4" />} />
```
:::

## Иконки

::::icon-cards
:::icon-card[successIcon]{icon="Check"}
Сообщает об успешном результате, пока `state` равен `succeeded`
:::

:::icon-card[failedIcon]{icon="X"}
Сообщает о неудачном результате, пока `state` равен `failed`
:::
::::
