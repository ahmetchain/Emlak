import { motion } from "framer-motion";

export default function Footer() {
  const containerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#1b1b1b] text-white py-12"
    >
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Logo and Navigation */}
        <motion.div variants={itemAnimation}>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-white"
          >
            الشعار
          </motion.h1>
          <motion.nav>
            <ul className="space-y-3 text-sm">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  whileHover={{ color: "#A855F7" }}
                  href="/"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  الصفحة الرئيسية
                </motion.a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  whileHover={{ color: "#A855F7" }}
                  href="/gallery"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  المعرض
                </motion.a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  whileHover={{ color: "#A855F7" }}
                  href="https://wa.me/905436535134"
                  target="_blank"
                  className="hover:text-purple-500 transition-colors duration-200"
                >
                  تواصل معنا
                </motion.a>
              </motion.li>
            </ul>
          </motion.nav>
        </motion.div>

        {/* Address and Contact Info */}
        <motion.div variants={itemAnimation}>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-semibold text-lg mb-4 text-white"
          >
            العنوان
          </motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm leading-relaxed mb-6"
          >
            حي سيفجي، شارع ٩٠٢ رقم: ١٠/A
            <br />
            غازي أمير / إزمير
          </motion.p>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-semibold text-lg mb-4 text-white"
          >
            مكتب المبيعات
          </motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm leading-relaxed"
          >
            حي فاتح، شارع الصناعة رقم: ٢٧/A
            <br />
            غازي أمير / إزمير
          </motion.p>
        </motion.div>

        {/* Contact and Social Links */}
        <motion.div variants={itemAnimation}>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="font-semibold text-lg mb-4 text-white"
          >
            الاتصال
          </motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm mb-2"
          >
            الهاتف: +٩٠ ٥٤٣ ٦٥٣ ٥١ ٣٤
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-sm mb-4"
          >
            البريد الإلكتروني:{" "}
            <motion.a
              whileHover={{ color: "#A855F7" }}
              href="mailto:selim.safak11@gmail.com"
              className="hover:text-purple-500 transition-colors duration-200"
            >
              selim.safak11@gmail.com
            </motion.a>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500"
      >
        © جميع الحقوق محفوظة.
      </motion.div>
    </motion.footer>
  );
}
