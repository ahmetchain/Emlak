import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Category({ title, properties }) {
  return (
    <div className="mb-12">
      {/* Kategori Başlığı */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>

      {/* Desktop Slider */}
      <div className="hidden md:block">
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
              <Card image={property.image} info={property.info} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
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
              <Card image={property.image} info={property.info} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
