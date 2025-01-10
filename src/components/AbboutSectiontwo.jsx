import { Flag, Globe, Users, Building } from "lucide-react";

export default function AboutSectiontwo() {
  const benefits = [
    {
      icon: <Flag size={24} />,
      title: "الجنسية التركية",
      description:
        "الحصول على الجنسية التركية من خلال استثمار عقاري بقيمة 400,000 دولار أمريكي أو أكثر.",
    },
    {
      icon: <Globe size={24} />,
      title: "السفر بدون تأشيرة",
      description: "إمكانية السفر بدون تأشيرة إلى 116 دولة.",
    },
    {
      icon: <Users size={24} />,
      title: "حقوق الأسرة",
      description: "تشمل الجنسية الزوجة والأطفال تحت سن 18 عاماً.",
    },
    {
      icon: <Building size={24} />,
      title: "فرص الاستثمار",
      description: "فرصة استثمارية في السوق العقاري التركي المتنامي.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            الجنسية التركية
            <span className="block mt-2 text-3xl sm:text-4xl text-gray-300">
              فرصة استثمارية
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            من خلال استثمارك العقاري، لن تحصل فقط على منزل، بل ستحصل أيضاً على
            فرصة لحياة جديدة من خلال الجنسية التركية.
          </p>
        </div>

        {/* Avantajlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mb-6">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Kısım - CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            نحن بجانبك لمساعدتك في عملية الحصول على الجنسية التركية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              احصل على معلومات تفصيلية
            </a>
            <a
              href="#vatandaslik-sureci"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              عملية الجنسية
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
