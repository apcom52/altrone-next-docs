"use client";

import { Button, Flex, Text } from "altrone-ui";
import { ArrowRight, BookOpen, Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { rememberLocale } from "@/lib/localePreference";
import s from "./hero.module.css";

const COPY: Record<
  string,
  {
    brand: string;
    description: string;
    docs: string;
    otherLocale: string;
    otherLocaleLabel: string;
  }
> = {
  en: {
    brand: "Altrone 4",
    description:
      "A fresh, living design with smooth animations, five sizes for every component, a choice of accent colors and far deeper customization. Adaptive by default, with new capabilities in the components you already use.",
    docs: "Documentation",
    otherLocale: "ru",
    otherLocaleLabel: "На Русском",
  },
  ru: {
    brand: "Altrone 4",
    description:
      "Новый живой дизайн с крутыми анимациями, пять размеров для всех компонентов, на выбор разные акцентные цвета и расширенная кастомизация. Адаптивность из коробки и новые функции в привычных компонентах.",
    docs: "Документация",
    otherLocale: "en",
    otherLocaleLabel: "In English",
  },
};

export function Hero({ locale }: { locale: string }) {
  const router = useRouter();
  const copy = COPY[locale] ?? COPY.en;

  return (
    <div className={s.Hero}>
      <Flex
        orientation="vertical"
        align="start"
        gap="xxl"
        className={s.Content}
      >
        <Text block weight="bold" className={s.Title}>
          <span className={s.Brand}>{copy.brand}</span> Decent Dragon
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
            label={copy.otherLocaleLabel}
            icon={<Languages />}
            onClick={() => {
              rememberLocale(copy.otherLocale);
              router.push(`/${copy.otherLocale}`);
            }}
          />
        </Flex>
      </Flex>
    </div>
  );
}
