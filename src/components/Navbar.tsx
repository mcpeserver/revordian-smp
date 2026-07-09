import React, { useState, useEffect } from "react";
import { Menu, X, Sword, ArrowRight, Phone, Globe, Users, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useDeveloperData } from "../hooks/useDeveloperData";

interface NavbarProps {
  logoUrl?: string;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ logoUrl, currentPage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useDeveloperData();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Fitur", page: "fitur" },
    { name: "Roleplay", page: "roleplay" },
    { name: "Rules", page: "rules" },
    { name: "Admin", page: "admin" },
    { name: "Support", page: "support" },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onPageChange("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleJoinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onPageChange("home");
    setTimeout(() => {
      const targetElement = document.getElementById("ip-section");
      if (targetElement) {
        const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090A12]/95 backdrop-blur-md border-b border-[#6E3BFF]/25 shadow-lg py-3.5"
            : "bg-[#090A12]/80 backdrop-blur-md border-b border-[#6E3BFF]/10 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group"
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Revordian Logo"
                className="w-8 h-8 rounded-lg border border-[#6E3BFF]/30 group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6E3BFF] to-[#31C5FF] flex items-center justify-center">
                <Sword className="w-4 h-4 text-white" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-wider text-sm sm:text-base text-white group-hover:text-[#31C5FF] transition-colors leading-none">
                REVORDIAN
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-widest leading-none mt-0.5">
                UNBEATABLE SMP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                id={`nav-${item.name.toLowerCase()}`}
                href={`#${item.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(item.page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg relative group ${
                  currentPage === item.page
                    ? "text-[#31C5FF] bg-[#6E3BFF]/10 font-semibold"
                    : "text-gray-300 hover:text-[#31C5FF] hover:bg-[#6E3BFF]/5"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-[#31C5FF] transform transition-transform origin-center duration-300 ${
                  currentPage === item.page ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </a>
            ))}
          </div>

          {/* Join Server Action Button */}
          <div className="hidden sm:block">
            <a
              id="nav-join-btn"
              href="#ip-section"
              onClick={handleJoinClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-[#6E3BFF] text-white font-semibold text-sm flex items-center gap-1.5 shadow-lg shadow-[#6E3BFF]/30 transition-all duration-300 hover:shadow-[#6E3BFF]/50 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#31C5FF] to-[#6E3BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">Join Server</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white bg-[#171C28]/60 border border-[#6E3BFF]/20 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer (absolute top-full to fit underneath Navbar dynamically) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-30 bg-[#090A12]/98 border-b border-[#6E3BFF]/20 backdrop-blur-lg px-4 py-6 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    onPageChange(item.page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`py-3 px-4 font-semibold text-base transition-colors rounded-lg ${
                    currentPage === item.page
                      ? "text-[#31C5FF] bg-[#6E3BFF]/20"
                      : "text-gray-300 hover:text-[#31C5FF] hover:bg-[#171C28]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a
              href="#ip-section"
              onClick={handleJoinClick}
              className="w-full text-center py-3 bg-[#6E3BFF] text-white font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <span>Join Server</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Developer / Web Creator Info Links inside Mobile Navigation Drawer */}
            <div className="mt-4 pt-4 border-t border-[#6E3BFF]/20 flex flex-col gap-3">
              <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase px-3">
                Web Creator Info
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={data.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#171C28]/60 border border-[#6E3BFF]/10 text-xs font-semibold text-gray-300 hover:text-[#31C5FF]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#31C5FF]" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-2.5 h-2.5 ml-auto text-gray-500" />
                </a>
                <a
                  href={data.website.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#171C28]/60 border border-[#6E3BFF]/10 text-xs font-semibold text-gray-300 hover:text-[#6E3BFF]"
                >
                  <Globe className="w-3.5 h-3.5 text-[#6E3BFF]" />
                  <span>Portfolio</span>
                  <ArrowUpRight className="w-2.5 h-2.5 ml-auto text-gray-500" />
                </a>
                <a
                  href={data.community.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#171C28]/60 border border-[#6E3BFF]/10 text-xs font-semibold text-gray-300 hover:text-[#F5C85C]"
                >
                  <Users className="w-3.5 h-3.5 text-[#F5C85C]" />
                  <span className="truncate">{data.community.name}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 ml-auto text-gray-500" />
                </a>
                <a
                  href={data.community.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#171C28]/60 border border-[#6E3BFF]/10 text-xs font-semibold text-gray-300 hover:text-[#31C5FF]"
                >
                  <span className="text-indigo-400 font-bold text-xs">Discord</span>
                  <ArrowUpRight className="w-2.5 h-2.5 ml-auto text-gray-500" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
