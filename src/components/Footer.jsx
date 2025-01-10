export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Navigation */}
        <div>
          <h1 className="text-2xl font-bold mb-6 text-white">الشعار</h1>
          <nav>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  المعرض
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/905436535134"
                  target="_blank"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Address and Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">العنوان</h3>
          <p className="text-sm leading-relaxed mb-6">
            حي سيفجي، شارع ٩٠٢ رقم: ١٠/A
            <br />
            غازي أمير / إزمير
          </p>
          <h3 className="font-semibold text-lg mb-4 text-white">
            مكتب المبيعات
          </h3>
          <p className="text-sm leading-relaxed">
            حي فاتح، شارع الصناعة رقم: ٢٧/A
            <br />
            غازي أمير / إزمير
          </p>
        </div>

        {/* Contact and Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">الاتصال</h3>
          <p className="text-sm mb-2">الهاتف: +٩٠ ٥٤٣ ٦٥٣ ٥١ ٣٤</p>
          <p className="text-sm mb-4">
            البريد الإلكتروني:{" "}
            <a
              href="mailto:selim.safak11@gmail.com"
              className="hover:text-purple-500 transition-colors duration-200"
            >
              selim.safak11@gmail.com
            </a>
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
