import React from "react";
import { ShieldAlert, CheckCircle, Flame, Heart, AlertTriangle, HelpCircle } from "lucide-react";

export default function Rules() {
  const rulesList = [
    {
      id: "01",
      title: "DILARANG KILL DI SPAWN",
      description: "Jangan pernah membunuh pemain lain di area spawn atau tempat pendaratan utama. Hormati wilayah suci ini demi kenyamanan pemain yang baru saja masuk.",
      tag: "Zona Aman",
      color: "border-[#31C5FF] text-[#31C5FF]"
    },
    {
      id: "02",
      title: "TRAP DIPERBOLEHKAN (KECUALI SPAWN GLOBAL)",
      description: "Anda diperbolehkan membangun jebakan taktis atau perangkap mematikan di wilayah survival, tetapi dilarang keras membuatnya di area spawn global.",
      tag: "Redstone Trap",
      color: "border-[#6E3BFF] text-[#6E3BFF]"
    },
    {
      id: "03",
      title: "BEBAS KILL DI MALAM HARI",
      description: "Siklus pertempuran antar pemain (PvP) resmi dibuka saat malam tiba! Anda bebas menyerang atau bertahan dari pukul 18:00 (6 sore) s/d 06:00 (6 pagi) waktu server.",
      tag: "Siklus Malam PvP",
      color: "border-[#F5C85C] text-[#F5C85C]"
    },
    {
      id: "04",
      title: "BEBAS GRIEF DI MALAM HARI",
      description: "Ingin menghancurkan atau merampas markas lawan? Lakukan aksi penjarahan dan pengrusakan (griefing) hanya pada malam hari dari pukul 18:00 (6 sore) s/d 06:00 (6 pagi).",
      tag: "Night Griefing",
      color: "border-red-500 text-red-500"
    },
    {
      id: "05",
      title: "ARENA BEBAS DIGUNAKAN UNTUK KILL",
      description: "Gunakan wilayah Arena kapan pun tanpa ada batasan waktu untuk bertarung satu lawan satu secara ksatria atau menguji kehebatan senjata Anda.",
      tag: "Bebas PvP",
      color: "border-emerald-500 text-emerald-500"
    }
  ];

  return (
    <section id="rules" className="py-20 px-4 sm:px-6 relative z-20 bg-[#090A12] border-t border-[#6E3BFF]/10">
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6E3BFF]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#F5C85C] bg-[#F5C85C]/10 px-3 py-1 rounded-full border border-[#F5C85C]/20">
            Tata Tertib Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white mt-4 tracking-tight">
            ATURAN MAIN & REGULASI SERVER
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Harap patuhi aturan di bawah ini demi kenyamanan bersama. Pelanggaran keras akan ditindaklanjuti oleh Staff!
          </p>
        </div>

        {/* Rules Modern Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#6E3BFF]/50 via-[#31C5FF]/30 to-transparent transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {rulesList.map((rule, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={rule.id}
                  id={`rule-item-${rule.id}`}
                  className={`flex flex-col sm:flex-row items-start justify-between relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Pinpoint */}
                  <div className="absolute left-4 md:left-1/2 top-4 w-5 h-5 rounded-full bg-[#171C28] border-2 border-[#6E3BFF] transform -translate-x-1/2 z-10 hidden sm:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#31C5FF]" />
                  </div>

                  {/* Empty space filler for desktop spacing alignment */}
                  <div className="w-full sm:w-[45%] hidden sm:block" />

                  {/* Content Card */}
                  <div className="w-full sm:w-[45%] bg-[#171C28]/90 border border-[#6E3BFF]/10 hover:border-[#6E3BFF]/30 p-6 rounded-2xl shadow-xl transition-all relative group">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#6E3BFF] to-[#31C5FF] opacity-60">
                        {rule.id}
                      </span>
                      <span className={`text-[10px] font-mono tracking-widest font-bold border rounded-md px-2.5 py-0.5 uppercase ${rule.color}`}>
                        {rule.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-[#31C5FF] transition-colors">
                      {rule.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modern Warning Card */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-red-500/20 bg-gradient-to-r from-red-950/10 via-[#171C28]/95 to-[#171C28]/95 p-6 sm:p-8 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase flex items-center gap-2">
                <span>PERINGATAN & SANKSI KERAS</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mt-2">
                Setiap bentuk kecurangan akan ditindak tegas tanpa ada pengampunan. Server kami memelihara sistem proteksi otomatis berkualitas tinggi untuk memantau aktivitas mencurigakan.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-2.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Dilarang Cheat & Hack</strong>
                    <span className="block text-gray-400 mt-0.5">Penggunaan X-Ray, killaura, fly, speed hack, dll. Sanksi: Banned Permanen.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Eksploitasi Bug Server</strong>
                    <span className="block text-gray-400 mt-0.5">Duping item atau bug glitch sangat dilarang. Harap laporkan jika menemukan bug.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Toksisitas & SARA</strong>
                    <span className="block text-gray-400 mt-0.5">Rasisme, homofobia, pelecehan verbal, dan ujaran kebencian di obrolan chat.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Spamming & Promosi</strong>
                    <span className="block text-gray-400 mt-0.5">Mempromosikan server Minecraft lain di dalam chat publik maupun privat.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-red-500/10 flex flex-wrap gap-4 items-center justify-between text-xs">
                <span className="text-gray-400 font-mono text-[10px]">Staff memegang keputusan mutlak untuk kebaikan ekosistem server.</span>
                <span className="text-red-400 font-bold tracking-widest font-mono text-[10px] uppercase">Zero Tolerance Policy</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
