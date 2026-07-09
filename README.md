# Revordian Unbeatable SMP - Official Landing Page

Website resmi **Revordian Unbeatable SMP** - Sebuah Server Minecraft Semi Roleplay lintas platform (Java & Bedrock) yang memadukan keindahan fantasi medieval, faksi ekonomi, pertempuran malam PvP, dan kebebasan bermain dalam satu ekosistem stabil.

Website ini didesain eksklusif dengan gaya MMORPG modern, menggunakan performa maksimal React, Vite, Tailwind CSS, dan Framer Motion.

---

## 🎨 Preview & Desain
- **Mood Visual**: Gelap-Misterius (Sci-Fi Cyberpunk bertemu Medieval Castle)
- **Tema Warna**:
  - Dominan: `#6E3BFF` (Royal Violet)
  - Secondary: `#31C5FF` (Sky Cyan)
  - Accent: `#F5C85C` (Golden Sun)
  - Background: `#090A12` (Cosmic Abyss)
- **Tipografi**:
  - Headings & Displays: **Space Grotesk**
  - General UI: **Inter**
  - Data & Indicators: **JetBrains Mono**

---

## 🚀 Fitur Utama Website
1. **Dynamic Developer Top-Bar**: Menampilkan data web developer secara real-time dari API GitHub eksternal.
2. **Interactive Status Bento Grid**: Menampilkan status online server, versi kompatibel, serta mode permainan.
3. **Dual Connection Copy IP**: Tombol interaktif untuk menyalin IP Java, IP Bedrock, dan Port Bedrock dengan custom animated toast.
4. **Interactive Timeline Rules**: Navigasi aturan main server dengan timeline interaktif beserta Warning Card Sanksi.
5. **Staff Directory**: Grid pengelola server yang terintegrasi dengan 3D Minecraft skin renders CDN.
6. **Optimized Images & Animations**: Menggunakan micro-interactions halus dari Framer Motion.

---

## 🛠️ Teknologi yang Digunakan
- **Framework**: React 19 dengan Vite
- **Styling**: Tailwind CSS v4 (melalui `@tailwindcss/vite`)
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Data Fetching**: Native Fetch API dengan fallback pengaman

---

## 💻 Cara Instalasi Lokal

### Prasyarat
- Node.js versi 18 ke atas
- npm atau yarn

### Langkah-Langkah
1. **Klon Repositori**:
   ```bash
   git clone https://github.com/username/revordian-smp.git
   cd revordian-smp
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Developer Server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

4. **Kompilasi / Build Produksi**:
   ```bash
   npm run build
   ```

---

## 📁 Struktur Folder
```
/
├── .github/                # Template isu dan pull request
├── src/
│   ├── assets/             # Gambar & visual utama buatan AI Studio
│   ├── components/         # Komponen modular halaman landing
│   │   ├── TopBar.tsx      # Bar Developer dinamis paling atas
│   │   ├── Navbar.tsx      # Menu navigasi kaca transparan
│   │   ├── Hero.tsx        # Judul & Floating logo cinematic
│   │   ├── PremiumCards.tsx# Status server & tombol copy IP
│   │   ├── About.tsx       # Penjelasan dual world sistem
│   │   ├── Features.tsx    # Grid mekanik gameplay
│   │   ├── Rules.tsx       # Timeline aturan server & sanksi
│   │   ├── Staff.tsx       # Grid profil Minecraft staff
│   │   ├── CTA.tsx         # Banner gabung discord & server
│   │   └── Footer.tsx      # Copyright & Developer info double column
│   ├── hooks/
│   │   └── useDeveloperData.ts # Hook fetch API pengembang dinamis
│   ├── types/
│   │   └── index.ts        # Deklarasi tipe TypeScript
│   ├── App.tsx             # Halaman utama landing page
│   ├── main.tsx            # Entrypoint React
│   └── index.css           # Global CSS & Google Fonts imports
├── index.html              # Template HTML utama
├── package.json            # Daftar dependensi aplikasi
├── tsconfig.json           # Konfigurasi TypeScript compiler
└── vite.config.ts          # Konfigurasi build sistem Vite
```

---

## ⚡ Deployment ke Vercel

Proyek ini sepenuhnya kompatibel dengan platform Vercel untuk deployment tanpa konfigurasi tambahan:
1. Hubungkan repositori GitHub Anda ke akun Vercel.
2. Pilih framework **Vite** atau pilih deteksi otomatis.
3. Kosongkan environment variable jika tidak diperlukan, atau isi `GEMINI_API_KEY` jika ingin mengembangkan API.
4. Klik **Deploy**!

---

## 🤝 Kontribusi
Kami sangat terbuka dengan kontribusi dari komunitas! Silakan baca panduan di `CONTRIBUTING.md` untuk mengirimkan Pull Request.

---

## 📜 Lisensi
Proyek ini dilisensikan di bawah lisensi MIT. Lihat file `LICENSE` untuk informasi lebih lanjut.

---

## 💎 Kredit Pengembang
Dibuat dengan cinta oleh **Ran Dev** (diambil secara dinamis melalui GitHub API di website) beserta komunitas pengembang.
