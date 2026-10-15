// js/app.js
import { ambilProyek } from "./api.js";
import { render, pasangFilter, aturMemuat, tampilkanGalat } from "./dom.js";

async function muat() {
  aturMemuat(true); // Keadaan Memuat
  try {
    const daftar = await ambilProyek(); // Ambil data dari api.js
    pasangFilter(daftar);               // Pasang event listener filter
    render(daftar);                     // Render kartu ke halaman
  } catch (galat) {
    // Keadaan Gagal
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
  } finally {
    aturMemuat(false); // Selesai memuat
  }
}

// Jalankan fungsi utama saat halaman dibuka
muat();