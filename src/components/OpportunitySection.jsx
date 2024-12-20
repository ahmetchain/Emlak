import Ev3 from "../assets/Basliksiz-1-1.png";

export default function OpportunitySection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16 ">
      <div className="w-full lg:w-1/2 ">
        <img
          src={Ev3}
          alt="Fırsat Görseli"
          className="w-full h-auto object-cover object-center"
        />
      </div>

      <div className="w-full lg:w-1/3 flex flex-col justify-center ml-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-snug">
          OM GROUP İLE, YAŞAM GÜÇLENİYOR
        </h2>

        <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          OM Group olarak; çağdaş Türkiye’nin modern yüzünü yansıtan hatırı
          sayılır, nitelikli, güçlü, güvenilir ve ayrıcalıklı projeleri
          sürdürülebilir kılmak, birçok insana ulaştırmak bize sonsuz bir
          mutluluk ve gurur yaşatmaktadır.
          <br /> <br /> Meslek aşkımızla, doğa ve insan sevgimizle, yenilikçi
          kadromuzla hayallerin ötesini tasarlıyoruz ve hayata geçiriyoruz.
        </p>
        <a
          href="#iletisim"
          className="flex items-center justify-center w-[200px] h-[60px] bg-black  text-white text-lg just font-semibold text-center transition-all duration-300"
        >
          <p>İletişime Geç</p>
        </a>
      </div>
    </section>
  );
}
