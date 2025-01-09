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
      icon: <Plane size={24} />,
      title: "VIP Transfer Hizmeti",
      description: "Havalimanından özel araçlarımızla karşılama ve transfer hizmeti sunuyoruz.",
    },
    {
      id: 2,
      icon: <Hotel size={24} />,
      title: "Premium Konaklama",
      description: "Lüks otellerde konaklamanız için özel rezervasyon hizmeti sağlıyoruz.",
    },
    {
      id: 3,
      icon: <Home size={24} />,
      title: "Özel Portföy Sunumu",
      description: "Size özel seçilmiş prestijli gayrimenkul portföyümüzü profesyonel sunumlarla tanıtıyoruz.",
    },
    {
      id: 4,
      icon: <FileCheck size={24} />,
      title: "Hukuki Danışmanlık",
      description: "Uzman hukuk ekibimizle tüm yasal süreçleri güvenle yönetiyoruz.",
    },
    {
      id: 5,
      icon: <Flag size={24} />,
      title: "Vatandaşlık Süreci",
      description: "Yatırım yoluyla vatandaşlık başvurunuzda A'dan Z'ye destek sağlıyoruz.",
    },
    {
      id: 6,
      icon: <Briefcase size={24} />,
      title: "Yatırım Danışmanlığı",
      description: "En doğru yatırım kararları için profesyonel danışmanlık hizmeti sunuyoruz.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            Premium Hizmetlerimiz
          </h2>
          <p className="text-gray-600 text-lg">
            Gayrimenkul yatırım sürecinizde size özel, ayrıcalıklı hizmetler sunuyoruz.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-8 py-12 ${
                index !== services.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-black/5 rounded-full shrink-0">
                <div className="text-black">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>

              {/* Arrow Icon - Optional */}
              <div className="hidden md:flex flex-1 justify-end">
                <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Kısım */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <p className="text-xl text-gray-700 mb-8">
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
