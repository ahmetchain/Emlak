import { useState } from "react";
import Ev3 from "../assets/Basliksiz-1-1.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import Ev from "../assets/logo/gg.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function OpportunitySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const questions = [
    "ما هو الغرض من استخدام المنزل أو المصيف؟",
    "ما هو النطاق السعري الذي تفضله؟",
    "كم متر مربع وعدد الغرف التي ترغب بها؟",
    "هل تفضل منزلاً مستقلاً، برجاً، مجمعاً سكنياً، أم مصيفاً؟",
    "هل لديك طلبات خاصة مثل مسبح، حديقة، قرب من البحر، إطلالة بحرية، وسط المدينة، أو قرب من المعالم الطبيعية؟",
  ];

  const extraQuestions = [
    "كم عدد الغرف التي تفكر بها؟ (2+1، 3+1، 4+1، 5+1، 6+1)",
    "أي منطقة تفضل أن يكون منزلك فيها؟",
    "هل تفكر بالشراء لأغراض الاستثمار أم للسكن؟",
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16"
    >
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <img
          src={Ev}
          alt="فرصة"
          className="w-full h-auto object-cover object-center"
        />
      </motion.div>

      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/3 flex flex-col justify-center text-left sm:items-start sm:ml-20 px-4 lg:px-0"
      >
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-snug"
        >
          أخبرنا ما هو نوع المنزل الذي تحتاجه، وسنجد المنزل الأنسب لك
        </motion.h2>

        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl text-gray-600 mb-8"
        >
          ما نوع المنزل الذي تبحث عنه؟
        </motion.h3>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <motion.div 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
                {index + 1}
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                {question}
              </p>
            </motion.div>
          ))}

          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 mt-6"
              >
                {extraQuestions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
                      {questions.length + index + 1}
                    </span>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {question}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mt-4"
          >
            {isExpanded ? (
              <>
                <span>عرض أقل</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span>اقرأ المزيد</span>
                <ChevronDown size={20} />
              </>
            )}
          </motion.button>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/905436535134"
          target="_blank"
          className="flex items-center justify-center w-[200px] h-[60px] bg-black text-white text-lg font-semibold text-center transition-all duration-300 mt-8 hover:bg-black/90"
        >
          تواصل معنا
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
