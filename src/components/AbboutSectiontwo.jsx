import { Flag, Globe, Users, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSectiontwo() {
  const benefits = [
    {
      icon: <Flag size={24} />,
      title: "الجنسية التركية",
      description:
        "الحصول على الجنسية التركية من خلال استثمار عقاري بقيمة 400,000 دولار أمريكي أو أكثر.",
    },
    {
      icon: <Globe size={24} />,
      title: "السفر بدون تأشيرة",
      description: "إمكانية السفر بدون تأشيرة إلى 116 دولة.",
    },
    {
      icon: <Users size={24} />,
      title: "حقوق الأسرة",
      description: "تشمل الجنسية الزوجة والأطفال تحت سن 18 عاماً.",
    },
    {
      icon: <Building size={24} />,
      title: "فرص الاستثمار",
      description: "فرصة استثمارية في السوق العقاري التركي المتنامي.",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
          >
            الجنسية التركية
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="block mt-2 text-3xl sm:text-4xl text-gray-300"
            >
              فرصة استثمارية
            </motion.span>
          </motion.h2>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            من خلال استثمارك العقاري، لن تحصل فقط على منزل، بل ستحصل أيضاً على
            فرصة لحياة جديدة من خلال الجنسية التركية.
          </motion.p>
        </motion.div>

        {/* Avantajlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full mb-6"
                >
                  <div className="text-white">{benefit.icon}</div>
                </motion.div>
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold mb-4"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300"
                >
                  {benefit.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alt Kısım - CTA */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            نحن بجانبك لمساعدتك في عملية الحصول على الجنسية التركية.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/905436535134"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              احصل على معلومات تفصيلية
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
