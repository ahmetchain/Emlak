import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Banner from "../assets/herosection.jpg";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative w-full h-[100vh] mb-20 overflow-hidden">
      {/* Background Overlay with Smooth Animation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-10"
          />
        )}
      </AnimatePresence>

      {/* Arkaplan görsel */}
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={Banner}
        alt="Emlak Hero Section Banner"
        className="w-full h-full object-cover object-center"
      />

      {/* İçerik */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-[1000px] px-5 sm:px-10 lg:mx-[88px]">
          {/* Siyah arka plan ile yazıyı öne çıkar */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-black/75 p-4 sm:p-6 lg:p-10 shadow-lg rounded-lg"
          >
            {/* Başlık */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight sm:leading-snug"
            >
              حياة فاخرة بانتظارك في تركيا...
            </motion.h1>

            {/* Alt Başlık */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-200 mb-8 leading-relaxed"
            >
              بالنسبة للمستثمرين من قطر، الكويت، والمملكة العربية السعودية، نقوم
              بمعاينة المنازل في تركيا التي تناسب احتياجاتكم ونوفر لكم تجربة
              شراء سلسة ومريحة.
            </motion.h2>

            {/* Butonlar */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="font-semibold px-6 py-3 bg-black hover:bg-black/90 text-white text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out shadow-lg rounded-lg"
                href="#iletisim"
              >
                Bizimle İletişime Geçin
              </a>
              <a
                className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out shadow-lg rounded-lg"
                href="#detayli-bilgi"
              >
                Detaylı Bilgi Alın
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
