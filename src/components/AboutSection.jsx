import { Building2, Target, Users2 } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    {
      icon: <Building2 size={32} />,
      number: "1000+",
      text: "Tamamlanan Proje"
    },
    {
      icon: <Target size={32} />,
      number: "20+",
      text: "Yıllık Tecrübe"
    },
    {
      icon: <Users2 size={32} />,
      number: "5000+",
      text: "Mutlu Müşteri"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8">
            Biz <span className="text-black italic">Kimiz?</span>
          </h2>
          
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Yatırım ve yaşam alanlarınızı yeniden tanımlıyoruz. Modern yapılar, 
            estetik tasarımlar ve güvenilir hizmet anlayışıyla hayallerinizi gerçeğe 
            dönüştürmek için buradayız.
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="bg-black/5 p-4 rounded-full mb-4">
                  <div className="text-black">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">
                  {stat.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Kısım - Misyon */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-xl text-gray-700 italic">
            "Gayrimenkul sektöründe fark yaratan yaklaşımımız ve güvenilir hizmet anlayışımızla,
            müşterilerimizin hayallerini gerçeğe dönüştürüyoruz."
          </p>
          
          <div className="mt-8">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
  