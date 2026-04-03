import { useEffect, useState } from 'react';
import type { Slide } from '../data/services';

type HeroSliderProps = {
  slides: Slide[];
};

const SLIDE_INTERVAL_MS = 6200;

export function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  const goTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-slate-100 shadow-glow">
      {slides.map((slide, index) => (
        <article
          key={slide.id}
          className={[
            'absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out',
            index === activeIndex ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label={slide.title}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray/85 via-brand-gray/70 to-black/20" />
          <div className="relative flex h-[420px] flex-col justify-end p-8 md:h-[520px] md:p-12">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-rose-100">
              Studio de detailing
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              {slide.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-100 md:text-lg">
              {slide.subtitle}
            </p>
          </div>
        </article>
      ))}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-200/20" />

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <div className="pointer-events-auto flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goTo(index)}
              className={[
                'h-2 w-8 rounded-full transition-all duration-200',
                index === activeIndex
                  ? 'bg-brand-red'
                  : 'bg-slate-200/40 hover:bg-slate-200/70',
              ].join(' ')}
              aria-label={`Mergi la ${slide.title}`}
            />
          ))}
        </div>
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="rounded-full border border-slate-300/40 bg-slate-800/70 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-slate-100 transition hover:bg-slate-700"
            aria-label="Previous slide"
          >
            Inapoi
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            className="rounded-full border border-brand-red/40 bg-brand-red px-3 py-1 text-sm font-semibold uppercase tracking-wide text-slate-100 transition hover:bg-brand-red/90"
            aria-label="Next slide"
          >
            Inainte
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
