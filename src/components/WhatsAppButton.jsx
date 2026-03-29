import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const btnWrapRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  useEffect(() => {
    const btnWrap = btnWrapRef.current;
    const ring1 = ring1Ref.current;
    const ring2 = ring2Ref.current;
    if (!btnWrap || !ring1 || !ring2) return;

    // Button entrance — springs in from bottom after 1.5s
    gsap.set(btnWrap, { scale: 0, opacity: 0, y: 20 });
    gsap.to(btnWrap, {
      scale: 1.2,
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 1.5,
      ease: "back.out(1.7)",
      onComplete: () => startPulse(ring1, ring2),
    });

    function startPulse(r1, r2) {
      gsap.set([r1, r2], { scale: 1, opacity: 0.45 });
      gsap.to(r1, { scale: 2.6, opacity: 0, duration: 2.2, repeat: -1, ease: "power2.out" });
      gsap.to(r2, { scale: 2.6, opacity: 0, duration: 2.2, repeat: -1, delay: 1.0, ease: "power2.out" });
    }
  }, []);

  const popupVariants = {
    hidden:  { opacity: 0, scale: 0.88, y: 16 },
    visible: { opacity: 1, scale: 1,    y: 0,  transition: { type: "spring", duration: 0.45 } },
    exit:    { opacity: 0, scale: 0.88, y: 16,  transition: { duration: 0.25 } },
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-20 right-5 z-50">
        {/* Pulse rings — positioned behind the button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div ref={ring1Ref} className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-400 opacity-0" />
          <div ref={ring2Ref} className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-400 opacity-0" />
        </div>

        {/* Button */}
        <div ref={btnWrapRef}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((o) => !o)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-colors duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
            />
          </motion.button>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-[170px] right-4 sm:right-10 bg-white w-[290px] sm:w-80 p-4 rounded-xl shadow-2xl z-50"
          >
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <h3 className="text-base font-semibold text-gray-800">
                ابدأ المحادثة الآن
              </h3>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-lg leading-none"
              >
                ✕
              </motion.button>
            </div>

            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              اضغط على الزر للتواصل معنا عبر WhatsApp. نحن هنا لتلبية جميع
              استفساراتكم.
            </p>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/905436535134"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-full shadow transition-colors duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              تواصل عبر WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
