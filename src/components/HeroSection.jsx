import { useRef, useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/navigation";

import KaydirSVG from "../assets/logo/kaydir.svg";

// Ordered as requested — all served from /public/videos/
// poster: project cover image shown while video is loading (no ffmpeg needed)
const SLIDES = [
  { id: 1, src: "/videos/polatleventexclusive.mp4", poster: "/polatleventexclusive/4 (1).webp",                              title: "بولات ليفنت إكسكلوسيف" },
  { id: 2, src: "/videos/veluxyalikavak.mp4",        poster: "/veluxyalikavak/Velux.webp",                                   title: "فيلوكس يالي كاواك" },
  { id: 3, src: "/videos/folkartorion.mp4",           poster: "/folkartorion/orion-dis-mekan_2_2026-02-24_13-15-41.webp",    title: "فولكارت أوريون" },
  { id: 4, src: "/videos/woxyalikavak.mp4",           poster: "/woxyalikavak/21-Tecno_Yalikavak_Ext_DroneD126.webp",         title: "واكس يالي كاواك" },
  { id: 5, src: "/videos/seapearlatakoy.mp4",         poster: "/seapearlatakoy/2 (2).webp",                                  title: "سي بيرل أتاكوي" },
  { id: 6, src: "/videos/folkartnova.mp4",            poster: "/folkartnova/nova-gallery2_2023-10-18_15-42-44.webp",         title: "فولكارت نوفا" },
  { id: 7, src: "/videos/folkartmona.mp4",            poster: "/folkartmona/1_2025-01-09_10-56-25.webp",                    title: "فولكارت مونا" },
];

// Shown only on the first slide with GSAP-driven swipe animation
function SwipeIndicator({ visible }) {
  const imgRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (!visible || !imgRef.current) return;
    tlRef.current = gsap.timeline({ repeat: -1, repeatDelay: 0.9 })
      .fromTo(imgRef.current,
        { x: 14, opacity: 0.5 },
        { x: -14, opacity: 1, duration: 1.8, ease: "power1.inOut" }
      );
    return () => tlRef.current?.kill();
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="swipe-indicator"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none"
        >
          <img
            ref={imgRef}
            src={KaydirSVG}
            alt="swipe"
            className="w-16 h-16 sm:w-20 sm:h-20"
            style={{ filter: "brightness(0) invert(1)", willChange: "transform" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HeroSection() {
  const swiperRef = useRef(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  // Lazy-load video → only fetch when the slide becomes active
  const activateSlide = useCallback((swiper) => {
    if (!swiper) return;

    // Pause & reset all videos
    document.querySelectorAll(".hero-video").forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    // Load video src on demand (lazy)
    const vid = activeSlide.querySelector(".hero-video");
    if (vid?.dataset.src && !vid.dataset.loaded) {
      vid.src = vid.dataset.src;
      vid.load();
      vid.dataset.loaded = "1";
    }
    vid?.play().catch(() => {});

    // GSAP entrance for title
    const title = activeSlide.querySelector(".hero-title");
    if (title) {
      gsap.killTweensOf(title);
      gsap.fromTo(title,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );
    }

    // GSAP entrance for button (staggered after title)
    const btn = activeSlide.querySelector(".hero-btn");
    if (btn) {
      gsap.killTweensOf(btn);
      gsap.fromTo(btn,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power2.out", delay: 0.45 }
      );
    }
  }, []);

  const handleVideoEnd = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setIsFirstSlide(swiper.realIndex === 0);
  }, []);

  // Trigger first slide on mount
  useEffect(() => {
    const t = setTimeout(() => {
      if (swiperRef.current) activateSlide(swiperRef.current);
    }, 150);
    return () => clearTimeout(t);
  }, [activateSlide]);

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        speed={900}
        grabCursor
        touchRatio={1}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionEnd={activateSlide}
        className="w-full h-full hero-swiper"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Lazy-loaded video — src set on demand via data-src */}
              <video
                className="hero-video w-full h-full object-cover"
                data-src={slide.src}
                poster={slide.poster}
                muted
                playsInline
                preload="none"
                onEnded={handleVideoEnd}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65 z-10" />

              {/* Content — animated by GSAP per slide, starts invisible */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-7 sm:gap-10 px-5 text-center">
                <h1
                  className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-snug drop-shadow-2xl tracking-wide"
                  style={{ opacity: 0 }}
                >
                  {slide.title}
                </h1>

                <div className="hero-btn" style={{ opacity: 0 }}>
                  <Link
                    to={`/project/${slide.id}`}
                    className="inline-block px-10 sm:px-14 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/50 hover:bg-white hover:text-black text-white font-semibold text-base sm:text-lg tracking-widest transition-all duration-300"
                  >
                    تفاصيل
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Finger swipe indicator — first slide only */}
      <SwipeIndicator visible={isFirstSlide} />
    </main>
  );
}
