export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: "✈️",
      title: "Havaalanında/Otelde Karşılıyoruz",
      description: "Yatırım yolculuğunuza sıcak bir karşılama ile başlıyoruz.",
    },
    {
      id: 2,
      icon: "🏨",
      title: "Otel Rezervasyonu Konusunda Yardım Ediyoruz",
      description:
        "Konaklamanız için en uygun otel rezervasyonunu ayarlıyoruz.",
    },
    {
      id: 3,
      icon: "🏡",
      title: "Seçtiğiniz Mülklerin Sunumu",
      description:
        "Beğendiğiniz mülklerin sunumunu detaylı bir şekilde gerçekleştiriyoruz.",
    },
    {
      id: 4,
      icon: "📄",
      title: "Tüm Belgeleri Kontrol Ediyoruz",
      description:
        "İşlemin tüm aşamalarında size eşlik ederek belgelerinizi kontrol ediyoruz.",
    },
    {
      id: 5,
      icon: "📜",
      title: "Vatandaşlık İşlemlerine Yardımcı Oluyoruz",
      description: "Yatırım yoluyla vatandaşlık almanıza destek sağlıyoruz.",
    },
    {
      id: 6,
      icon: "🛫",
      title: "Havaalanına Kadar Eşlik Ediyoruz",
      description:
        "İşlemin tamamlanmasının ardından sizi havaalanına kadar yalnız bırakmıyoruz.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          Yatırım Yolculuğunuzda Yanınızdayız
        </h2>
        <p className="sm:text-lg px-3 text-gray-600">
          Bu adım adım süreçte size nasıl yardımcı olduğumuzu öğrenin.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-[270px]">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center text-center bg-white p-6  shadow-lg  transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-5xl text-green-500 mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
