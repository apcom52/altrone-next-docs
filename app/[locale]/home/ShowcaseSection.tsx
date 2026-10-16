"use client";

import { Showcase } from "@/components/Showcase";

/**
 * Placeholder art until real screenshots/photos are wired in — width varies
 * per slide (452px height, natural aspect ratio) to demonstrate the layout.
 */
function gradientPlaceholder(
  width: number,
  height: number,
  from: string,
  to: string,
) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${from}"/><stop offset="100%" stop-color="${to}"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const DESIGN_IMAGES = [
  "/slides/4/sc-1-dark-theme.png",
  "/slides/4/sc-1-accents.png",
  "/slides/4/sc-1-motion.png",
  "/slides/4/sc-1-radius.png",
  "/slides/4/sc-1-adaptive.png",
];

const COMPONENTS_IMAGES = [
  "/slides/4/sc2-box.png",
  "/slides/4/sc2-splitter.png",
  "/slides/4/sc2-toolbar.png",
  "/slides/4/sc2-datatable.png",
  "/slides/4/sc2-components.png",
];

const SCREEN_IMAGES = [
  gradientPlaceholder(700, 452, "#0ea5e9", "#6366f1"),
  gradientPlaceholder(452, 452, "#22c55e", "#14b8a6"),
  gradientPlaceholder(603, 452, "#f97316", "#ef4444"),
  gradientPlaceholder(500, 452, "#a855f7", "#ec4899"),
];

const MORE_IMAGES = [
  gradientPlaceholder(452, 452, "#334155", "#64748b"),
  gradientPlaceholder(700, 452, "#7c3aed", "#2563eb"),
  gradientPlaceholder(603, 452, "#0891b2", "#0d9488"),
  gradientPlaceholder(560, 452, "#db2777", "#9333ea"),
];

function DesignShowcaseRu() {
  return (
    <Showcase
      theme="dark"
      eyebrow="Новый дизайн"
      title={
        <>
          Форма. Цвет. Движение.
          <br />
          Переосмыслены.
        </>
      }
      description="Мы разобрали дизайн-систему до основания и собрали её заново — компонент за компонентом. Каждая деталь встала на своё место, и теперь все они говорят на одном языке."
      prevLabel="Назад"
      nextLabel="Далее"
    >
      <Showcase.Slide
        image={DESIGN_IMAGES[0]}
        title="Тема, которая выбирает себя сама."
        description="Altrone считывает системные настройки пользователя и мгновенно переключается между светлой и тёмной темой — без перезагрузки и без единой лишней строчки кода. Вам не нужно закладывать эту логику самостоятельно или держать тёмную тему в голове, продумывая новый экран: библиотека берёт это на себя, а каждый компонент уже готов к обеим темам."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[1]}
        title="Акцент, который меняет всё."
        description="Один параметр меняет акцентный цвет во всём интерфейсе — от кнопок и ссылок до состояний фокуса и выделения. Это позволяет быстро подстроить библиотеку под айдентику вашего продукта или бренда, не переписывая стили компонентов вручную: Altrone сам пересчитывает всю палитру, сохраняя контраст и согласованность в обеих темах."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[2]}
        title="Движение, которое оживляет интерфейс."
        description="Плавные переходы и микроанимации добавляют интерфейсу живости и делают его более выразительным. Они дают пользователю понятную обратную связь на каждое действие — клик, наведение, открытие панели — и при этом выглядят стильно, не превращаясь в отвлекающий эффект."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[3]}
        title="Скругления, вписанные друг в друга."
        description="Altrone использует концентрические радиусы (concentric radius) — компоненты внутри контейнера повторяют форму своего родителя, сохраняя одинаковый визуальный зазор между скруглениями на каждом уровне вложенности. Благодаря этому карточки, кнопки и модальные окна выглядят единым целым, а не набором отдельных элементов."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[4]}
        title="Адаптивность к любому устройству."
        description="Вы проектируете интерфейс один раз — а Altrone помогает ему адаптироваться под любой экран, от телефона до широкого монитора. Брейкпоинты вьюпорта и container queries работают на разных уровнях, поэтому в большинстве сценариев адаптивность почти не требует дополнительной работы."
      />
    </Showcase>
  );
}

function DesignShowcaseEn() {
  return (
    <Showcase
      theme="dark"
      eyebrow="New design"
      title={
        <>
          Shape. Color. Motion.
          <br />
          Reimagined.
        </>
      }
      description="We took the design system apart and rebuilt it — component by component. Every detail now has its place, and they all speak the same language."
      prevLabel="Previous"
      nextLabel="Next"
    >
      <Showcase.Slide
        image={DESIGN_IMAGES[0]}
        title="A theme that chooses itself."
        description="Altrone reads the user's system settings and switches between light and dark instantly — no reload, no extra code. You don't need to build that logic yourself or think about dark mode while designing a new screen: the library takes care of it, and every component already works in both themes."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[1]}
        title="One accent. A whole new look."
        description="A single setting changes the accent color across the entire interface — buttons, links, focus states, selection. That makes it easy to match the library to your product's or brand's identity without hand-editing component styles: Altrone recalculates the whole palette for you, keeping contrast and consistency in both themes."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[2]}
        title="Motion that brings the interface to life."
        description="Smooth transitions and micro-animations make the interface feel more alive and expressive. They give users clear feedback on every action — a click, a hover, a panel opening — while still looking polished, never turning into a distraction."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[3]}
        title="Radius, nested inside radius."
        description="Altrone uses a concentric radius model — components inside a container echo their parent's shape, keeping an even visual gap between corners at every level of nesting. That's what makes cards, buttons and modals feel like a single, finished piece rather than a set of separate elements."
      />
      <Showcase.Slide
        image={DESIGN_IMAGES[4]}
        title="Responsive to every device."
        description="Design your interface once, and Altrone helps it adapt to any screen — from a phone to a wide monitor. Viewport breakpoints and container queries work at different levels, so most layouts need little to no extra work to feel right everywhere."
      />
    </Showcase>
  );
}

