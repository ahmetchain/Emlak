export default function Card({ image, info }) {
  const { roomCount, propertyType, city, contactNumber } = info;

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
        <p className="text-sm text-gray-600 mb-2">المدينة: {city}</p>
        {/* İletişim */}
        <p className="text-sm text-gray-600">الاتصال: {contactNumber}</p>
      </div>
    </div>
  );
}
