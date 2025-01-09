import { useState } from "react";
import Select from "react-select";

export default function ContactForm() {
  // Şehir seçenekleri
  const cityOptions = [
    { value: "istanbul", label: "İstanbul" },
    { value: "ankara", label: "Ankara" },
    { value: "izmir", label: "İzmir" },
    { value: "antalya", label: "Antalya" },
    { value: "bursa", label: "Bursa" },
    { value: "mugla", label: "Muğla" },
    { value: "aydin", label: "Aydın" },
    { value: "bodrum", label: "Bodrum" },
  ];

  // Durum seçenekleri
  const statusOptions = [
    { value: "for_sale", label: "Satılık" },
    { value: "for_rent", label: "Kiralık" },
    { value: "for_daily_rent", label: "Günlük Kiralık" },
    { value: "for_seasonal", label: "Sezonluk" },
  ];

  const [formData, setFormData] = useState({
    email: "",
    cities: [],
    propertyType: "",
    roomCount: "",
    statuses: [],
    minPrice: "",
    maxPrice: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Şehir seçimi için özel handle fonksiyonu
  const handleCityChange = (selectedOptions) => {
    setFormData({
      ...formData,
      cities: selectedOptions || [], // null check
    });
  };

  // Durum seçimi için özel handle fonksiyonu
  const handleStatusChange = (selectedOptions) => {
    setFormData({
      ...formData,
      statuses: selectedOptions || [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Talebiniz başarıyla gönderildi!");
  };

  // React Select için özel stiller
  const customStyles = {
    control: (base) => ({
      ...base,
      padding: "2px",
      borderColor: "#e5e7eb",
      "&:hover": {
        borderColor: "#e5e7eb"
      }
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#f3f4f6",
      borderRadius: "4px",
      padding: "2px"
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "#374151",
      fontWeight: "500"
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "#374151",
      "&:hover": {
        backgroundColor: "#e5e7eb",
        color: "#000"
      }
    })
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          Size Özel Emlak Araması
        </h2>
        <p className="sm:text-lg px-3 pt-2 text-gray-600 max-w-2xl mx-auto">
          Hayalinizdeki evi bulmak için formu doldurun, uzmanlarımız size özel seçeneklerle sizinle iletişime geçsin.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Email - Tam Genişlik */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              E-posta Adresiniz <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="ornek@email.com"
              required
            />
          </div>

          {/* Şehir Seçimi - Tam Genişlik */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Şehir(ler) (Opsiyonel)
            </label>
            <Select
              isMulti
              name="cities"
              options={cityOptions}
              value={formData.cities}
              onChange={handleCityChange}
              placeholder="Şehir seçin..."
              noOptionsMessage={() => "Şehir bulunamadı"}
              styles={customStyles}
              className="text-sm"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: '#3b82f6',
                  primary25: '#eff6ff',
                  primary50: '#dbeafe',
                }
              })}
            />
            <p className="mt-1 text-sm text-gray-500">
              Birden fazla şehir seçebilirsiniz
            </p>
          </div>

          {/* Sol Kolon */}
          <div className="space-y-6">
            {/* Konut Tipi */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Konut Tipi (Opsiyonel)
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">Konut Tipi Seçin</option>
                <option value="Apartment">Daire</option>
                <option value="Villa">Villa</option>
                <option value="Office">Ofis</option>
                <option value="Land">Arsa</option>
                <option value="Shop">Dükkan</option>
              </select>
            </div>

            {/* Minimum Fiyat */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Minimum Fiyat (Opsiyonel)
              </label>
              <input
                type="number"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="₺"
              />
            </div>
          </div>

          {/* Sağ Kolon */}
          <div className="space-y-6">
            {/* Oda Sayısı */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Oda Sayısı (Opsiyonel)
              </label>
              <select
                name="roomCount"
                value={formData.roomCount}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">Oda Sayısı Seçin</option>
                <option value="1+0">1+0</option>
                <option value="1+1">1+1</option>
                <option value="2+1">2+1</option>
                <option value="3+1">3+1</option>
                <option value="4+1">4+1</option>
                <option value="5+1">5+1 ve üzeri</option>
              </select>
            </div>

            {/* Maksimum Fiyat */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Maksimum Fiyat (Opsiyonel)
              </label>
              <input
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="₺"
              />
            </div>
          </div>

          {/* Durum - Tam Genişlik */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Durum(lar) (Opsiyonel)
            </label>
            <Select
              isMulti
              name="statuses"
              options={statusOptions}
              value={formData.statuses}
              onChange={handleStatusChange}
              placeholder="Durum seçin..."
              noOptionsMessage={() => "Durum bulunamadı"}
              styles={customStyles}
              className="text-sm"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: '#3b82f6',
                  primary25: '#eff6ff',
                  primary50: '#dbeafe',
                }
              })}
            />
            <p className="mt-1 text-sm text-gray-500">
              Birden fazla durum seçebilirsiniz
            </p>
          </div>

          {/* Mesaj Alanı - Tam Genişlik */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Özel Mesajınız (Opsiyonel)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px]"
              placeholder="Eklemek istediğiniz özel notları buraya yazabilirsiniz..."
            />
          </div>

          {/* Gönder Butonu - Tam Genişlik */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
            >
              Talebi Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
