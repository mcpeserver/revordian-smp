import { useDeveloperData } from "../hooks/useDeveloperData";
import { Phone, Globe, Users, ArrowUpRight, ShieldCheck, Heart, MessageSquare } from "lucide-react";

interface FooterProps {
  logoUrl: string;
  onPageChange: (page: string) => void;
}

export default function Footer({ logoUrl, onPageChange }: FooterProps) {
  const { data, loading } = useDeveloperData();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full bg-[#07080f] border-t border-[#6E3BFF]/20 text-gray-400 py-16 px-4 sm:px-6 relative z-30">
      
      {/* Decorative glow background */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6E3BFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Server Branding */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Revordian Unbeatable SMP Logo"
              className="w-12 h-12 rounded-xl border border-[#6E3BFF]/30 object-contain p-0.5 bg-[#171C28]"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-sans font-black tracking-widest text-lg text-white">
                REVORDIAN
              </span>
              <span className="text-xs font-mono tracking-widest text-[#31C5FF]">
                UNBEATABLE SMP
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-sm mt-2 leading-relaxed">
            Dunia Semi Roleplay Minecraft lintas platform yang memadukan keindahan fantasi medieval dan petualangan tanpa akhir.
          </p>

          <div className="flex flex-col gap-1 text-xs font-mono mt-4">
            <span className="text-gray-500">
              © {currentYear} Revordian Unbeatable SMP. All rights reserved.
            </span>
            <span className="text-[#31C5FF]/70">
              Server Version: 1.16.x - 1.26.x Cross-Platform
            </span>
            <span className="text-[10px] text-gray-600">
              This server is not affiliated with or endorsed by Mojang Synergies AB.
            </span>
          </div>
        </div>

        {/* Center Column: Quick Navigation Links */}
        <div className="md:col-span-3 flex flex-col gap-4 md:pl-4">
          <h3 className="text-sm font-bold text-white tracking-wider uppercase">
            Halaman Server
          </h3>
          <div className="flex flex-col gap-3 text-xs sm:text-sm font-medium">
            {[
              { name: "Home Dashboard", page: "home" },
              { name: "Fitur Gameplay", page: "fitur" },
              { name: "Roleplay Backstory", page: "roleplay" },
              { name: "Rules & Regulations", page: "rules" },
              { name: "Staff / Admin", page: "admin" },
              { name: "Support Center", page: "support" }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onPageChange(link.page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-left text-gray-400 hover:text-[#31C5FF] transition-all hover:translate-x-1 duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Developer Info Panel */}
        <div className="md:col-span-4 flex flex-col gap-6 md:items-end">
          <div className="flex flex-col md:items-end">
            <span className="text-xs uppercase font-mono tracking-widest text-[#31C5FF] bg-[#31C5FF]/10 px-3 py-1 rounded-full border border-[#31C5FF]/20 mb-3">
              Web Creator Info
            </span>
            <h3 className="text-sm font-bold text-white tracking-wide">
              DEVELOPER IDENTIFICATION
            </h3>
          </div>

          {/* Developer Details fetched dynamically */}
          <div className="flex flex-col gap-3.5 w-full max-w-sm bg-[#171C28]/60 border border-[#6E3BFF]/10 p-5 rounded-2xl md:items-start text-xs">
            <div className="flex items-center gap-2 text-gray-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#31C5FF]" />
              <span>
                Developer by:{" "}
                {loading ? (
                  <span className="inline-block w-16 h-3 bg-gray-700 animate-pulse rounded"></span>
                ) : (
                  <strong className="text-white font-bold">{data.name}</strong>
                )}
              </span>
            </div>

            <div className="h-[1px] w-full bg-[#6E3BFF]/10 my-1" />

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full">
              <a
                id="footer-wa"
                href={data.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#31C5FF] transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#31C5FF] group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                id="footer-portfolio"
                href={data.website.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#6E3BFF] transition-colors group"
              >
                <Globe className="w-3.5 h-3.5 text-[#6E3BFF] group-hover:scale-110 transition-transform" />
                <span>Portfolio</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                id="footer-community"
                href={data.community.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F5C85C] transition-colors group"
              >
                <Users className="w-3.5 h-3.5 text-[#F5C85C] group-hover:scale-110 transition-transform" />
                <span>Community</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                id="footer-community-discord"
                href={data.community.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#31C5FF] transition-colors group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Discord Group</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 animate-pulse fill-red-500" />
            <span>by Ran Dev</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
