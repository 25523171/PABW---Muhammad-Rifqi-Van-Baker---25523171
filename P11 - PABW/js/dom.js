// js/dom.js
import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const muat = document.querySelector("#muat");

export function buatKartu(proyek, favorit) {
  const div = document.createElement("div");
  div.className = "kartu";

  // 1. GAMBAR MAINAN
  const gambarUrl = proyek.gambar || proyek.foto || proyek.image || "https://via.placeholder.com/150";
  const img = document.createElement("img");
  img.src = gambarUrl;
  img.alt = proyek.nama || proyek.judul || "Mainan";
  img.className = "gambar-mainan";
  div.append(img);

  // 2. NAMA MAINAN
  const namaMainan = proyek.nama || proyek.judul || "Mainan";
  const span = document.createElement("span");
  span.className = "judul-mainan";
  span.textContent = namaMainan;
  div.append(span);

  // 3. HARGA MAINAN
  if (proyek.harga) {
    const harga = document.createElement("span");
    harga.className = "harga-mainan";
    const teksHarga = typeof proyek.harga === 'number' 
      ? ` Rp ${proyek.harga.toLocaleString('id-ID')}` 
      : ` Rp ${proyek.harga}`;
    harga.textContent = teksHarga;
    div.append(harga);
  }

  // 4. TOMBOL FAVORIT (★ / ☆)
  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  
  const isFav = favorit.map(String).includes(String(proyek.id));
  tombol.textContent = isFav ? "★" : "☆";

  div.append(tombol);
  return div;
}

export function render(state) {
  if (!wadah) return;

  wadah.textContent = "";

  document.querySelectorAll("[data-kategori]").forEach((tombol) => {
    if (tombol.dataset.kategori === state.kategoriAktif) {
      tombol.classList.add("aktif");
    } else {
      tombol.classList.remove("aktif");
    }
  });

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;

  tampil.forEach((item) => {
    wadah.append(buatKartu(item, state.favorit));
  });
}

export function aturMemuat(sedangMemuat) {
  if (muat) muat.hidden = !sedangMemuat;
}

export function tampilkanGalat(pesan) {
  if (kosong) {
    kosong.textContent = pesan;
    kosong.hidden = false;
  }
}