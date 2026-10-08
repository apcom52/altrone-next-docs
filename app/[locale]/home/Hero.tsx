"use client";

import { Button, Flex, Text } from "altrone-ui";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import s from "./hero.module.css";

const COPY: Record<
  string,
  { brand: string; title: string; description: string; docs: string; installation: string }
> = {
  en: {
    brand: "Altrone 4",
    title: " is here",
    description:
      "A fresh, living design with smooth animations, five sizes for every component, a choice of accent colors and far deeper customization. Adaptive by default, with new capabilities in the components you already use.",
    docs: "Documentation",
    installation: "Installation",
  },
  ru: {
    brand: "Altrone 4",
    title: " уже здесь",
    description:
      "Новый живой дизайн с крутыми анимациями, пять размеров для всех компонентов, на выбор разные акцентные цвета и расширенная кастомизация. Адаптивность из коробки и новые функции в привычных компонентах.",
    docs: "Документация",
    installation: "Установка",
  },
};

export function Hero({ locale }: { locale: string }) {
  const router = useRouter();
  const copy = COPY[locale] ?? COPY.en;

  return (
    <div className={s.Hero}>
      <Flex orientation="vertical" align="start" gap="xxl" className={s.Content}>
        <Text block weight="bold" className={s.Title}>
          <span className={s.Brand}>{copy.brand}</span>
          {copy.title}
        </Text>
        <Text block size={5} className={s.Description}>
          {copy.description}
        </Text>
        <Flex wrap gap="l">
          <Button
            variant="submit"
            size="xl"
            label={copy.docs}
            icon={<BookOpen />}
            additionalIcon={<ArrowRight />}
            onClick={() => router.push(`/${locale}/getting-started`)}
          />
          <Button
            size="xl"
            label={copy.installation}
            icon={<Download />}
            onClick={() => router.push(`/${locale}/installation`)}
          />
        </Flex>
      </Flex>
    </div>
  );
}
