export default function Card({ image, info }) {
  const { roomCount, propertyType, city, avgPrice, contactNumber } = info;

  return (
    <div className="bg-white  shadow-lg group overflow-hidden ">
      {/* Görsel */}
      <img
        src={image}
        alt={`${roomCount}, ${propertyType}, ${city}`}
        className="w-full h-[300px] object-cover "
      />
      {/* Bilgi */}
      <div className="p-4">
        {/* Oda Sayısı ve Konut Tipi */}
        <h3 className="text-lg font-bold text-gray-800">
          {roomCount} - {propertyType}
        </h3>
        {/* Şehir */}
        <p className="text-sm text-gray-600 mb-2">Şehir: {city}</p>
        {/* İletişim */}
        <p className="text-sm text-gray-600">İletişim: {contactNumber}</p>
      </div>
    </div>
  );
}
