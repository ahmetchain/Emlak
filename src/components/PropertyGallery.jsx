import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import İzmir from "../assets/izmir.jpg";
import { Heart } from 'lucide-react';

export default function PropertyGallery() {
  const properties = [
    { 
      id: 1, 
      city: "İzmir", 
      image: İzmir,
      price: "₺4.250.000",
      details: "3+1 | 165m² | Deniz Manzaralı"
    },
    { 
      id: 2, 
      city: "İstanbul", 
      image: İzmir,
      price: "₺6.850.000",
      details: "4+1 | 185m² | Boğaz Manzaralı"
    },
    { 
      id: 3, 
      city: "Ankara", 
      image: İzmir,
      price: "₺3.750.000",
      details: "3+1 | 155m² | Site İçi"
    },
    { 
      id: 4, 
      city: "Antalya", 
      image: İzmir,
      price: "₺5.150.000",
      details: "2+1 | 125m² | Denize Sıfır"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#1b1b1b] to-[#2d2d2d]">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          Öne Çıkan Projelerimiz
        </h2>
        <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Türkiye'nin en prestijli lokasyonlarında, modern mimari ve lüks yaşam standartlarını bir araya getiren özel projelerimiz
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
          "Hayalinizdeki Eve Bir Adım Uzaktasınız"
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Uzman danışmanlarımız ile sizin için en uygun evi bulmanıza yardımcı oluyoruz
        </p>
      </div>
    </section>
  );
}

// Property Card Component
function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl group">
      {/* Image Container */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={property.image}
          alt={property.city}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-white/90 text-black px-4 py-2 rounded-full font-semibold">
          {property.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{property.city}</h3>
        <p className="text-gray-600 mb-4">{property.details}</p>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href="/gallery"
            className="flex-1 bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Detaylar
          </a>
          <button
            className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