function ComponentsShowcaseRu() {
  return (
    <Showcase
      theme="light"
      eyebrow="Новые компоненты"
      title={
        <>
          Новые компоненты.
          <br />
          Больше возможностей в привычных.
        </>
      }
      description="В четвёртой версии появились новые компоненты, а уже знакомые, например таблицы и тулбары, сильно изменились и научились новому."
      prevLabel="Назад"
      nextLabel="Далее"
    >
      <Showcase.Slide
        image={COMPONENTS_IMAGES[0]}
        title="Box — кирпичик, из которого собрано всё."
        description="Это основа, из которой собираются все остальные компоненты. Материал, тон, форма и тень задаются в одном месте, поэтому кнопки, поля и бейджи так похожи друг на друга. Берите тот же Box для своих карточек и панелей, и они сразу впишутся в библиотеку."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[1]}
        width={452}
        title="Splitter — панели с изменяемым размером."
        description="Несколько панелей на одном экране, а границу между ними можно двигать мышью или с клавиатуры. Нужно больше места для главного — расширьте его, ненужное — сверните."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[2]}
        title="Toolbar — панель действий для любой части экрана."
        description="Из него собирается шапка приложения и любые другие наборы кнопок: сверху, снизу или сбоку. Если действия не помещаются, лишние сами уходят в отдельное меню, и на узком экране ничего не ломается."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[3]}
        title="DataTable — таблица для больших данных."
        description="Новый движок под капотом и обновлённый дизайн снаружи. Появились типы колонок, изменение их ширины, состояние загрузки и удобные фильтры. Также появился полностью контролируемый режим состояния таблицы — текущей страницей, сортировкой и фильтрами можно управлять из своего кода."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[4]}
        title="И это ещё не всё."
        description="Screen собирает каркас приложения за пару минут. Не хватает места — сбоку выезжает Drawer. Пока данные грузятся, Skeleton держит для них место, а когда данных нет, Result объясняет, почему. Label помечает статусы и категории, а Image показывает картинки вместе с подписями."
      />
    </Showcase>
  );
}

function ComponentsShowcaseEn() {
  return (
    <Showcase
      theme="light"
      eyebrow="New components"
      title={
        <>
          New components.
          <br />
          More power in the familiar ones.
        </>
      }
      description="Version 4 brings new components, and familiar ones like tables and toolbars have changed a lot and learned new tricks."
      prevLabel="Previous"
      nextLabel="Next"
    >
      <Showcase.Slide
        image={COMPONENTS_IMAGES[0]}
        title="Box — the building block of everything."
        description="It's the foundation every other component is built from. Material, tone, shape and shadow are set in one place, which is why buttons, inputs and badges feel so alike. Use the same Box for your own cards and panels, and they fit right into the library."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[1]}
        width={452}
        title="Splitter — resizable panels."
        description="Several panels on one screen, with dividers you can move by mouse or keyboard. Need more room for what matters? Widen it, and collapse the rest."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[2]}
        title="Toolbar — an action bar for any part of the screen."
        description="It builds your app header and any other set of buttons: on top, at the bottom or on the side. When actions don't fit, the extra ones move into a separate menu on their own, so nothing breaks on a narrow screen."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[3]}
        title="DataTable — a table for big data."
        description="A new engine under the hood and a refreshed design on the outside. It brings column types, resizable columns, a loading state and handy filters. There's also a fully controlled mode for the table's state — the current page, sorting and filters can be driven from your own code."
      />
      <Showcase.Slide
        image={COMPONENTS_IMAGES[4]}
        title="And there's more."
        description="Screen builds your app shell in a couple of minutes. Need more room? Drawer slides in from the side. While data loads, Skeleton holds its place, and when there is none, Result explains why. Label tags statuses and categories, and Image shows pictures together with their captions."
      />
    </Showcase>
  );
}

