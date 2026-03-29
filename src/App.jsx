import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import Projects from "./Page/Gallery";
import ProjectDetail from "./Page/ProjectDetail";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0 },
  exit:     { opacity: 0, y: -10 },
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.35,
};

function Wrap({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Wrap><Home /></Wrap>} />
        <Route path="/projects" element={<Wrap><Projects /></Wrap>} />
        <Route path="/gallery"  element={<Wrap><Projects /></Wrap>} />
        <Route path="/project/:id" element={<Wrap><ProjectDetail /></Wrap>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
