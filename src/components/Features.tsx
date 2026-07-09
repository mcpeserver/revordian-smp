import { 
  Sparkles, 
  Coins, 
  Swords, 
  RefreshCw, 
  Scroll, 
  Map, 
  Compass, 
  Layers, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  const mechanics = [
    {
      title: "Roleplay",
      description: "Ambil peran sebagai pedagang, raja, faksi militer, atau pengembara sunyi dan tulis jalan takdirmu sendiri.",
      icon: Sparkles,
      color: "#6E3BFF",
      glow: "rgba(110, 59, 255, 0.15)"
    },
    {
      title: "Economy",
      description: "Gunakan mata uang server untuk transaksi, dirikan tokomu, investasikan aset, dan jadilah raja finansial.",
      icon: Coins,
      color: "#31C5FF",
      glow: "rgba(49, 197, 255, 0.15)"
    },
    {
      title: "PvP System",
      description: "Ikuti duel arena menegangkan atau hadapi pertempuran faksi malam hari yang menguji koordinasi timmu.",
      icon: Swords,
      color: "#F5C85C",
      glow: "rgba(245, 200, 92, 0.15)"
    },
    {
      title: "Trading",
      description: "Sistem pertukaran barang yang aman antar pemain untuk menghindari penipuan (scam) di dalam permainan.",
      icon: RefreshCw,
      color: "#10B981",
      glow: "rgba(16, 185, 129, 0.15)"
    },
    {
      title: "Quest",
      description: "Selesaikan misi harian dan mingguan yang menantang dari NPC untuk mendapatkan hadiah item langka.",
      icon: Scroll,
      color: "#EF4444",
      glow: "rgba(239, 68, 68, 0.15)"
    },
    {
      title: "Exploration",
      description: "Temukan bioma-bioma baru yang eksotis, pulau terbang rahasia, dan struktur kuno yang penuh misteri.",
      icon: Map,
      color: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.15)"
    },
    {
      title: "Adventure",
      description: "Kalahkan bos-bos kustom, taklukkan dungeon berlevel tinggi, dan kumpulkan artefak legendaris.",
      icon: Compass,
      color: "#8B5CF6",
      glow: "rgba(139, 92, 246, 0.15)"
    },
    {
      title: "Cross Platform",
      description: "Bermain bersama temanmu tanpa hambatan. Server mendukung penuh koneksi Java Edition dan Bedrock Edition.",
      icon: Layers,
      color: "#EC4899",
      glow: "rgba(236, 72, 153, 0.15)"
    }
  ];

  return (
    <section id="fitur" className="py-24 px-4 sm:px-6 relative z-20 bg-[#090A12] border-t border-[#6E3BFF]/10">
      
      {/* Decorative center grid blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6E3BFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#31C5FF] bg-[#31C5FF]/10 px-3 py-1 rounded-full border border-[#31C5FF]/20">
            Mekanik Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white mt-4 tracking-tight">
            FITUR & MEKANIK TERBAIK
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Kami menghadirkan serangkaian sistem canggih untuk memastikan pengalaman bermain Anda tetap seru, aman, dan kompetitif.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mechanics.map((mech, index) => {
            const IconComponent = mech.icon;
            return (
              <div
                key={mech.title}
                id={`feature-${mech.title.toLowerCase()}`}
                className="p-6 rounded-2xl bg-[#171C28]/80 border border-[#6E3BFF]/10 hover:border-transparent transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
                style={{
                  // Set CSS variables for inline transitions
                  ["--glow-color" as any]: mech.glow,
                  ["--border-hover" as any]: mech.color,
                }}
              >
                {/* Background Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{
                    background: `radial-gradient(circle at 50% 10%, ${mech.glow}, transparent 65%)`
                  }}
                />

                <div>
                  {/* Icon Container with Custom Glowing border */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 relative z-10"
                    style={{
                      backgroundColor: `${mech.color}10`,
                      borderColor: `${mech.color}30`,
                      color: mech.color
                    }}
                  >
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-white transition-colors">
                    {mech.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 relative z-10">
                    {mech.description}
                  </p>
                </div>

                {/* Bottom line status decorative */}
                <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono font-bold text-gray-500 group-hover:text-white transition-colors relative z-10">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: mech.color }} />
                  <span>ACTIVE FEATURE</span>
                </div>

                {/* Subtle border accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
                  style={{ backgroundColor: mech.color }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
