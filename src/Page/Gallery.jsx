import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Header page="projects" />

      {/* Page header */}
      <div className="pt-28 sm:pt-36 pb-10 sm:pb-16 px-5 sm:px-10 lg:px-20 border-b border-white/10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-gray-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 text-right"
        >
          محفظتنا العقارية
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-none text-right"
        >
          مشاريعنا
        </motion.h1>
      </div>

      {/* Projects list */}
      <div className="flex-1 px-5 sm:px-10 lg:px-20 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[#0a0a0a]"
            >
              <Link to={`/project/${project.id}`} className="group block p-5 sm:p-6 h-full">
                {/* Image */}
                <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>

                {/* Info */}
                <div className="text-right">
                  <p className="text-gray-600 text-xs tracking-widest uppercase mb-2">
                    {project.location}
                  </p>
                  <h2 className="text-white text-xl sm:text-2xl font-bold leading-snug mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-5">
                      {project.subtitle}
                    </p>
                  )}

                  {/* CTA arrow */}
                  <span className="inline-flex items-center gap-2 text-white/50 group-hover:text-white text-sm transition-all duration-300">
                    <span className="w-7 h-px bg-current inline-block transition-all duration-300 group-hover:w-12" />
                    <span>تفاصيل</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
