// js/events.js
import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  // Listener Filter Kategori
  document.addEventListener("click", (event) => {
    const tombol = event.target.closest("[data-kategori]");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  // Listener Klik Tombol Favorit
  const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(tombol.dataset.id);
    });
  }

  // Listener Tombol Atur Ulang
  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
}