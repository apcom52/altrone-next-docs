# PasswordInput

Поле само рисует одну пару иконок: глаз на кнопке-переключателе. Какой из них виден, зависит от состояния. Иконки, которые вы кладёте в острова сами, описаны в [обзоре](/ru/components/controls/passwordInput).

:::spoiler[Как заменить иконки]
Передайте иконки в `showIcon` и `hideIcon`. Можно заменить одну или обе.

```tsx
import { Lock, LockOpen } from 'lucide-react';

<PasswordInput
  value={value}
  onChange={setValue}
  showIcon={<LockOpen />}
  hideIcon={<Lock />}
/>
```

::playground{src=passwordInput/PasswordInputIconsDemo caption="Замок вместо глаза"}

Каждое значение — `ReactElement`. Размер иконки кнопка подбирает сама по `size` поля, задавать его не нужно. Иконка из другой библиотеки работает так же — см. [Иконки](/ru/foundations/icons).

Помните: `showIcon` показывается, пока пароль **скрыт**, и предлагает его раскрыть. `hideIcon` — наоборот. Если берёте пару вроде замка, проверьте, что смысл понятен: открытый замок означает «показать».
:::

## Иконки

Карточки показывают пропы, которые заменяют иконки.

::::icon-cards
:::icon-card[showIcon]{icon="Eye"}
Показана на кнопке, пока пароль скрыт, — предлагает его раскрыть
:::

:::icon-card[hideIcon]{icon="EyeOff"}
Показана на кнопке, пока пароль виден, — предлагает скрыть его снова
:::
::::
