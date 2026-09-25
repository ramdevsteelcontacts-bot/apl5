import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const sponsorPosters = [
  '/sponsors/sponsor-01.webp',
  '/sponsors/sponsor-02.webp',
  '/sponsors/sponsor-03.webp',
  '/sponsors/sponsor-04.webp',
  '/sponsors/sponsor-05.webp',
  '/sponsors/sponsor-06.webp',
];

export function Sponsors() {
  const { lang } = useLanguage();

  const [group, setGroup] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isLarge, setIsLarge] = useState(false);
  const [largeIndex, setLargeIndex] = useState(0);

  const groups = [
    sponsorPosters.slice(0, 3),
    sponsorPosters.slice(3, 6),
  ];

  const currentGroup = groups[group];

  // Desktop: 3 posters -> next 3 posters
  const nextGroup = () => {
    setGroup((prev) => (prev + 1) % groups.length);
  };

  const previousGroup = () => {
    setGroup((prev) => (prev - 1 + groups.length) % groups.length);
  };

  // Mobile: one poster at a time
  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % sponsorPosters.length);
  };

  const previousMobile = () => {
    setMobileIndex(
      (prev) =>
        (prev - 1 + sponsorPosters.length) %
        sponsorPosters.length
    );
  };

  // Automatic slideshow
  useEffect(() => {
    const timer = window.setInterval(() => {
      setGroup((prev) => (prev + 1) % groups.length);

      setMobileIndex((prev) => (prev + 1) % sponsorPosters.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextIndex =
      (mobileIndex + 1) % sponsorPosters.length;

    const image = new Image();
    image.src = sponsorPosters[nextIndex];
  }, [mobileIndex]);

  // Escape large view
  useEffect(() => {
    if (!isLarge) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLarge(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLarge]);

  const openLarge = (index: number) => {
    setLargeIndex(index);
    setIsLarge(true);
  };

  const nextLarge = () => {
    setLargeIndex(
      (prev) => (prev + 1) % sponsorPosters.length
    );
  };

  const previousLarge = () => {
    setLargeIndex(
      (prev) =>
        (prev - 1 + sponsorPosters.length) %
        sponsorPosters.length
    );
  };

  return (
    <>
      <section
        id="sponsors"
        className="border-y border-apl-line bg-apl-surface-2 px-3 py-10 sm:px-5 sm:py-14 lg:px-6"
      >
        <div className="mx-auto w-full max-w-[1100px]">

          {/* HEADING */}
          <div className="mb-6 text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-apl-saffron sm:w-12" />

              <span className="font-display text-xs font-semibold tracking-[0.25em] text-apl-saffron sm:text-sm">
                APL SEASON 5
              </span>

              <span className="h-px w-8 bg-apl-saffron sm:w-12" />
            </div>

            <h2
              className={`text-3xl font-bold uppercase text-apl-ink sm:text-4xl ${
                lang === 'hi'
                  ? 'font-hindi'
                  : 'font-display'
              }`}
            >
              {lang === 'hi' ? 'भामाशाह' : 'SPONSORS'}
            </h2>
          </div>

          {/* =========================
              DESKTOP / TABLET
              3 POSTERS TOGETHER
             ========================= */}
          <div className="hidden sm:block">

            <div className="relative">

              <div className="grid grid-cols-3 gap-3 lg:gap-4">
                {currentGroup.map((poster, index) => {
                  const realIndex = group * 3 + index;

                  return (
                    <div
                      key={poster}
                      className="relative overflow-hidden rounded-lg border border-apl-line bg-white"
                    >
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={poster}
                          alt={
                            lang === 'hi'
                              ? 'भामाशाह'
                              : 'APL Season 5 Sponsor'
                          }
                          loading={
                            realIndex === 0
                              ? 'eager'
                              : 'lazy'
                          }
                          decoding="async"
                          width={6912}
                          height={5184}
                          className="block h-full w-full object-contain"
                        />
                      </div>

                      {/* LARGE */}
                      <button
                        type="button"
                        onClick={() => openLarge(realIndex)}
                        aria-label="View sponsor poster large"
                        className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* LEFT */}
              <button
                type="button"
                onClick={previousGroup}
                aria-label="Previous sponsors"
                className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* RIGHT */}
              <button
                type="button"
                onClick={nextGroup}
                aria-label="Next sponsors"
                className="absolute right-0 top-1/2 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* GROUP DOTS */}
            <div className="mt-4 flex justify-center gap-2">
              {groups.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setGroup(index)}
                  aria-label={`Sponsor group ${index + 1}`}
                  className={
                    index === group
                      ? 'h-1.5 w-8 rounded-full bg-apl-saffron'
                      : 'h-1.5 w-1.5 rounded-full bg-apl-line'
                  }
                />
              ))}
            </div>
          </div>

          {/* =========================
              MOBILE
              ONE POSTER
             ========================= */}
          <div className="block sm:hidden">

            <div className="relative mx-auto w-full max-w-[430px]">

              <div className="relative overflow-hidden rounded-lg border border-apl-line bg-white">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={sponsorPosters[mobileIndex]}
                    alt={
                      lang === 'hi'
                        ? 'भामाशाह'
                        : 'APL Season 5 Sponsor'
                    }
                    loading={
                      mobileIndex === 0
                        ? 'eager'
                        : 'lazy'
                    }
                    decoding="async"
                    width={6912}
                    height={5184}
                    className="block h-full w-full object-contain"
                  />
                </div>

                {/* LARGE */}
                <button
                  type="button"
                  onClick={() => openLarge(mobileIndex)}
                  aria-label="View sponsor poster large"
                  className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>

                {/* COUNTER */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                  {mobileIndex + 1} / {sponsorPosters.length}
                </div>
              </div>

              {/* MOBILE LEFT */}
              <button
                type="button"
                onClick={previousMobile}
                aria-label="Previous sponsor"
                className="absolute left-1 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* MOBILE RIGHT */}
              <button
                type="button"
                onClick={nextMobile}
                aria-label="Next sponsor"
                className="absolute right-1 top-1/2 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* MOBILE DOTS */}
            <div className="mt-4 flex justify-center gap-1.5">
              {sponsorPosters.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMobileIndex(index)}
                  aria-label={`Sponsor ${index + 1}`}
                  className={
                    index === mobileIndex
                      ? 'h-1.5 w-7 rounded-full bg-apl-saffron'
                      : 'h-1.5 w-1.5 rounded-full bg-apl-line'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LARGE VIEW
         ========================= */}
      {isLarge && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-2 sm:p-5">

          <img
            src={sponsorPosters[largeIndex]}
            alt={
              lang === 'hi'
                ? 'भामाशाह'
                : 'APL Season 5 Sponsor'
            }
            width={6912}
            height={5184}
            decoding="async"
            className="max-h-[96vh] max-w-[96vw] object-contain"
          />

          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setIsLarge(false)}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"
          >
            <X className="h-6 w-6" />
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousLarge}
            aria-label="Previous sponsor"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white sm:left-5 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={nextLarge}
            aria-label="Next sponsor"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white sm:right-5 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* COUNTER */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white">
            {largeIndex + 1} / {sponsorPosters.length}
          </div>
        </div>
      )}
    </>
  );
}