import React from "react";
import useScroll from "../Hooks/useScroll";

export default function Header({ page }) {
  const { scrolled, isVisible } = useScroll();

  return (
    <div
      className={`fixed py-5 top-0 left-0 w-full z-30 flex justify-between items-center lg:px-32 md:px-16 px-4 transition-all duration-300 ${
        page === "home"
          ? `${
              scrolled ? "bg-[#232b2c96]/40 backdrop-blur-[4px] shadow-md" : ""
            } ${isVisible ? "translate-y-0" : "-translate-y-full"}`
          : scrolled
          ? "bg-white shadow-md "
          : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <h1
          className={`text-[15px] sm:text-sm md:text-base lg:text-xl font-semibold ${
            page === "home" ? "text-white" : "text-black"
          }`}
        >
          LOGO
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-x-5">
          <a href="/">
            <li
              className={`cursor-pointer text-[13px] md:text-sm lg:text-lg font-semibold ${
                page === "home" ? "text-white" : "text-black"
              }`}
            >
              Anasayfa
            </li>
          </a>
          <a href="/gallery">
            <li
              className={`flex items-center cursor-pointer text-[13px] md:text-sm lg:text-lg font-semibold ${
                page === "home" ? "text-white" : "text-black"
              }`}
            >
              Galeri
            </li>
          </a>
          <a href="mailto:info@securetrace.ai" target="_blank">
            <li
              className={`flex items-center cursor-pointer text-[13px] md:text-sm lg:text-lg font-semibold ${
                page === "home" ? "text-white" : "text-black"
              }`}
            >
              İletişim
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
