// js/app.js
import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  // 1. Pulihkan pilihan dari localStorage jika ada
  pulihkan(muat());

  // 2. Pasang event listener
  pasangPendengar();

  // 3. Ambil data dari server
  aturMemuat(true);
  try {
    const data = await ambilProyek();
    isiProyek(data);
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
  } finally {
    aturMemuat(false);
  }
}

mulai();