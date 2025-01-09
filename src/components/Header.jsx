import React, { useState } from "react";
import useScroll from "../Hooks/useScroll";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhone, FiMail } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

export default function Header({ page }) {
  const { scrolled, isVisible } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Üst İletişim Çubuğu */}
      <div className={`hidden md:block w-full bg-gray-100 py-2 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 flex justify-end items-center gap-6">
          <a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors text-sm"
          >
            <BsWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:+905555555555"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
          >
            <FiPhone />
            <span>+90 555 555 5555</span>
          </a>
          <a
            href="mailto:info@example.com"
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors text-sm"
          >
            <FiMail />
            <span>info@example.com</span>
          </a>
        </div>
      </div>

      {/* Ana Header */}
      <div
        className={`fixed  w-full z-30 transition-all duration-300 ${
          scrolled 
            ? 'py-8 bg-white shadow-lg top-0' 
            : 'py-4 bg-white md:bg-transparent'
        } ${!isVisible && '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold ${
                page === "home" && !scrolled && !isMobileMenuOpen ? "md:text-white text-gray-800" : "text-gray-800"
              }`}>
                EMLAK LOGO
              </h1>
            </div>

            {/* Mobil İletişim İkonları - Her zaman görünür */}
            <div className="md:hidden flex items-center gap-4">
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-green-600 transition-colors"
              >
                <BsWhatsapp className="text-xl" />
              </a>
              <a
                href="tel:+905555555555"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                <FiPhone className="text-xl" />
              </a>
              <a
                href="mailto:info@example.com"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                <FiMail className="text-xl" />
              </a>
            </div>

            {/* Desktop Menü */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="/" 
                className={`flex items-center gap-2 ${
                  page === "home" && !scrolled ? "text-white" : "text-gray-800"
                } hover:text-blue-600 transition-colors font-medium`}
              >
                <BiHomeAlt />
                <span>Anasayfa</span>
              </a>
              <a 
                href="/gallery" 
                className={`flex items-center gap-2 ${
                  page === "home" && !scrolled ? "text-white" : "text-gray-800"
                } hover:text-blue-600 transition-colors font-medium`}
              >
                <MdOutlinePhotoLibrary />
                <span>Galeri</span>
              </a>
              <a 
                href="/contact" 
                className={`flex items-center gap-2 ${
                  page === "home" && !scrolled ? "text-white" : "text-gray-800"
                } hover:text-blue-600 transition-colors font-medium`}
              >
                <RiContactsLine />
                <span>İletişim</span>
              </a>
            </div>

            {/* Desktop İletişim Butonları */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+905555555555"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <FiPhone />
                <span>Bizi Arayın</span>
              </a>
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <BsWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobil Menü Butonu */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMenu className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">Menü</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <IoMdClose className="text-2xl text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Mobil Menü Linkleri */}
              <div className="space-y-4">
                <a
                  href="/"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BiHomeAlt className="text-xl" />
                  <span className="font-medium">Anasayfa</span>
                </a>
                <a
                  href="/gallery"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MdOutlinePhotoLibrary className="text-xl" />
                  <span className="font-medium">Galeri</span>
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <RiContactsLine className="text-xl" />
                  <span className="font-medium">İletişim</span>
                </a>
              </div>

              {/* Mobil İletişim Butonları */}
              <div className="space-y-3">
                <a
                  href="tel:+905555555555"
                  className="flex items-center gap-2 w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FiPhone />
                  <span>Bizi Arayın</span>
                </a>
                <a
                  href="https://wa.me/905555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <BsWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:info@example.com"
                  className="flex items-center gap-2 w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FiMail />
                  <span>E-posta Gönder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}