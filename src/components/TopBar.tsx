import { useDeveloperData } from "../hooks/useDeveloperData";
import { Phone, Globe, Users, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function TopBar() {
  const { data, loading } = useDeveloperData();

  return (
    <div 
      id="top-developer-bar"
      className="hidden sm:flex w-full bg-[#07080f]/90 border-b border-[#6E3BFF]/20 text-xs text-gray-400 sm:h-11 items-center justify-between px-4 sm:px-6 relative z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between gap-2">
        {/* Left Side: Developer Name */}
        <div className="flex items-center gap-2 font-medium text-gray-300">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#31C5FF] bg-[#31C5FF]/10 px-2 py-0.5 rounded border border-[#31C5FF]/25">
            Developer
          </span>
          <span className="text-white text-xs font-bold font-sans">
            {data.name}
          </span>
        </div>

        {/* Right Side: Links (hidden on mobile, fully integrated into the Navbar Mobile Drawer) */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] sm:text-xs">
          <a
            id="link-dev-wa"
            href={data.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#31C5FF] transition-colors group"
          >
            <Phone className="w-3 h-3 text-[#31C5FF] group-hover:scale-110 transition-transform" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          <span className="text-gray-700 hidden sm:inline">|</span>

          <a
            id="link-dev-portfolio"
            href={data.website.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#6E3BFF] transition-colors group"
          >
            <Globe className="w-3 h-3 text-[#6E3BFF] group-hover:scale-110 transition-transform" />
            <span>Website Portfolio</span>
            <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          <span className="text-gray-700 hidden sm:inline">|</span>

          <a
            id="link-dev-community"
            href={data.community.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#F5C85C] transition-colors group"
          >
            <Users className="w-3 h-3 text-[#F5C85C] group-hover:scale-110 transition-transform" />
            <span>{data.community.name}</span>
            <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>

          <span className="text-gray-700 hidden sm:inline">|</span>

          <a
            id="link-dev-discord"
            href={data.community.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#31C5FF] transition-colors group"
          >
            <span className="text-indigo-400 font-bold group-hover:scale-110 transition-transform">Discord</span>
            <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}
