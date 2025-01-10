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
        <div className="max-w-[1000px] px-5 sm:px-10 lg:mx-[88px]">
          {/* Siyah arka plan ile yazıyı öne çıkar */}
          <div className="bg-black/75 p-4 sm:p-6 lg:p-10 shadow-lg rounded-lg">
            {/* Başlık */}
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight sm:leading-snug">
              حياة فاخرة بانتظارك في تركيا...
            </h1>

            {/* Alt Başlık */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-200 mb-8 leading-relaxed">
              بالنسبة للمستثمرين من قطر والمملكة العربية السعودية، نقوم بمعاينة
              المنازل في تركيا التي تناسب احتياجاتكم ونوفر لكم تجربة شراء سلسة
              ومريحة.
            </h2>

            {/* Butonlar */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="font-semibold px-6 py-3 bg-black hover:bg-black/90 text-white text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out shadow-lg rounded-lg"
                href="#iletisim"
              >
                Bizimle İletişime Geçin
              </a>
              <a
                className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out shadow-lg rounded-lg"
                href="#detayli-bilgi"
              >
                Detaylı Bilgi Alın
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
