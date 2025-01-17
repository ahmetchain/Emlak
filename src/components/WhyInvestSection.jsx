import {
  Shield,
  Award,
  Clock,
  Users,
  Building2,
  Handshake,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

export default function WhyInvestSection() {
  const reasons = [
    {
      icon: <Handshake size={40} />,
      title: "سنكون بمثابة شريكك التجاري العقاري الموثوق به في تركيا.",
    },
    {
      icon: <Shield size={40} />,
      title: "هناك شخص يحاول العثور على الأفضل والأكثر ربحية بالنسبة لك",
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "سنعمل كموظفين عقاريين تثق بهم للعمل لديك في تركيا.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "جميع عملياتنا مبنية على الثقة المتبادلة والحلال.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Başlık Kısmı */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          لماذا تثق بنا؟
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          نحن هنا لتقديم الدعم الكامل كوسيط عقاري موثوق به في تركيا، مما يسهل
          عليكم جميع مراحل الاستثمار العقاري.
        </p>
      </div>

      {/* Özellikler Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                <div className="bg-black/5 p-4 rounded-full">
                  <div className="text-black">{reason.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 flex-1">
                  {reason.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Kısım CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            نحن هنا لدعمكم خلال جميع مراحل استثماراتكم العقارية وضمان تحقيق
            أهدافكم بكل ثقة.
          </p>
          <a
            href="https://wa.me/905436535134"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold  hover:bg-black/90 transition-all duration-300"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}
