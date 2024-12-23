import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    propertyType: "",
    roomCount: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you can send the data to an API or handle the email sending process
    alert("Your request has been submitted successfully!");
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Özel İsteğinizi Şimdi Gönderin
        </h2>
        <p className="sm:text-lg px-3 pt-2 text-gray-600">
          Sizin için en uygun konutu bulmamıza yardımcı olun.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white p-8  shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Email */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-600 font-semibold mb-2">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-600 font-semibold mb-2">
              Şehir Seçin
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:ring-gray-300"
              required
            >
              <option value="" disabled>
                Şehir Seçin
              </option>
              <option value="Istanbul">Istanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="Izmir">Izmir</option>
              <option value="Antalya">Antalya</option>
              <option value="Bursa">Bursa</option>
              {/* Add more cities */}
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-gray-600 font-semibold mb-2">
              Konut Tipi
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:ring-gray-300"
              required
            >
              <option value="" disabled>
                Konut Tipi Seçin
              </option>
              <option value="Apartment">Daire</option>
              <option value="Villa">Villa</option>
              <option value="Office">Ofis</option>
              {/* Add more property types */}
            </select>
          </div>

          {/* Room Count */}
          <div>
            <label className="block text-gray-600 font-semibold mb-2">
              Oda Sayısı
            </label>
            <select
              name="roomCount"
              value={formData.roomCount}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:ring-gray-300"
              required
            >
              <option value="" disabled>
                Oda Sayısı Seçin
              </option>
              <option value="1+1">1+1</option>
              <option value="2+1">2+1</option>
              <option value="3+1">3+1</option>
              <option value="4+1">4+1</option>
              {/* Add more room options */}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-600 font-semibold mb-2">
              Durum
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:ring-gray-300"
              required
            >
              <option value="" disabled>
                Durum Seçin
              </option>
              <option value="For Sale">Satılık</option>
              <option value="For Rent">Kiralık</option>
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label className="block text-gray-600 font-semibold mb-2">
              Min Fiyat
            </label>
            <input
              type="number"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Minimum Fiyat"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-gray-600 font-semibold mb-2">
              Max Fiyat
            </label>
            <input
              type="number"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Maksimum Fiyat"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black  text-white text-lg font-semibold  hover:bg-black/90 transition-all duration-300"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
