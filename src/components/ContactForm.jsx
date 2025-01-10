import { useState } from "react";
import Select from "react-select";

export default function ContactForm() {
  // Şehir seçenekleri
  const cityOptions = [
    { value: "istanbul", label: "istanbul" },
    { value: "izmir", label: "izmir" },
    { value: "antalya", label: "antalya" },
    { value: "mugla", label: "mugla" },
  ];

  // Durum seçenekleri
  const statusOptions = [
    { value: "for_sale", label: "للبيع" },
    { value: "for_rent", label: "للإيجار" },
    { value: "for_daily_rent", label: "إيجار يومي" },
    { value: "for_seasonal", label: "إيجار موسمي" },
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

  const handleCityChange = (selectedOptions) => {
    setFormData({
      ...formData,
      cities: selectedOptions || [],
    });
  };

  const handleStatusChange = (selectedOptions) => {
    setFormData({
      ...formData,
      statuses: selectedOptions || [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("تم إرسال طلبك بنجاح!");
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      padding: "2px",
      borderColor: "#e5e7eb",
      "&:hover": {
        borderColor: "#e5e7eb",
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#f3f4f6",
      borderRadius: "4px",
      padding: "2px",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "#374151",
      fontWeight: "500",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "#374151",
      "&:hover": {
        backgroundColor: "#e5e7eb",
        color: "#000",
      },
    }),
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          البحث عن عقار يناسبك
        </h2>
        <p className="sm:text-lg px-3 pt-2 text-gray-600 max-w-2xl mx-auto">
          املأ النموذج للعثور على المنزل الذي تحلم به، وسنتواصل معك لتقديم
          الخيارات المناسبة.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Email */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              بريدك الإلكتروني <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="example@email.com"
              required
            />
          </div>

          {/* Şehir Seçimi */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              المدن (اختياري)
            </label>
            <Select
              isMulti
              name="cities"
              options={cityOptions}
              value={formData.cities}
              onChange={handleCityChange}
              placeholder="اختر المدن..."
              noOptionsMessage={() => "لا توجد مدينة"}
              styles={customStyles}
              className="text-sm"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "#3b82f6",
                  primary25: "#eff6ff",
                  primary50: "#dbeafe",
                },
              })}
            />
            <p className="mt-1 text-sm text-gray-500">
              يمكنك اختيار أكثر من مدينة
            </p>
          </div>

          {/* Sol Kolon */}
          <div className="space-y-6">
            {/* Konut Tipi */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                نوع العقار (اختياري)
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">اختر نوع العقار</option>
                <option value="Apartment">شقة</option>
                <option value="Villa">فيلا</option>
                <option value="Office">مكتب</option>
                <option value="Land">أرض</option>
                <option value="Shop">محل تجاري</option>
              </select>
            </div>

            {/* Minimum Fiyat */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                الحد الأدنى للسعر (اختياري)
              </label>
              <input
                type="number"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="﷼"
              />
            </div>
          </div>

          {/* Sağ Kolon */}
          <div className="space-y-6">
            {/* Oda Sayısı */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                عدد الغرف (اختياري)
              </label>
              <select
                name="roomCount"
                value={formData.roomCount}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">اختر عدد الغرف</option>
                <option value="1+0">1+0</option>
                <option value="1+1">1+1</option>
                <option value="2+1">2+1</option>
                <option value="3+1">3+1</option>
                <option value="4+1">4+1</option>
                <option value="5+1">5+1 أو أكثر</option>
              </select>
            </div>

            {/* Maksimum Fiyat */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                الحد الأقصى للسعر (اختياري)
              </label>
              <input
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="﷼"
              />
            </div>
          </div>

          {/* Durum */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              الحالة (اختياري)
            </label>
            <Select
              isMulti
              name="statuses"
              options={statusOptions}
              value={formData.statuses}
              onChange={handleStatusChange}
              placeholder="اختر الحالة..."
              noOptionsMessage={() => "لا توجد حالة"}
              styles={customStyles}
              className="text-sm"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "#3b82f6",
                  primary25: "#eff6ff",
                  primary50: "#dbeafe",
                },
              })}
            />
            <p className="mt-1 text-sm text-gray-500">
              يمكنك اختيار أكثر من حالة
            </p>
          </div>

          {/* Mesaj */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              رسالتك الخاصة (اختياري)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px]"
              placeholder="يمكنك كتابة ملاحظات إضافية هنا..."
            />
          </div>

          {/* Gönder Butonu */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
            >
              أرسل الطلب
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
