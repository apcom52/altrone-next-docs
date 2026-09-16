import { HomeContent, type HomeCopy } from './HomeContent'

const COPY: Record<string, HomeCopy> = {
  en: {
    title: 'Altrone UI',
    lead: 'A React component library for building consistent, accessible interfaces.',
    cta: 'Get started',
    sections: [
      { title: 'Core', description: 'Application, Screen, Box, Text', href: 'components/core' },
      { title: 'Controls', description: 'Inputs, pickers, buttons', href: 'components/controls' },
      { title: 'Containers', description: 'Layout, overlays, dropdowns', href: 'components/containers' },
    ],
  },
  ru: {
    title: 'Altrone UI',
    lead: 'React-библиотека компонентов для последовательных и доступных интерфейсов.',
    cta: 'Начать',
    sections: [
      { title: 'Ядро', description: 'Application, Screen, Box, Text', href: 'components/core' },
      { title: 'Элементы управления', description: 'Поля ввода, пикеры, кнопки', href: 'components/controls' },
      { title: 'Контейнеры', description: 'Лэйаут, оверлеи, dropdown', href: 'components/containers' },
    ],
  },
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const copy = COPY[locale] ?? COPY.en

  return <HomeContent locale={locale} copy={copy} />
}
