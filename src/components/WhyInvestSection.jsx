import {
  Shield,
  Award,
  Clock,
  Users,
  Building2,
  Handshake,
} from "lucide-react";

export default function WhyInvestSection() {
  const reasons = [
    {
      icon: <Shield size={32} />,
      title: "دعم استثماري آمن",
      description:
        "نعمل كوسيط موثوق بينكم وبين وكلاء العقارات لضمان تحقيق متطلباتكم بدقة.",
    },
    {
      icon: <Award size={32} />,
      title: "تواصل مع أفضل الوكلاء",
      description:
        "نقوم بالتنسيق مع وكلاء العقارات الذين تختارونهم لتلبية احتياجاتكم بشكل كامل.",
    },
    {
      icon: <Clock size={32} />,
      title: "إجراءات سريعة وسهلة",
      description: "نحرص على تسهيل جميع الإجراءات العقارية بسرعة وكفاءة.",
    },
    {
      icon: <Users size={32} />,
      title: "شراكة موثوقة",
      description:
        "نحن شركاؤكم في جميع خطوات عملية الاستثمار، من البداية حتى النهاية.",
    },
    {
      icon: <Building2 size={32} />,
      title: "توفير الخيارات المثلى",
      description:
        "نساعدكم في العثور على أفضل العروض العقارية بما يتناسب مع متطلباتكم.",
    },
    {
      icon: <Handshake size={32} />,
      title: "التزامنا بالشفافية",
      description: "نلتزم بالعمل بشفافية كاملة لضمان رضاكم التام.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Başlık Kısmı */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
          لماذا تثق بنا؟
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          نحن هنا لتقديم الدعم الكامل كوسيط عقاري موثوق به في تركيا، مما يسهل
          عليكم جميع مراحل الاستثمار العقاري.
        </p>
      </div>

      {/* Özellikler Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-black/5 p-4 rounded-full mb-6">
                  <div className="text-black">{reason.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Kısım CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            نحن هنا لدعمكم خلال جميع مراحل استثماراتكم العقارية وضمان تحقيق
            أهدافكم بكل ثقة.
          </p>
          <a
            href="https://wa.me/905436535134"
              target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}
