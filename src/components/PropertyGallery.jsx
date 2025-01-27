import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mustakil from "../assets/villa/10.jpeg";
import villa from "../assets/villa/1.jpeg";
import rezidans from "../assets/rezidans/5.jpg";
import rezidans1 from "../assets/rezidans/7.jpg";
import rezidans2 from "../assets/rezidans/9.jpg";
import { motion } from "framer-motion";

export default function PropertyGallery() {
  const properties = [
    {
      id: 1,
      image: mustakil,
    },
    {
      id: 2,
      image: rezidans,
    },
    {
      id: 3,
      image: villa,
    },
    {
      id: 4,
      image: rezidans1,
    },
    {
      id: 5,
      image: rezidans2,
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-b from-[#1b1b1b] to-[#2d2d2d]"
    >
      {/* Section Title */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold text-white mb-4"
        >
          أبرز مشاريع تركيا
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto"
        >
          اكتشفوا أجمل المشاريع العقارية التي تتميز بالتصاميم الحديثة والمواقع
          الفريدة في مختلف المدن التركية.
        </motion.p>
      </motion.div>

      {/* Desktop Gallery */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:block px-4 lg:px-32"
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Mobile Gallery */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:hidden px-4"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Subtitle */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16 mb-8 px-4"
      >
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          "نحن هنا لتسهيل خطواتكم نحو الاستثمار في تركيا"
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          نقدم لكم الدعم اللازم لاختيار المشروع الأنسب لكم في أجمل المناطق
          التركية.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

// Property Card Component
function PropertyCard({ property }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white overflow-hidden shadow-xl group"
    >
      {/* Image Container */}
      <div className="relative h-[300px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={property.image}
          alt={property.city}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/gallery"
            className="flex-1 bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            تفاصيل
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
