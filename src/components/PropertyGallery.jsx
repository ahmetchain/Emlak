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
    <section className="py-16 bg-gradient-to-b from-[#1b1b1b] to-[#2d2d2d]">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          أبرز مشاريع تركيا
        </h2>
        <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto">
          اكتشفوا أجمل المشاريع العقارية التي تتميز بالتصاميم الحديثة والمواقع
          الفريدة في مختلف المدن التركية.
        </p>
      </div>

      {/* Desktop Gallery */}
      <div className="hidden md:block px-4 lg:px-32">
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
      </div>

      {/* Mobile Gallery */}
      <div className="md:hidden px-4">
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
      </div>

      {/* Subtitle */}
      <div className="text-center mt-16 mb-8 px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          "نحن هنا لتسهيل خطواتكم نحو الاستثمار في تركيا"
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          نقدم لكم الدعم اللازم لاختيار المشروع الأنسب لكم في أجمل المناطق
          التركية.
        </p>
      </div>
    </section>
  );
}

// Property Card Component
function PropertyCard({ property }) {
  return (
    <div className="bg-white  overflow-hidden shadow-xl group">
      {/* Image Container */}
      <div className="relative h-[300px] overflow-hidden">
        <img
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
          <a
            href="/gallery"
            className="flex-1 bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            تفاصيل
          </a>
        </div>
      </div>
    </div>
  );
}
