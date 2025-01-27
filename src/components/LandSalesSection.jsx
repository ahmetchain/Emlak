import React from 'react';
import { motion } from 'framer-motion';

const LandSalesSection = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-4 drop-shadow-lg"
          >
            خدمة بيع الأراضي
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemAnimation}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">نحن بجانبك في كل خطوة من عملية شراء الأراضي في أجمل مناطق تركيا.</p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">يجد المستثمرون الأجانب في تركيا وجهة مثالية للاستثمار العقاري بفضل موقعها الجغرافي الاستراتيجي الذي يجعلها مركز جذب عالمي.</p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">خيارات استثمار الأراضي المتنوعة: زراعية (للزراعة)، سياحية (للبناء الفندقي والسياحي)، صناعية (لإنشاء المصانع والمستودعات)، سكنية (لبناء المساكن) وغيرها من الاستخدامات.</p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">ما هي المواصفات التي تبحث عنها في قطعة الأرض التي ترغب بشرائها؟ سنساعدك في العثور على الأرض المثالية.</p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">لا تتردد في التواصل معنا، سنساعدك في العثور على الفرصة المناسبة لك.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandSalesSection; 