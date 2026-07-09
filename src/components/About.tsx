import React from "react";
import { Shield, Coins, Globe, Map, Sparkles, Swords, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="roleplay" className="py-20 px-4 sm:px-6 relative z-20 bg-[#090A12] border-t border-[#6E3BFF]/10">
      
      {/* Background decoration glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#31C5FF]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#6E3BFF] bg-[#6E3BFF]/10 px-3 py-1 rounded-full border border-[#6E3BFF]/20">
            Dunia Semi Roleplay
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white mt-4 tracking-tight">
            DUNIA ROLEPLAY & SURVIVAL NYATA
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Revordian menyajikan konsep server semi roleplay unik, menggabungkan keseruan interaksi sosial dan petualangan liar tanpa batas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Conceptual Overview */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#171C28]/60 border border-[#6E3BFF]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#6E3BFF]/10 to-transparent pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 text-[#31C5FF] font-semibold text-xs uppercase tracking-wider mb-3">
                <Compass className="w-4 h-4 text-[#31C5FF]" />
                <span>Semi Roleplay Concept</span>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight font-sans">
                SATU SERVER, DUA PETUALANGAN UNIK
              </h3>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Kami menyediakan sistem multi-world yang seimbang untuk mengakomodasi seluruh gaya bermain Anda secara maksimal:
              </p>

              {/* Worlds description blocks */}
              <div className="space-y-4 mt-6">
                <div className="p-4 rounded-xl bg-[#090A12]/80 border-l-4 border-[#6E3BFF] border-y border-r border-y-[#6E3BFF]/10 border-r-[#6E3BFF]/10">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6E3BFF] animate-pulse" />
                    Dunia Roleplay
                  </h4>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    Fitur simulasi kehidupan sosial yang ramah, sistem faksi, tata kota, pasar perdagangan, dan penulisan cerita sejarah karakter Anda sendiri.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#090A12]/80 border-l-4 border-[#31C5FF] border-y border-r border-y-[#31C5FF]/10 border-r-[#31C5FF]/10">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#31C5FF] animate-pulse" />
                    Dunia Non-Roleplay
                  </h4>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    Survival klasik murni tempat Anda bertarung bebas melawan bahaya malam, mengumpulkan material berharga, dan mendirikan pertahanan tanpa kekangan aturan sosial.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#6E3BFF]/10 text-xs text-gray-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5C85C]" />
              <span>Bebas berpindah dunia kapan saja secara instan!</span>
            </div>
          </div>

          {/* Right Column: Key Mechanics Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Cards 1: Ekonomi Terintegrasi */}
            <div className="p-6 rounded-2xl bg-[#171C28]/90 border border-[#6E3BFF]/10 hover:border-[#6E3BFF]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#6E3BFF]/10 flex items-center justify-center border border-[#6E3BFF]/20 text-[#6E3BFF] mb-4">
                  <Coins className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Fitur Simple & Ringan</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Tidak membingungkan bagi pemula! Sistem menu dan UI yang minimalis membuat gameplay terasa sangat bersahabat tanpa ribet.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#6E3BFF] tracking-wider uppercase mt-4 block">
                Simple Feature Set
              </span>
            </div>

            {/* Cards 2: PvP & Keamanan */}
            <div className="p-6 rounded-2xl bg-[#171C28]/90 border border-[#31C5FF]/10 hover:border-[#31C5FF]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#31C5FF]/10 flex items-center justify-center border border-[#31C5FF]/20 text-[#31C5FF] mb-4">
                  <Swords className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Mekanik Asik & Kompetitif</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Siklus PvP & penjarahan (griefing) malam yang teratur menghidupkan ketegangan bermain yang seru bersama teman-teman Anda.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#31C5FF] tracking-wider uppercase mt-4 block">
                Fun & Engaging Mechanics
              </span>
            </div>

            {/* Cards 3: Komunitas Aktif */}
            <div className="p-6 rounded-2xl bg-[#171C28]/90 border border-[#F5C85C]/10 hover:border-[#F5C85C]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#F5C85C]/10 flex items-center justify-center border border-[#F5C85C]/20 text-[#F5C85C] mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Interaksi Sosial Luas</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Ajak semua orang dan teman bermain Anda untuk bersama-sama membangun kota megah, klan kustom, atau aliansi perkasa di dunia roleplay.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#F5C85C] tracking-wider uppercase mt-4 block">
                Social Integration
              </span>
            </div>

            {/* Cards 4: Kebebasan Bermain */}
            <div className="p-6 rounded-2xl bg-[#171C28]/90 border border-emerald-500/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 mb-4">
                  <Map className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Eksplorasi Dunia Liar</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Temukan pemandangan memukau, lakukan penambangan rahasia, pasang jebakan pertahanan, dan kuasai ekosistem survival liar server.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase mt-4 block">
                Exploration Free Mode
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
