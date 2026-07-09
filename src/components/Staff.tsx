import { Shield, Sparkles, Code, MessageSquare, Award } from "lucide-react";

export default function Staff() {
  const staffMembers = [
    {
      name: "Xlide",
      role: "Server Founder & Owner",
      avatar: "https://mc-heads.net/avatar/Xlide/128",
      description: "Pendiri utama Revordian SMP yang merancang konsep semi-roleplay dan mengatur kestabilan performa server.",
      icon: Award,
      color: "from-[#F5C85C] to-[#D4AF37]",
      badgeColor: "bg-[#F5C85C]/10 border-[#F5C85C]/20 text-[#F5C85C]"
    },
    {
      name: "Dragon",
      role: "System & Network Admin",
      avatar: "https://mc-heads.net/avatar/Dragon/128",
      description: "Penanggung jawab infrastruktur jaringan, server database, optimasi ram, serta keamanan anti-DDOS server.",
      icon: Code,
      color: "from-[#6E3BFF] to-[#31C5FF]",
      badgeColor: "bg-[#6E3BFF]/10 border-[#6E3BFF]/20 text-[#31C5FF]"
    },
    {
      name: "Lutpi",
      role: "Head Developer",
      avatar: "https://mc-heads.net/avatar/Lutpi/128",
      description: "Mengembangkan plugin kustom, mekanik ekonomi, konfigurasi faksi, dan sistem event mingguan.",
      icon: Sparkles,
      color: "from-[#31C5FF] to-teal-400",
      badgeColor: "bg-teal-500/10 border-teal-500/20 text-teal-400"
    },
    {
      name: "Mar",
      role: "Community Manager",
      avatar: "https://mc-heads.net/avatar/Mar/128",
      description: "Menjaga keharmonisan obrolan chat, mengelola pengaduan pemain di Discord, serta memimpin tim moderator.",
      icon: MessageSquare,
      color: "from-pink-500 to-[#6E3BFF]",
      badgeColor: "bg-pink-500/10 border-pink-500/20 text-pink-400"
    }
  ];

  return (
    <section id="staff" className="py-24 px-4 sm:px-6 relative z-20 bg-[#090A12] border-t border-[#6E3BFF]/10">
      
      {/* Absolute background blur */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#6E3BFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#31C5FF] bg-[#31C5FF]/10 px-3 py-1 rounded-full border border-[#31C5FF]/20">
            Tim Staff Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white mt-4 tracking-tight">
            TEMUI PARA PENGELOLA SERVER
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Di balik serunya petualangan di Revordian, terdapat tim profesional yang berdedikasi menjaga server tetap aman, stabil, dan ramah.
          </p>
        </div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffMembers.map((staff) => {
            const IconComponent = staff.icon;
            return (
              <div
                key={staff.name}
                id={`staff-${staff.name.toLowerCase()}`}
                className="p-6 rounded-2xl bg-[#171C28]/80 border border-[#6E3BFF]/10 hover:border-transparent transition-all duration-300 relative group overflow-hidden flex flex-col items-center text-center"
              >
                {/* Interactive glow highlight */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(110, 59, 255, 0.08) 0%, transparent 70%)`
                  }}
                />

                {/* Avatar with beautiful circular glowing frame */}
                <div className="relative mb-6">
                  {/* Outer gradient border ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500 blur-[2px]" style={{ backgroundImage: `linear-gradient(to top right, var(--tw-gradient-stops))` }} />
                  
                  {/* Inside Avatar Frame */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-[#090A12] border-2 border-[#171C28] flex items-center justify-center p-2">
                    <img
                      src={staff.avatar}
                      alt={`${staff.name} Minecraft Skin Head`}
                      className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Tiny floating Role badge */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-[#171C28] border border-[#6E3BFF]/30 flex items-center justify-center text-white shadow-md">
                    <IconComponent className="w-3.5 h-3.5 text-[#31C5FF]" />
                  </div>
                </div>

                {/* Staff Name & Title */}
                <h3 className="text-lg font-black text-white tracking-wide font-sans mt-2">
                  {staff.name}
                </h3>
                
                <span className={`text-[10px] font-mono tracking-widest font-bold border rounded-md px-2.5 py-0.5 mt-2 uppercase ${staff.badgeColor}`}>
                  {staff.role}
                </span>

                <p className="text-xs text-gray-400 leading-relaxed mt-4">
                  {staff.description}
                </p>

                {/* Bottom decorative bar line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${staff.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
