import {
  Plane,
  Hotel,
  Home,
  FileCheck,
  Flag,
  Car,
  Briefcase,
  Key,
  HeartHandshake,
  CheckCircle,
  ClipboardList,
  Handshake,
  MapPin,
  ShoppingBag,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: <Home size={24} />,
      title: "نجد جميع المنازل التي تناسب معاييرك",
      description:
        "أولاً، نقوم بتحديد جميع المنازل التي تتوافق مع معاييرك المطلوبة.",
    },
    {
      id: 2,
      icon: <CheckCircle size={24} />,
      title: "نقوم بفحص وتقييم جميع المنازل",
      description:
        "نقوم بفحص وتقييم جميع المنازل التي وجدناها لك لضمان جودتها.",
    },
    {
      id: 3,
      icon: <ClipboardList size={24} />,
      title: "نرسل لك جميع التقارير والمعلومات",
      description:
        "إذا كانت المنازل تلبي جميع المعايير، نرسل لك جميع التقارير والمعلومات.",
    },
    {
      id: 4,
      icon: <Handshake size={24} />,
      title: "التفاوض نيابة عنك",
      description:
        "في حال أعجبك المنزل، نقوم بالتفاوض نيابة عنك إذا لزم الأمر.",
    },
    {
      id: 5,
      icon: <Plane size={24} />,
      title: "دعوتك إلى تركيا",
      description: "إذا قررت الشراء، ندعوك لزيارة تركيا لإتمام العملية.",
    },
    {
      id: 6,
      icon: <Car size={24} />,
      title: "استقبالك في المطار",
      description: "نستقبلك في المطار بسياراتنا الخاصة لضمان راحتك.",
    },
    {
      id: 7,
      icon: <Hotel size={24} />,
      title: "الدعم في حجز الفنادق",
      description: "نوفر لك الدعم في حجز الفنادق لضمان إقامة مريحة.",
    },
    {
      id: 8,
      icon: <MapPin size={24} />,
      title: "جولة ميدانية معك",
      description: "عند وصولك، نقوم بجولة ميدانية معك لزيارة المنازل المناسبة.",
    },
    {
      id: 9,
      icon: <FileCheck size={24} />,
      title: "دعم كامل أثناء عملية الشراء",
      description: "نرافقك خلال جميع خطوات الشراء ونوفر لك الدعم اللازم.",
    },
    {
      id: 10,
      icon: <HeartHandshake size={24} />,
      title: "المساعدة بعد الشراء",
      description:
        "حتى بعد إتمام عملية الشراء، نحن هنا لمساعدتك في أي استفسار.",
    },
    {
      id: 11,
      icon: <Flag size={24} />,
      title: "المساعدة في الوثائق والإجراءات",
      description: "نرافقك لتوفير جميع الوثائق والإجراءات المطلوبة.",
    },
    {
      id: 12,
      icon: <Briefcase size={24} />,
      title: "عمولة بنسبة 5% فقط",
      description:
        "لا يتم طلب أي رسوم أثناء العملية، ويتم تحصيل عمولة بنسبة 5% فقط بعد البيع.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            خدماتنا المميزة
          </h2>
          <p className="text-gray-600 text-lg">
            نقدم لكم خدمات حصرية ومميزة خلال عملية الاستثمار العقاري.
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
                index !== services.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-black/5 rounded-full shrink-0">
                <div className="text-black">{service.icon}</div>
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
            هل ترغب في التواصل مع فريقنا المتخصص لتقييم أفضل فرص الاستثمار؟
          </p>
          <a
            href="https://wa.me/905436535134"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
          >
            احجز موعدًا
          </a>
        </div>
      </div>
    </section>
  );
}
