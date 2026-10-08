# Application

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Application" name="Application" open="true"}
**4.0**

- New design.
- Renamed from `AltroneApplication` to `Application`.
- Added `asChild` to merge the root attributes onto your own element.
- Added `persistTheme` to keep the theme between visits.
- Added the `icons` prop to replace the built-in icons in all components at once.
- Added the `applicationName` prop and automatic `document.title` sync with `Screen.title` (turned off via the `manageTitle` prop).
- Added the imperative `setPageTitle`/`resetPageTitle` functions to override the page title manually.
- Added languages: Chinese (Simplified), Portuguese and Turkish. German and Spanish now use the correct `de` and `es` codes.
- The app background is now copied to `<body>` and `<html>`, which removes the white strips in Safari.
- Removed the `config` prop, `useConfiguration()` and `Configuration`.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/altrone-3.png" name="AltroneApplication"}
**3.0**

- New design.
- Added `Configuration`, a wrapper that passes `className`, `style` and other parameters to all nested components.
- Added the `customLabels` prop to replace individual localization strings.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/altrone-2.png" name="AltroneApplication"}
**2.2**

- The `useThemeContext` hook is deprecated in favor of `useAltrone`.

**2.1**

- Added **Altrone Options**, global settings for component behavior (for example, turning off animations), and the `AltroneConfig` HOC to override them in a subtree.

**2.0**

- Focus styles switched to `:focus-visible`.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/altrone-1.png" name="AltroneApplication"}
**1.3**

- Fixed the missing `className` prop on `AltroneApplication`.

**1.0**

- The component appears as the root wrapper of the app.
:::
