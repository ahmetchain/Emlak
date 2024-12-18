import { useState } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sabit WhatsApp Butonu */}
      <div className="fixed bottom-20 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Açılır WhatsApp Penceresi */}
      {isOpen && (
        <div className="fixed bottom-[170px] right-10 bg-white w-80 p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Konuşma Başlat
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Destek butonuna tıklayarak WhatsApp üzerinden hemen iletişime
            geçebilirsiniz. Ekibimiz size geri dönüş yapacaktır.
          </p>
          <a
            href="https://wa.me/901234567890"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            Destek Hattı
          </a>
        </div>
      )}
    </>
  );
}
