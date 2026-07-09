import React, { useState } from "react";
import { MessageSquare, Sword, Copy, Check, ShieldCheck, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CTAProps {
  onPageChange?: (page: string) => void;
}

export default function CTA({ onPageChange }: CTAProps) {
  const [copied, setCopied] = useState(false);
  const ipAddress = "prem-1.aerocloud.id:25552";

  const handleCopy = () => {
    navigator.clipboard.writeText(ipAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative z-20 bg-[#090A12] border-t border-[#6E3BFF]/10 overflow-hidden">
      
      {/* Decorative colored glow spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#6E3BFF]/10 to-[#31C5FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#171C28] to-[#0e1119] border border-[#6E3BFF]/30 p-8 sm:p-12 md:p-16 text-center shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#31C5FF] to-transparent" />

        {/* Floating icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#6E3BFF]/10 border border-[#6E3BFF]/20 flex items-center justify-center text-[#31C5FF] mx-auto mb-8 animate-bounce">
          <Sword className="w-8 h-8 text-[#31C5FF]" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight uppercase leading-tight">
          SIAP BERGABUNG SEKARANG?
        </h2>
        
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Jangan ragu untuk mulai menjelajah dunia semi-roleplay Revordian Unbeatable SMP. Temukan faksi klanmu, bangun kekuatan ekonomi, dan nikmati petualangan malam PvP seru.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          
          <button
            id="cta-copy-ip-btn"
            onClick={handleCopy}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#6E3BFF] to-[#31C5FF] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#6E3BFF]/20 hover:shadow-[#6E3BFF]/40 hover:-translate-y-1 transition-all duration-300"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-emerald-400" />
                <span>IP BERHASIL DISALIN!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>SALIN IP SERVER</span>
              </>
            )}
          </button>

          {onPageChange && (
            <button
              id="cta-rules-btn"
              onClick={() => {
                onPageChange("rules");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#090A12] border border-[#6E3BFF]/30 text-[#31C5FF] hover:text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[#171C28] hover:border-[#6E3BFF]/60 hover:-translate-y-1 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 text-[#31C5FF]" />
              <span>BACA ATURAN MAIN</span>
            </button>
          )}

        </div>

        {/* Footer info inside card */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest mt-12">
          <ShieldCheck className="w-4 h-4 text-[#F5C85C]" />
          <span>SERVER COMPATIBLE WITH JAVA & MCPE / BEDROCK</span>
        </div>

      </div>

      {/* Copy notifications inside toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            id="cta-toast"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 right-10 z-50 px-5 py-3.5 bg-[#171C28] border-2 border-emerald-500 text-white rounded-xl shadow-2xl flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-mono">Berhasil disalin!</span>
              <span className="text-sm font-bold">IP berhasil disalin</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
