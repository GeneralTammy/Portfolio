import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullLogo = "<M/>";
  const wasScrolled = useRef(false);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const playTypingAnimation = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    setShowCursor(true);
    setLogoText("");
    let index = 0;
    typingIntervalRef.current = setInterval(() => {
      index++;
      setLogoText(fullLogo.slice(0, index));
      if (index >= fullLogo.length) {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        setTimeout(() => setShowCursor(false), 1200);
      }
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Replay the logo animation when the user scrolls back up to the top
      if (wasScrolled.current && !scrolled) {
        playTypingAnimation();
      }
      wasScrolled.current = scrolled;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    playTypingAnimation();
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className={`text-2xl transition-colors font-mono flex items-center ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
                {logoText}
              </span>
              <motion.span
                className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
                animate={{ opacity: showCursor ? [1, 0] : 0 }}
                transition={{
                  duration: 0.5,
                  repeat: showCursor ? Infinity : 0,
                  repeatType: "reverse",
                }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-teal-500 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden overflow-hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 transition-colors hover:text-teal-500 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-center hover:shadow-lg hover:shadow-teal-500/50 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg flex items-center justify-center hover:shadow-xl hover:shadow-teal-500/50 transition-shadow"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          scale: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
        style={{ pointerEvents: isScrolled ? "auto" : "none" }}
      >
        <ArrowUp size={22} />
      </motion.button>
    </>
  );
}
