import {
  Plane,
  Hotel,
  Home,
  FileCheck,
  Flag,
  Car,
  Briefcase,
  Key,
  HeartHandshake
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: <Plane size={28} />,
      title: "VIP Transfer Hizmeti",
      description: "Havalimanından özel araçlarımızla karşılama ve transfer hizmeti sunuyoruz.",
    },
    {
      id: 2,
      icon: <Hotel size={28} />,
      title: "Premium Konaklama",
      description: "Lüks otellerde konaklamanız için özel rezervasyon hizmeti sağlıyoruz.",
    },
    {
      id: 3,
      icon: <Home size={28} />,
      title: "Özel Portföy Sunumu",
      description: "Size özel seçilmiş prestijli gayrimenkul portföyümüzü profesyonel sunumlarla tanıtıyoruz.",
    },
    {
      id: 4,
      icon: <FileCheck size={28} />,
      title: "Hukuki Danışmanlık",
      description: "Uzman hukuk ekibimizle tüm yasal süreçleri güvenle yönetiyoruz.",
    },
    {
      id: 5,
      icon: <Flag size={28} />,
      title: "Vatandaşlık Süreci",
      description: "Yatırım yoluyla vatandaşlık başvurunuzda A'dan Z'ye destek sağlıyoruz.",
    },
    {
      id: 6,
      icon: <Briefcase size={28} />,
      title: "Yatırım Danışmanlığı",
      description: "En doğru yatırım kararları için profesyonel danışmanlık hizmeti sunuyoruz.",
    },
    {
      id: 7,
      icon: <Key size={28} />,
      title: "Anahtar Teslim Hizmet",
      description: "Satın alma sürecinden sonra tüm yerleşim sürecinizde yanınızdayız.",
    },
    {
      id: 8,
      icon: <HeartHandshake size={28} />,
      title: "Satış Sonrası Destek",
      description: "Uzun vadeli iş ortağınız olarak satış sonrası tüm ihtiyaçlarınızda yanınızdayız.",
    },
    {
      id: 9,
      icon: <Car size={28} />,
      title: "Özel Şoför Hizmeti",
      description: "Emlak gezilerinizde lüks araçlarımızla özel şoför hizmeti sağlıyoruz.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
          Premium Hizmetlerimiz
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Gayrimenkul yatırım sürecinizde size özel, ayrıcalıklı hizmetler sunuyoruz.
          Her adımda profesyonel ekibimizle yanınızdayız.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-black/5 rounded-full mb-6 group-hover:bg-black/10 transition-colors mx-auto">
                <div className="text-black">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Kısım */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Sizin için en uygun yatırım fırsatlarını değerlendirmek üzere
            uzman ekibimizle görüşmek ister misiniz?
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
          >
            Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
}
