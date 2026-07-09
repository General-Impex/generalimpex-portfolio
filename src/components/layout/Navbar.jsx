import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import logo from "../../assets/images/logo.png";
import mmFlag from "../../assets/images/mm-flag.png";
import enFlag from "../../assets/images/en-flag.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setLangDropdownOpen(false);
  };

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const currentLang = i18n.language === "mm" ? "Myanmar" : "English";

  const FlagIcon = ({ lang }) => {
    if (lang === "mm") {
      return <img src={mmFlag} alt="Myanmar" className="w-5 h-[15px]" />;
    }
    return <img src={enFlag} alt="English" className="w-5 h-[15px]" />;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1280px] mx-auto px-[63px]">
        <div className="bg-white rounded-sm shadow-[0px_0px_2px_0px_rgba(13,59,48,0.5)] px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="General Impex"
                className="w-[97px] h-[64px] object-contain"
              />
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-heading text-base px-2.5 py-2.5 transition-colors duration-300 ${
                      isActive
                        ? "text-gray font-bold"
                        : "text-dark-gray font-normal hover:text-gray"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5"
                >
                  <FlagIcon lang={i18n.language} />
                  <span className="font-heading text-xs text-black">
                    {currentLang}
                  </span>
                  <svg
                    className={`w-4 h-4 text-black transition-transform ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-2 bg-white rounded-sm shadow-[0px_0px_4px_0px_rgba(13,59,48,0.3)] overflow-hidden min-w-[120px]"
                    >
                      <button
                        onClick={() => changeLanguage("en")}
                        className={`w-full px-4 py-2 text-left font-heading text-sm hover:bg-light-gray transition-colors ${
                          i18n.language === "en"
                            ? "text-primary font-bold bg-light-gray"
                            : "text-dark-gray"
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => changeLanguage("mm")}
                        className={`w-full px-4 py-2 text-left font-heading text-sm hover:bg-light-gray transition-colors ${
                          i18n.language === "mm"
                            ? "text-primary font-bold bg-light-gray"
                            : "text-dark-gray"
                        }`}
                      >
                        Myanmar
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <a
                href="tel:09250109161"
                className="bg-accent text-white font-heading font-bold text-base px-7 py-3.5 hover:bg-accent/90 transition-all duration-300"
              >
                {t("nav.callUs")}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span
                className={`block w-6 h-0.5 bg-primary transition-all ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-primary transition-all ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-primary transition-all ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-[0px_0px_2px_0px_rgba(13,59,48,0.5)] mx-[63px] mt-2 rounded-sm"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-heading text-lg py-2 ${
                      isActive
                        ? "text-gray font-bold"
                        : "text-dark-gray font-normal"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Language Switch */}
              <div className="border-t pt-4">
                <p className="font-heading text-sm text-gray mb-2">
                  {t("nav.language")}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm font-heading text-sm ${
                      i18n.language === "en"
                        ? "bg-primary text-white"
                        : "bg-light-gray text-dark-gray"
                    }`}
                  >
                    <FlagIcon lang="en" />
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("mm")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm font-heading text-sm ${
                      i18n.language === "mm"
                        ? "bg-primary text-white"
                        : "bg-light-gray text-dark-gray"
                    }`}
                  >
                    <FlagIcon lang="mm" />
                    Myanmar
                  </button>
                </div>
              </div>

              <a
                href="tel:09250109161"
                className="bg-accent text-white font-heading font-bold text-base px-7 py-3.5 text-center hover:bg-accent/90 transition-all duration-300"
              >
                {t("nav.callUs")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
