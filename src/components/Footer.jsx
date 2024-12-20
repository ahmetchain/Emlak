export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-white  py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Navigation */}
        <div>
          <h1 className="text-2xl font-bold mb-6 text-white">OM Group</h1>
          <nav>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#anasayfa"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  href="#kurumsal"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  Kurumsal
                </a>
              </li>
              <li>
                <a
                  href="#projelerimiz"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  Projelerimiz
                </a>
              </li>
              <li>
                <a
                  href="#devameden"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  Devam Eden Projelerimiz
                </a>
              </li>
              <li>
                <a
                  href="#medya"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  Medya
                </a>
              </li>
              <li>
                <a
                  href="#bizeulasin"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  Bize Ulaşın
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Address and Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Adres</h3>
          <p className="text-sm leading-relaxed mb-6">
            Sevgi Mahallesi 902 Sokak No:10/A
            <br />
            Gaziemir/İZMİR
          </p>
          <h3 className="font-semibold text-lg mb-4 text-white">Satış Ofisi</h3>
          <p className="text-sm leading-relaxed">
            Fatih Mah., Sanayi Cad No:27/A
            <br />
            Gaziemir/İZMİR
          </p>
        </div>

        {/* Contact and Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">İletişim</h3>
          <p className="text-sm mb-2">Telefon: +90 (232) 220 02 00</p>
          <p className="text-sm mb-4">Telefon: +90 (232) 503 05 05</p>
          <p className="text-sm mb-4">
            E-Posta:{" "}
            <a
              href="mailto:info@omgroup.com.tr"
              className="hover:text-purple-500 transition-colors duration-200"
            >
              info@omgroup.com.tr
            </a>
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors duration-200"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors duration-200"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors duration-200"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © 2024 OM Group. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
