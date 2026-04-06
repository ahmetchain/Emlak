import { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Page/Home";
import Projects from "./Page/Gallery";
import ProjectDetail from "./Page/ProjectDetail";
import LoadingScreen from "./components/LoadingScreen";
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
  // Scroll to top when new page mounts (after exit animation with mode="wait")
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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
        <Route path="/"           element={<Wrap><Home /></Wrap>} />
        <Route path="/projects"   element={<Wrap><Projects /></Wrap>} />
        <Route path="/gallery"    element={<Wrap><Projects /></Wrap>} />
        <Route path="/project/:id" element={<Wrap><ProjectDetail /></Wrap>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // Show on every fresh page load / refresh, but NOT on SPA route changes
  // (App never remounts during navigation, so this state persists across routes)
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Luxury loading screen — shown once on first paint */}
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loader" onDone={handleDone} />}
      </AnimatePresence>

      {/* Main app — rendered in background while loading */}
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
