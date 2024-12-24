import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50 || window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(true);
      } else {
        // Scrolling up
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return { scrolled, isVisible };
}
