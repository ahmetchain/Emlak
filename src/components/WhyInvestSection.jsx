import {
  Shield,
  Award,
  Clock,
  Users,
  Building2,
  Handshake,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyInvestSection() {
  const reasons = [
    {
      icon: <Handshake size={40} />,
      title: "سنكون بمثابة شريكك التجاري العقاري الموثوق به في تركيا.",
    },
    {
      icon: <Shield size={40} />,
      title: "هناك شخص يحاول العثور على الأفضل والأكثر ربحية بالنسبة لك",
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "سنعمل كموظفين عقاريين تثق بهم للعمل لديك في تركيا.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "جميع عملياتنا مبنية على الثقة المتبادلة والحلال.",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Başlık Kısmı */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
        >
          لماذا تثق بنا؟
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xl max-w-3xl mx-auto"
        >
          نحن هنا لتقديم الدعم الكامل كوسيط عقاري موثوق به في تركيا، مما يسهل
          عليكم جميع مراحل الاستثمار العقاري.
        </motion.p>
      </motion.div>

      {/* Özellikler Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-black/5 p-4 rounded-full"
                >
                  <div className="text-black">{reason.icon}</div>
                </motion.div>
                <motion.h3 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-gray-800 flex-1"
                >
                  {reason.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alt Kısım CTA */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium"
          >
            نحن هنا لدعمكم خلال جميع مراحل استثماراتكم العقارية وضمان تحقيق
            أهدافكم بكل ثقة.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/905436535134"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-all duration-300"
          >
            تواصل معنا
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
