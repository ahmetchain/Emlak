export default function Card({ image, info }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Görsel */}
      <img src={image} alt={info} className="w-full h-48 object-cover" />
      {/* Bilgi */}
      <div className="p-4">
        <p className="text-gray-800 font-medium">{info}</p>
      </div>
    </div>
  );
}
