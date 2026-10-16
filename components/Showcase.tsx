"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button, Text } from "altrone-ui";
import s from "./Showcase.module.css";

interface ShowcaseProps {
  /** Independent of Altrone's own app-wide theme — set explicitly per instance. */
  theme?: "light" | "dark";
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  prevLabel: string;
  nextLabel: string;
  children: ReactNode;
}

function ShowcaseBase({
  theme = "dark",
  eyebrow,
  title,
  description,
  prevLabel,
  nextLabel,
  children,
}: ShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateBoundaries = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 0);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateBoundaries();
    window.addEventListener("resize", updateBoundaries);
    return () => window.removeEventListener("resize", updateBoundaries);
  }, [updateBoundaries]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({
      left: (card.getBoundingClientRect().width + gap) * direction,
    });
  }, []);

  return (
    <section className={s.Showcase} data-theme={theme}>
      <div className={s.Intro}>
        <Text block size={6} weight="bold" className={s.Eyebrow}>
          {eyebrow}
        </Text>
        <Text size={9} block weight="bold" className={s.Title}>
          {title}
        </Text>
        <Text block size={5} color="muted" className={s.Description}>
          {description}
        </Text>
      </div>

      <div className={s.Carousel}>
        <div className={s.Track} ref={trackRef} onScroll={updateBoundaries}>
          {children}
        </div>

        <div className={s.Controls}>
          <Button
            icon={<ArrowLeft />}
            size="l"
            label={prevLabel}
            showLabel={false}
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
          />
          <Button
            icon={<ArrowRight />}
            size="l"
            label={nextLabel}
            showLabel={false}
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
          />
        </div>
      </div>
    </section>
  );
}

interface ShowcaseSlideProps {
  image: string;
  imageAlt?: string;
  /** Fixed width in px; the image is cropped to it around its center. Natural aspect ratio when omitted. */
  width?: number;
  title: ReactNode;
  description: ReactNode;
}

const CAPTION_MAX_WIDTH = 500;

function ShowcaseSlide({
  image,
  imageAlt = "",
  width,
  title,
  description,
}: ShowcaseSlideProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [captionMaxWidth, setCaptionMaxWidth] = useState<number>();

  const updateCaptionWidth = useCallback(() => {
    const img = imageRef.current;
    if (!img) return;
    setCaptionMaxWidth(Math.min(img.getBoundingClientRect().width, CAPTION_MAX_WIDTH));
  }, []);

  useEffect(() => {
    updateCaptionWidth();
    window.addEventListener("resize", updateCaptionWidth);
    return () => window.removeEventListener("resize", updateCaptionWidth);
  }, [updateCaptionWidth]);

  return (
    <div className={s.Slide}>
      {/* eslint-disable-next-line @next/next/no-img-element -- slide width is
          arbitrary and driven by the image's own aspect ratio at a fixed
          height; next/image requires a known width upfront, which doesn't fit. */}
      <img
        ref={imageRef}
        src={image}
        alt={imageAlt}
        className={s.SlideImage}
        style={width ? { width } : undefined}
        onLoad={updateCaptionWidth}
      />
      <div className={s.SlideCaption} style={{ maxWidth: captionMaxWidth }}>
        <strong className={s.SlideCaptionTitle}>{title}</strong>{" "}
        <span className={s.SlideCaptionText}>{description}</span>
      </div>
    </div>
  );
}

/**
 * Reusable marketing carousel section — used standalone wherever a
 * "feature showcase" block is needed, not just on the home page.
 */
export const Showcase = Object.assign(ShowcaseBase, { Slide: ShowcaseSlide });
