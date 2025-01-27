import {
  Plane,
  Hotel,
  Home,
  FileCheck,
  Flag,
  Car,
  Briefcase,
  Key,
  HeartHandshake,
  CheckCircle,
  ClipboardList,
  Handshake,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: <Home size={24} />,
      title: "نجد جميع المنازل التي تناسب معاييرك",
      description:
        "أولاً، نقوم بتحديد جميع المنازل التي تتوافق مع معاييرك المطلوبة.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      icon: <CheckCircle size={24} />,
      title: "نقوم بفحص وتقييم جميع المنازل",
      description:
        "نقوم بفحص وتقييم جميع المنازل التي وجدناها لك لضمان جودتها.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      icon: <ClipboardList size={24} />,
      title: "نرسل لك جميع التقارير والمعلومات",
      description:
        "إذا كانت المنازل تلبي جميع المعايير، نرسل لك جميع التقارير والمعلومات.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      icon: <Handshake size={24} />,
      title: "التفاوض نيابة عنك",
      description:
        "في حال أعجبك المنزل، نقوم بالتفاوض نيابة عنك إذا لزم الأمر.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 5,
      icon: <Plane size={24} />,
      title: "دعوتك إلى تركيا",
      description: "إذا قررت الشراء، ندعوك لزيارة تركيا لإتمام العملية.",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 6,
      icon: <Car size={24} />,
      title: "استقبالك في المطار",
      description: "نستقبلك في المطار بسياراتنا الخاصة لضمان راحتك.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 7,
      icon: <Hotel size={24} />,
      title: "الدعم في حجز الفنادق",
      description: "نوفر لك الدعم في حجز الفنادق لضمان إقامة مريحة.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 8,
      icon: <MapPin size={24} />,
      title: "جولة ميدانية معك",
      description: "عند وصولك، نقوم بجولة ميدانية معك لزيارة المنازل المناسبة.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 9,
      icon: <FileCheck size={24} />,
      title: "دعم كامل أثناء عملية الشراء",
      description: "نرافقك خلال جميع خطوات الشراء ونوفر لك الدعم اللازم.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      id: 10,
      icon: <HeartHandshake size={24} />,
      title: "المساعدة بعد الشراء",
      description:
        "حتى بعد إتمام عملية الشراء، نحن هنا لمساعدتك في أي استفسار.",
      color: "bg-rose-100 text-rose-600",
    },
    {
      id: 11,
      icon: <Flag size={24} />,
      title: "المساعدة في الوثائق والإجراءات",
      description: "نرافقك لتوفير جميع الوثائق والإجراءات المطلوبة.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      id: 12,
      icon: <Briefcase size={24} />,
      title: "عمولة بنسبة 5% فقط",
      description:
        "لا يتم طلب أي رسوم أثناء العملية، ويتم تحصيل عمولة بنسبة 5% فقط بعد البيع.",
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 bg-gray-900"
    >
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            خدماتنا المميزة
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg"
          >
            نقدم لكم خدمات حصرية ومميزة خلال عملية الاستثمار العقاري.
          </motion.p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 py-12 ${
                index !== services.length - 1 ? "border-b border-gray-800" : ""
              }`}
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 flex items-center justify-center ${service.color} rounded-full shrink-0`}
              >
                <div className="">{service.icon}</div>
              </motion.div>

              {/* Content */}
              <div className="text-center md:text-left">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-white mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 leading-relaxed max-w-2xl"
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Arrow Icon */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="hidden md:flex flex-1 justify-end"
              >
                <div className="w-8 h-8 flex items-center justify-center text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Alt Kısım */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-20"
        >
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            هل ترغب في التواصل مع فريقنا المتخصص لتقييم أفضل فرص الاستثمار؟
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/905436535134"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            احجز موعدًا
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
