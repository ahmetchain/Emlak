import Card from "./Card";

export default function Category({ title, properties }) {
  return (
    <div className="mb-12">
      {/* Kategori Başlığı */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} image={property.image} info={property.info} />
        ))}
      </div>
    </div>
  );
}
