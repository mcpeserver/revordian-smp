# Contributing to Revordian Landing Page

Terima kasih atas minat Anda untuk berkontribusi pada pengembangan website Revordian Unbeatable SMP! Panduan ini dirancang untuk memastikan proses kontribusi berjalan dengan lancar dan harmonis.

## 🛠️ Alur Kontribusi

1. **Fork Repositori**: Buat salinan repositori ini di akun GitHub Anda sendiri.
2. **Klon Repositori**: Unduh kode ke komputer lokal Anda.
   ```bash
   git clone https://github.com/username/revordian-smp.git
   ```
3. **Buat Branch Baru**: Buat branch kerja dari master/main.
   ```bash
   git checkout -b feature/nama-fitur-baru
   ```
4. **Lakukan Perubahan**: Tambahkan kode baru, perbaiki bug, atau perbarui aset.
5. **Verifikasi Kode**: Pastikan build berjalan lancar dan linter tidak mengembalikan kesalahan.
   ```bash
   npm run lint
   npm run build
   ```
6. **Commit & Push**: Commit perubahan Anda dengan pesan terstruktur, lalu push ke fork Anda.
7. **Buat Pull Request (PR)**: Ajukan PR baru dari branch Anda ke repositori utama kami menggunakan template PR yang disediakan.

## 📝 Aturan Penulisan Kode
- Gunakan TypeScript secara disiplin, hindari penggunaan tipe `any`.
- Gunakan Tailwind CSS untuk penataan gaya visual.
- Tulis kode modular dengan membagi komponen besar ke file independen.
- Hormati prinsip performa dan aksesibilitas (contrast ratio minimal 4.5:1).
