import React, { useState } from "react";
import { Server, ShieldCheck, Terminal, Copy, Check, Users, Radio, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PremiumCards() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const serverInfo = {
    javaIP: "prem-1.aerocloud.id:25552",
    bedrockIP: "prem-1.aerocloud.id",
    port: "19124",
    javaVersion: "All Version Java",
    mcpeVersion: "MCPE 26.0 - 26.30",
    players: { online: 32, max: 100 }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <section id="ip-section" className="py-20 px-4 sm:px-6 relative z-20 bg-[#090A12]">
      {/* Absolute glow decorative elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#6E3BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#31C5FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#31C5FF] bg-[#31C5FF]/10 px-3 py-1 rounded-full border border-[#31C5FF]/20">
            Koneksi Server
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white mt-4 tracking-tight">
            ALAMAT IP & PORT RESMI
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Salin info IP di bawah sesuai perangkat yang Anda gunakan, tambahkan ke server list Minecraft Anda, dan mainkan langsung!
          </p>
        </div>

        {/* Status Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Mode */}
          <div className="p-6 rounded-2xl bg-[#171C28]/90 border border-[#6E3BFF]/20 hover:border-[#6E3BFF]/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-[#6E3BFF]/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 border border-[#6E3BFF]/20">
              <ShieldCheck className="w-6 h-6 text-[#6E3BFF]" />
            </div>
            <h3 className="text-xs font-mono uppercase text-gray-400 tracking-wider">Tipe Server</h3>
            <p className="text-xl font-bold text-white mt-1">Semi Roleplay</p>
            <p className="text-xs text-gray-400 mt-2">
              Satu server dengan 2 dunia berbeda: Dunia Roleplay & Dunia Non-Roleplay yang asik!
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-[#090A12] border border-[#6E3BFF]/20 text-[#31C5FF]">Java</span>
              <span className="px-2 py-0.5 rounded bg-[#090A12] border border-[#6E3BFF]/20 text-[#F5C85C]">Bedrock / PE</span>
            </div>
          </div>

          {/* Card 2: Versi */}
          <div className="p-6 rounded-2xl bg-[#171C28]/90 border border-[#31C5FF]/20 hover:border-[#31C5FF]/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-[#31C5FF]/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 border border-[#31C5FF]/20">
              <Terminal className="w-6 h-6 text-[#31C5FF]" />
            </div>
            <h3 className="text-xs font-mono uppercase text-gray-400 tracking-wider">Versi Kompatibel</h3>
            <div className="mt-2 space-y-1">
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#31C5FF]" />
                Java: {serverInfo.javaVersion}
              </p>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5C85C]" />
                Bedrock: {serverInfo.mcpeVersion}
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Dapat diakses melalui HP (Android/iOS) maupun PC/Laptop dengan sangat lancar.
            </p>
          </div>

          {/* Card 3: Status Indikator */}
          <div className="p-6 rounded-2xl bg-[#171C28]/90 border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 border border-emerald-500/20">
              <Radio className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
            <h3 className="text-xs font-mono uppercase text-gray-400 tracking-wider">Status Indikator</h3>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="text-base">🟩✔️</span>
                <span>Online / Aktif</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="text-base">🟨🛠️</span>
                <span>MT (Maintenance / Perawatan)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="text-base">🟥✖️</span>
                <span>Offline / Mati</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Interactive Pay-To-Win & Community Notice Card */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#6E3BFF]/10 via-[#171C28]/95 to-[#31C5FF]/5 border border-[#6E3BFF]/25 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#6E3BFF]/20 border border-[#6E3BFF]/30 flex items-center justify-center text-[#F5C85C] shrink-0 mt-1">
              <Sparkles className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-wide uppercase">
                AJAK TEMAN-TEMANMU BERGABUNG! 🚀
              </h4>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Jangan lupa ajak teman-teman dan semua orang biar tau server ini! <strong className="text-[#F5C85C]">"Di sini ada p2win juga"</strong> biar kamu bisa mempercepat kemajuan karaktermu dengan seru dan kompetitif!
              </p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-lg bg-[#6E3BFF]/20 border border-[#6E3BFF]/40 text-xs font-bold text-[#31C5FF] shrink-0">
            ✨ Pay To Win Available ✨
          </div>
        </div>

        {/* Detailed IP Address Info Card */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#171C28] to-[#0e1119] border border-[#6E3BFF]/20 shadow-2xl p-6 sm:p-8 relative">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#6E3BFF]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="w-5 h-5 text-[#31C5FF]" />
                <h3 className="text-lg font-bold text-white font-sans uppercase tracking-wide">
                  SALIN IP DAN MASUK SEKARANG
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Silakan pilih IP sesuai platform Minecraft yang Anda gunakan untuk bermain.
              </p>
              
              <div className="flex flex-col gap-4">
                {/* Java Info Block */}
                <div className="p-4 rounded-xl bg-[#090A12]/80 border border-[#6E3BFF]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#6E3BFF] uppercase tracking-widest font-bold">Java Edition IP</span>
                    <p className="text-base font-mono font-bold text-white mt-0.5">{serverInfo.javaIP}</p>
                  </div>
                  <button
                    id="btn-copy-java"
                    onClick={() => handleCopy(serverInfo.javaIP, "Java IP")}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#6E3BFF]/10 hover:bg-[#6E3BFF]/30 border border-[#6E3BFF]/30 text-white font-semibold text-xs transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#31C5FF]" />
                    <span>Salin IP Java</span>
                  </button>
                </div>

                {/* Bedrock Info Block */}
                <div className="p-4 rounded-xl bg-[#090A12]/80 border border-[#31C5FF]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-[#31C5FF] uppercase tracking-widest font-bold">Bedrock / PE IP & Port</span>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mt-0.5">
                      <div>
                        <span className="text-xs text-gray-400 block font-mono">IP</span>
                        <p className="text-base font-mono font-bold text-white">{serverInfo.bedrockIP}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block font-mono">Port</span>
                        <p className="text-base font-mono font-bold text-[#F5C85C]">{serverInfo.port}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button
                      id="btn-copy-bedrock-ip"
                      onClick={() => handleCopy(serverInfo.bedrockIP, "Bedrock IP")}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#31C5FF]/10 hover:bg-[#31C5FF]/30 border border-[#31C5FF]/30 text-white font-semibold text-xs transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#31C5FF]" />
                      <span>Salin IP</span>
                    </button>
                    <button
                      id="btn-copy-bedrock-port"
                      onClick={() => handleCopy(serverInfo.port, "Bedrock Port")}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5C85C]/10 hover:bg-[#F5C85C]/30 border border-[#F5C85C]/30 text-white font-semibold text-xs transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#F5C85C]" />
                      <span>Salin Port</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Gamemode Preview Mock Widget */}
            <div className="relative rounded-xl overflow-hidden bg-[#090A12] border border-[#6E3BFF]/20 p-6 flex flex-col justify-between h-72">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6E3BFF]/20 to-transparent pointer-events-none" />
              <div>
                <span className="text-[10px] font-mono text-[#F5C85C] uppercase tracking-wider bg-[#F5C85C]/10 border border-[#F5C85C]/20 px-2 py-0.5 rounded-md">
                  Server Guide
                </span>
                <h4 className="text-base font-bold text-white mt-3 font-sans">CARA BERGABUNG DI MINECRAFT</h4>
                <ol className="text-xs text-gray-400 space-y-2.5 mt-4 list-decimal list-inside leading-relaxed">
                  <li>Buka game Minecraft Java atau Bedrock Anda</li>
                  <li>Pilih menu <strong className="text-white">Multiplayer / Servers</strong> lalu klik <strong className="text-white">Add Server</strong></li>
                  <li>Masukkan nama server: <strong className="text-white">Revordian SMP</strong></li>
                  <li>Tempel / Paste IP Address yang telah disalin di atas</li>
                  <li>(Khusus Bedrock) Ubah nilai <strong className="text-[#F5C85C]">Port</strong> menjadi <strong className="text-[#F5C85C]">19124</strong></li>
                  <li>Klik <strong className="text-white">Done / Save</strong> lalu klik <strong className="text-[#31C5FF]">Join Server</strong>!</li>
                </ol>
              </div>
              <div className="text-[10px] font-mono text-gray-500 border-t border-[#6E3BFF]/10 pt-3 flex justify-between">
                <span>VERSI MINECRAFT 1.16+</span>
                <span className="text-[#31C5FF]">LINTAS PLATFORM</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Copy notification Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            id="toast-copy"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 right-10 z-50 px-5 py-3.5 bg-[#171C28] border-2 border-[#6E3BFF] text-white rounded-xl shadow-2xl flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-mono">Berhasil disalin!</span>
              <span className="text-sm font-bold">{copiedText} berhasil disalin</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
