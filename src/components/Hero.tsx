import { motion } from "motion/react";
import { ChevronDown, Sword, Users, Zap, Shield } from "lucide-react";

interface HeroProps {
  logoUrl: string;
  bgUrl: string;
  onPageChange: (page: string) => void;
}

export default function Hero({ logoUrl, bgUrl, onPageChange }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  // Generate some simple random particle indicators for the floating effect
  const particles = Array.from({ length: 20 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-28 overflow-hidden bg-[#090A12]"
    >
      {/* 1. Background Cinematic Artwork with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgUrl}
          alt="Revordian Floating Castle Artwork"
          className="w-full h-full object-cover scale-105 animate-[pulse_8s_infinite_alternate] opacity-40 md:opacity-50"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and linear gradients for blending */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(9,10,18,0.2)_0%,rgba(9,10,18,0.95)_90%]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#090A12] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07080f] to-transparent" />
      </div>

      {/* 2. Floating Magical Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#31C5FF]/40 to-[#6E3BFF]/40 blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${Math.random() * 12 + 8}s linear infinite`,
              animationDelay: `${Math.random() * -10}s`,
            }}
          />
        ))}
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Glowing Server Logo with floating animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="relative mb-6 sm:mb-8 group cursor-pointer"
        >
          {/* Logo outer glowing background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#6E3BFF] to-[#31C5FF] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
          
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-gradient-to-r from-[#6E3BFF]/50 to-[#31C5FF]/50 p-1 bg-[#171C28]/90 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img
              src={logoUrl}
              alt="Revordian Unbeatable SMP Logo"
              className="w-full h-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Golden Badge floating decoration */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#F5C85C] to-[#D4AF37] border border-[#F5C85C]/30 text-[#090A12] text-[10px] font-extrabold tracking-widest shadow-lg uppercase">
            PLAY TODAY
          </div>
        </motion.div>

        {/* Server Sub-Badges / Quick Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-4"
        >
          <span className="px-3 py-1 rounded-md bg-[#171C28]/90 border border-[#6E3BFF]/30 text-xs text-gray-300 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-[#6E3BFF]" />
            Semi Roleplay
          </span>
          <span className="px-3 py-1 rounded-md bg-[#171C28]/90 border border-[#31C5FF]/30 text-xs text-gray-300 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-[#31C5FF]" />
            PvP & Survival
          </span>
          <span className="px-3 py-1 rounded-md bg-[#171C28]/90 border border-[#F5C85C]/30 text-xs text-gray-300 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#F5C85C]" />
            Cross Platform
          </span>
        </motion.div>

        {/* Big Game-style Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-[#171C28]/50 filter drop-shadow-lg leading-tight">
            REVORDIAN
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#31C5FF] via-[#6E3BFF] to-[#F5C85C] uppercase mt-1">
            UNBEATABLE SMP
          </h2>
        </motion.div>

        {/* Description / Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl text-gray-400 text-sm sm:text-base md:text-lg mb-8 leading-relaxed font-sans"
        >
          Dunia Semi Roleplay yang memadukan petualangan epik, sistem ekonomi terintegrasi, pertempuran PvP menantang, dan kebebasan bermain tanpa batas dalam satu server Minecraft lintas platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <button
            onClick={() => handleScrollTo("ip-section")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#6E3BFF] to-[#31C5FF] text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#6E3BFF]/20 hover:shadow-[#6E3BFF]/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group"
          >
            <Sword className="w-5 h-5 text-white group-hover:rotate-45 transition-transform" />
            <span>GABUNG SEKARANG</span>
          </button>

          <button
            onClick={() => {
              onPageChange("roleplay");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#171C28] border border-[#6E3BFF]/30 text-gray-300 hover:text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-[#242C40] hover:border-[#6E3BFF]/60 hover:-translate-y-1 transition-all duration-300"
          >
            <span>LIHAT SERVER</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => handleScrollTo("ip-section")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 group text-gray-500 hover:text-[#31C5FF] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Explore Details</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
      </motion.div>

      {/* Particle movement custom styles */}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-10vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
