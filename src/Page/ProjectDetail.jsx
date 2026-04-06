import { useParams, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MapPin, BedDouble, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { getProjectById } from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import "swiper/css";
import "swiper/css/navigation";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white">
        <p className="text-2xl text-gray-500">المشروع غير موجود</p>
        <Link to="/projects" className="px-6 py-3 bg-gray-900 text-white rounded-lg">
          العودة إلى المشاريع
        </Link>
      </div>
    );
  }

  // All images: slides first, then any extras (no text)
  const allImages = [
    ...project.slides,
    ...(project.extraImages || []).map((img) => ({ image: img })),
  ];

  // Clamp text index — extras reuse the last slide's text
  const textIdx = Math.min(activeIndex, project.slides.length - 1);
  const currentSlide = project.slides[textIdx];

  return (
    <div className="min-h-screen bg-white">
      <Header page="projects" />

      {/* ── HERO IMAGE ──────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(260px, 52vw, 620px)" }}>
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* ── INFO BLOCK (white, below hero) ──────────────── */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-8 sm:py-12 max-w-5xl">
        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm mb-6 transition-colors"
        >
          <ArrowRight size={14} />
          <span>جميع المشاريع</span>
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-950 leading-tight mb-4 text-right">
          {project.title}
        </h1>

        {/* Location */}
        <div className="flex items-center justify-end gap-2 text-gray-500 text-sm sm:text-base mb-3">
          <span>{project.location}</span>
          <MapPin size={15} className="text-gray-400" />
        </div>

        {/* Room types */}
        {project.roomTypes && (
          <div className="flex items-center justify-end gap-2 text-gray-600 text-sm sm:text-base mb-3">
            <span className="font-medium">{project.roomTypes}</span>
            <BedDouble size={16} className="text-gray-400" />
          </div>
        )}

        {/* Subtitle / tags */}
        {project.subtitle && (
          <p className="text-gray-400 text-sm sm:text-base text-right leading-relaxed mb-6">
            {project.subtitle}
          </p>
        )}

        {/* Intro description (first slide desc) */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed sm:leading-loose text-right max-w-3xl ml-auto">
          {project.slides[0].description}
        </p>
      </section>

      {/* ── GALLERY + DARK TEXT (Meraas style) ─────────── */}
      <section className="w-full">
        {/* Swiper — peek next slide */}
        <Swiper
          modules={[Navigation]}
          navigation
          loop={allImages.length > 1}
          speed={600}
          grabCursor
          slidesPerView={1.12}
          spaceBetween={12}
          breakpoints={{ 768: { slidesPerView: 1.35, spaceBetween: 20 } }}
          onSlideChange={handleSlideChange}
          className="meraas-gallery-swiper"
          style={{ paddingRight: "0" }}
        >
          {allImages.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={slide.image}
                  alt={`${project.title} — ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dark static wrapper — only text animates inside */}
        <div className="bg-gray-950 px-5 sm:px-10 lg:px-20 py-10 sm:py-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={textIdx}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {currentSlide.headline && (
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-right leading-snug mb-5 max-w-3xl ml-auto">
                  {currentSlide.headline}
                </h2>
              )}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed sm:leading-loose text-right max-w-3xl ml-auto">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide counter — static */}
          <p className="text-gray-700 text-sm font-mono text-left mt-8">
            {String(activeIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            هل أنت مهتم بهذا المشروع؟
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10">
            تواصل معنا للحصول على مزيد من التفاصيل وترتيب جولة ميدانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905436535134"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <MessageCircle size={18} />
              تواصل عبر واتساب
            </a>
            <a
              href="tel:+905436535134"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 hover:border-gray-600 text-gray-900 font-semibold rounded-lg transition-colors duration-300"
            >
              <Phone size={18} />
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
