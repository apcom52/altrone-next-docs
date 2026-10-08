import { Hero } from "./home/Hero";
import { ShowcaseSection } from "./home/ShowcaseSection";

export function HomeContent({ locale }: { locale: string }) {
  return (
    <>
      <Hero locale={locale} />
      <ShowcaseSection locale={locale} />
    </>
  );
}
