import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logoSvg from "../assets/logo/prima.svg";

const NAV = [
  { label: "الرئيسية", to: "/" },
  { label: "المشاريع", to: "/projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ─── HEADER ─────────────────────────────────────────────
          position: relative — normal document flow, scrolls away.
          No fixed/sticky, no spacer needed.                       */}
      <header className="relative w-full z-20 h-16 bg-white border-b border-gray-200/70">
        <div className="h-full max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">

          {/* LEFT — CTA (desktop) / hamburger (mobile) */}
          <div className="flex items-center gap-2.5">

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://wa.me/905436535134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 h-8 px-4 bg-gray-950 hover:bg-gray-800 text-white text-[12px] font-medium rounded-sm tracking-widest transition-colors"
              >
                <MessageCircle size={12} strokeWidth={2} />
                واتساب
              </a>
              <a
                href="tel:+905436535134"
                className="flex items-center gap-1.5 h-8 px-4 border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-950 text-[12px] font-medium rounded-sm tracking-widest transition-colors"
              >
                <Phone size={12} strokeWidth={2} />
                اتصل بنا
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 text-gray-700 hover:text-gray-950 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="القائمة"
            >
              <Menu size={21} strokeWidth={1.7} />
            </button>
          </div>

          {/* CENTER — Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="relative text-[12px] font-medium text-gray-400 hover:text-gray-950 tracking-widest uppercase transition-colors group"
              >
                {label}
                <span className="absolute -bottom-0.5 right-0 left-0 h-px bg-gray-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </Link>
            ))}
          </nav>

          {/* RIGHT — Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoSvg} alt="Prima Properties" className="h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* ─── MOBILE DRAWER ──────────────────────────────────────── */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-[#0c0c0c] flex flex-col transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 shrink-0">
          <button
            onClick={() => setOpen(false)}
            className="text-white/50 hover:text-white transition-colors"
          >
            <X size={20} strokeWidth={1.7} />
          </button>
          <img src={logoSvg} alt="Prima Properties" className="h-7 w-auto invert opacity-70" />
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
          {NAV.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-2xl font-semibold py-4 border-b border-white/8 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-10 flex flex-col gap-3 shrink-0">
          <a
            href="https://wa.me/905436535134"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 h-12 bg-white text-gray-950 font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={15} />
            تواصل عبر واتساب
          </a>
          <a
            href="tel:+905436535134"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 h-12 border border-white/20 hover:border-white/50 text-white font-semibold text-sm rounded-sm transition-colors"
          >
            <Phone size={15} />
            اتصل بنا
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
