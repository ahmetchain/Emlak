import { useState } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sabit WhatsApp Butonu */}
      <div className="fixed bottom-20 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
          />
        </button>
      </div>

      {/* Açılır WhatsApp Penceresi */}
      {isOpen && (
        <div className="fixed bottom-[170px] right-4 sm:right-10 bg-white w-[290px] sm:w-80 p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              ابدأ المحادثة الآن
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            اضغط على زر الدعم للتواصل معنا عبر WhatsApp. نحن هنا لتلبية جميع
            استفساراتكم وتوفير المعلومات اللازمة.
          </p>
          <a
            href="https://wa.me/905436535134"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            تواصل عبر WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
