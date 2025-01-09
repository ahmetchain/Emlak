import { Shield, Award, Clock, Users, Building2, Handshake } from 'lucide-react';

export default function WhyInvestSection() {
  const reasons = [
    {
      icon: <Shield size={32} />,
      title: "Güvenilir Yatırım",
      description: "20 yılı aşkın tecrübemizle, yatırımlarınızı güvenle değerlendiriyoruz."
    },
    {
      icon: <Award size={32} />,
      title: "Kaliteli Hizmet",
      description: "Sektörde kalite standartlarını belirleyen öncü yaklaşımımız."
    },
    {
      icon: <Clock size={32} />,
      title: "Hızlı Süreç",
      description: "Profesyonel ekibimizle tüm işlemlerinizi hızla sonuçlandırıyoruz."
    },
    {
      icon: <Users size={32} />,
      title: "Müşteri Memnuniyeti",
      description: "Binlerce mutlu müşteri ile güçlenen bir başarı hikayesi."
    },
    {
      icon: <Building2 size={32} />,
      title: "Prestijli Projeler",
      description: "Türkiye'nin en değerli lokasyonlarında seçkin projeler."
    },
    {
      icon: <Handshake size={32} />,
      title: "Güçlü İşbirlikleri",
      description: "Sektörün önde gelen markalarıyla stratejik ortaklıklar."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Başlık Kısmı */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
          Neden Bize Güvenmelisiniz?
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          OM Group olarak, gayrimenkul sektöründe fark yaratan yaklaşımımız ve güvenilir hizmet anlayışımızla
          20 yıldır müşterilerimizin hayallerini gerçeğe dönüştürüyoruz.
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
                  <div className="text-black">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Kısım CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Gayrimenkul yatırımlarınızda doğru adımlar atmanız için
            uzman ekibimiz yanınızda.
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
          >
            Bizimle İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
}
