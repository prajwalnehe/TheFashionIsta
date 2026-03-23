import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const banners = [
    {
      desktop: "https://res.cloudinary.com/dzd47mpdo/image/upload/v1774247874/Blue_Men_s_Fashion_Denim_Jeans_Promotional_Banner_1920_x_600_px_ehy8mv.png",
      mobile: "https://res.cloudinary.com/dzd47mpdo/image/upload/v1774257861/Black_Modern_Fashion_Sale_Flyer_600_x_600_px_djcqib.png",
      alt: "Modern Furniture Sofa Banner"
    },
    {
      desktop: "https://res.cloudinary.com/dzd47mpdo/image/upload/v1774256668/Neutral_Modern_Fashion_Collection_Banner_1920_x_600_px_cpl7jd.png",
      mobile: "https://res.cloudinary.com/dzd47mpdo/image/upload/v1774257309/Beige_and_Brown_Modern_Fashion_Style_Poster_600_x_600_px_ox2nwc.png",
      alt: "Purple Yellow Modern Fashion Sale Banner"
    }
  ];

  const len = banners.length;

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    if (len <= 1) return;
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, 4000);
  };

  useEffect(() => {
    start();
    return stop;
  }, [len]);

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  if (!len) return null;

  return (
    <section className="w-full m-0 p-0">
      {/* Desktop slider */}
      <div className="hidden md:block relative overflow-hidden">
        <div
          className="flex will-change-transform"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={stop}
          onMouseLeave={start}
        >
          {banners.map((s, i) => (
            <img
              key={i}
              src={s.desktop}
              alt={s.alt || `Banner ${i + 1}`}
              className="w-full h-auto object-cover block shrink-0 grow-0 basis-full select-none"
              loading="eager"
              draggable="false"
              onError={(e) => {
                e.currentTarget.src = s.fallback || s.desktop;
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`${i === index ? 'w-8 bg-black/70' : 'w-4 bg-black/30'} h-1.5 rounded-full transition-all duration-300 hover:bg-black/50`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile slider */}
      <div className="md:hidden block relative overflow-hidden">
        <div
          className="flex will-change-transform"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {banners.map((s, i) => (
            <img
              key={i}
              src={s.mobile}
              alt={s.alt || `Banner ${i + 1}`}
              className="w-full h-auto object-cover block shrink-0 grow-0 basis-full select-none"
              loading="eager"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