function ScreenShowcaseRu() {
  return (
    <Showcase
      theme="light"
      eyebrow="Screen"
      title={
        <>
          Разметка приложения.
          <br />
          Собрана за минуты.
        </>
      }
      description="Screen — примитив для каркаса приложения: шапка, боковая панель и контент уже собраны вместе и подстраиваются друг под друга."
      prevLabel="Назад"
      nextLabel="Далее"
    >
      <Showcase.Slide
        image={SCREEN_IMAGES[0]}
        title="Боковая панель, которая просто работает."
        description="Сворачивается, докируется и превращается в мобильное меню — без единой строчки медиа-запросов."
      />
      <Showcase.Slide
        image={SCREEN_IMAGES[1]}
        title="Шапка на своём месте."
        description="Screen.Header фиксируется поверх контента и уважает отступы на любом брейкпоинте."
      />
      <Showcase.Slide
        image={SCREEN_IMAGES[2]}
        title="Контент без лишней вёрстки."
        description="Отступы и скролл в Screen.Content заданы заранее — просто кладите содержимое внутрь."
      />
      <Showcase.Slide
        image={SCREEN_IMAGES[3]}
        title="От сайдбара до таб-бара."
        description="На мобильных экранах Screen сам превращает навигацию в нижний таб-бар — переключать вручную ничего не нужно."
      />
    </Showcase>
  );
}

function ScreenShowcaseEn() {
  return (
    <Showcase
      theme="light"
      eyebrow="Screen"
      title={
        <>
          App layout.
          <br />
          Done in minutes.
        </>
      }
      description="Screen is a primitive for your app's shell — header, sidebar and content already work together and adapt to each other."
      prevLabel="Previous"
      nextLabel="Next"
    >
      <Showcase.Slide
        image={SCREEN_IMAGES[0]}
        title="A sidebar that just works."
        description="It collapses, docks and turns into a mobile menu — without a single media query."
      />
      <Showcase.Slide
        image={SCREEN_IMAGES[1]}
        title="A header that stays put."
        description="Screen.Header sticks above the content and respects insets at every breakpoint."
      />
      <Showcase.Slide
        image={SCREEN_IMAGES[2]}
        title="Content without the boilerplate."
        description="Padding and scrolling in Screen.Content are already set up — just drop your content in."
      />
      <Showcase.Slide
        image={SCREEN_IMAGES[3]}
        title="From sidebar to tab bar."
        description="On mobile, Screen turns navigation into a bottom tab bar on its own — nothing to switch by hand."
      />
    </Showcase>
  );
}

function MoreShowcaseRu() {
  return (
    <Showcase
      theme="dark"
      eyebrow="И это ещё не всё"
      title="Мелочи, которые решают всё."
      description="За главными обновлениями скрываются десятки улучшений поменьше — но именно они делают работу с библиотекой приятной каждый день."
      prevLabel="Назад"
      nextLabel="Далее"
    >
      <Showcase.Slide
        image={MORE_IMAGES[0]}
        title="Один пропс. Любой элемент."
        description="asChild подставляет логику компонента в любой элемент — от Link до кастомной кнопки."
      />
      <Showcase.Slide
        image={MORE_IMAGES[1]}
        title="Анимации, которые уважают пользователя."
        description="prefers-reduced-motion учтён везде по умолчанию, без дополнительной настройки."
      />
      <Showcase.Slide
        image={MORE_IMAGES[2]}
        title="Восемь языков из коробки."
        description="Каждый компонент локализован — от Button до DatePicker — и легко расширяется своими строками."
      />
      <Showcase.Slide
        image={MORE_IMAGES[3]}
        title="Доступность — не опция."
        description="Фокус-кольца, ARIA-атрибуты и клавиатурная навигация встроены в каждый компонент библиотеки."
      />
    </Showcase>
  );
}

function MoreShowcaseEn() {
  return (
    <Showcase
      theme="dark"
      eyebrow="And that's not all"
      title="The small things that change everything."
      description="Behind the headline updates are dozens of smaller improvements — the ones that make working with the library pleasant every single day."
      prevLabel="Previous"
      nextLabel="Next"
    >
      <Showcase.Slide
        image={MORE_IMAGES[0]}
        title="One prop. Any element."
        description="asChild merges a component's logic onto any element — from Link to a custom button."
      />
      <Showcase.Slide
        image={MORE_IMAGES[1]}
        title="Animation that respects the user."
        description="prefers-reduced-motion is honored everywhere by default, with no extra setup."
      />
      <Showcase.Slide
        image={MORE_IMAGES[2]}
        title="Eight languages out of the box."
        description="Every component is localized — from Button to DatePicker — and easy to extend with your own strings."
      />
      <Showcase.Slide
        image={MORE_IMAGES[3]}
        title="Accessibility isn't optional."
        description="Focus rings, ARIA attributes and keyboard navigation are built into every component."
      />
    </Showcase>
  );
}

function ShowcaseSectionRu() {
  return (
    <>
      <DesignShowcaseRu />
      <ComponentsShowcaseRu />
      <ScreenShowcaseRu />
      <MoreShowcaseRu />
    </>
  );
}

function ShowcaseSectionEn() {
  return (
    <>
      <DesignShowcaseEn />
      <ComponentsShowcaseEn />
      <ScreenShowcaseEn />
      <MoreShowcaseEn />
    </>
  );
}

export function ShowcaseSection({ locale }: { locale: string }) {
  return locale === "ru" ? <ShowcaseSectionRu /> : <ShowcaseSectionEn />;
}
