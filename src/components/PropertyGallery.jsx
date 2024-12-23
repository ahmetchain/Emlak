import İzmir from "../assets/izmir.jpg";

export default function PropertyGallery() {
  const properties = [
    { id: 1, city: "Izmir", image: İzmir },
    { id: 2, city: "Istanbul", image: İzmir },
    { id: 3, city: "Ankara", image: İzmir },
    { id: 4, city: "Bursa", image: İzmir },
    { id: 5, city: "Antalya", image: İzmir },
    { id: 6, city: "Trabzon", image: İzmir },
  ];

  return (
    <section className="py-16 bg-[#1b1b1b]">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-5xl font-bold text-white mb-4">
          Türkiyeden Modern Konutlar
        </h2>
        <p className=" text-sm sm:text-lg text-gray-400">
          Türkiye'nin en güzel şehirlerindeki modern konutlar
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-32">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative group bg-gray-800 shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={property.image}
              alt={property.city}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Black Filter and Button */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href="/gallery"
                className="px-6 py-3 bg-black/90 text-white font-semibold text-lg  hover:bg-black/80 transition-all"
              >
                Galeri
              </a>
            </div>

            {/* Black Box with City Name */}
            <div className="absolute bottom-0 right-0 bg-black/90 text-white sm:text-lg font-semibold px-4 py-2">
              {property.city}
            </div>
          </div>
        ))}
      </div>

      {/* Subtitle */}
      <div className="text-center mb-8 mt-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 italic">
          Bir Yatırımdan Daha Fazlası
        </h2>
      </div>
    </section>
  );
}
