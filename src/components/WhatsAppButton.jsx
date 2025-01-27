import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5
        }
      }
    },
    tap: {
      scale: 0.9
    }
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* Sabit WhatsApp Butonu */}
      <div className="fixed bottom-20 right-5 z-50">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
          />
        </motion.button>
      </div>

      {/* Açılır WhatsApp Penceresi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-[170px] right-4 sm:right-10 bg-white w-[290px] sm:w-80 p-4 rounded-lg shadow-lg z-50"
          >
            <div className="flex items-center justify-between border-b pb-2 mb-2">
              <motion.h3 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold text-gray-800"
              >
                ابدأ المحادثة الآن
              </motion.h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ✕
              </motion.button>
            </div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-600 mb-4"
            >
              اضغط على زر الدعم للتواصل معنا عبر WhatsApp. نحن هنا لتلبية جميع
              استفساراتكم وتوفير المعلومات اللازمة.
            </motion.p>
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/905436535134"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              تواصل عبر WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
