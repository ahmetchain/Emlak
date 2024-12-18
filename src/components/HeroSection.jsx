import Banner from "../assets/herosection.jpg";

export default function HeroSection() {
  return (
    <main className="relative w-full h-[100vh] mb-20 overflow-hidden">
      {/* Siyah degrade efekt */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>
      {/* Arkaplan görsel */}
      <img
        src={Banner}
        alt="Emlak Hero Section Banner"
        className="w-full h-full object-cover object-center"
      />
      {/* İçerik */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-[1000px] px-5 sm:px-10 lg:mx-[88px] ">
          {/* Siyah arka plan ile yazıyı öne çıkar */}
          <div className="bg-black/80 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Türkiye’deki{" "}
              <span className="text-gray-300">Emlak Yatırımlarınız</span> İçin
              Profesyonel Hizmet
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-8">
              Katar ve Suudi Arabistanlı yatırımcılar için, Türkiye’de evleri
              yerinde inceleyip tüm koşulları hazırlıyor, siz gelmeden zahmetsiz
              bir satın alma deneyimi sağlıyoruz.
            </h2>
            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="rounded-full font-semibold px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white text-base sm:text-lg md:text-xl transition-all duration-300 ease-in-out shadow-lg"
                href="#iletisim"
              >
                Bizimle İletişime Geçin
              </a>
              <a
                className="rounded-full px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white text-base sm:text-lg md:text-xl transition-all duration-300 ease-in-out shadow-lg"
                href="#detayli-bilgi"
              >
                Detaylı Bilgi Alın
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
