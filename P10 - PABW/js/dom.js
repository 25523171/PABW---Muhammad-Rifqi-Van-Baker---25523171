
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");
const barisFilter = document.querySelector("#filter-kategori");


export function buatKartu(item) {
  const kartu = document.createElement("div");
  kartu.className = "kartu";

  const img = document.createElement("img");
  img.src = item.gambar || "placeholder.jpg";
  img.alt = `Mainan ${item.judul}`;
  img.className = "foto-produk";

  const ket = document.createElement("div");
  ket.className = "keterangan-produk";

  const h3 = document.createElement("h3");
  h3.textContent = item.judul;

  const pHarga = document.createElement("p");
  pHarga.className = "harga";
  pHarga.textContent = item.harga;

  const pStok = document.createElement("p");
  pStok.className = "stok";
  pStok.textContent = `Stok: ${item.stok}`;

  const pKategori = document.createElement("p");
  pKategori.className = "kategori";
  pKategori.textContent = `Kategori: ${item.kategori}`;

  ket.append(h3, pHarga, pStok, pKategori);
  kartu.append(img, ket);

  return kartu;
}

export function render(daftar) {
  if (!wadah) return;
  wadah.textContent = ""; 

  if (!daftar || daftar.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Belum ada data mainan.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  const fragment = document.createDocumentFragment();
  daftar.forEach((item) => {
    fragment.append(buatKartu(item));
  });
  wadah.append(fragment);
}


export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}


export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}


export function pasangFilter(daftar) {
  if (!barisFilter) return;

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    barisFilter.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("aktif", btn === tombol);
    });

    const hasilFilter = daftar.filter(
      (p) => kategori === "semua" || p.kategori.toLowerCase() === kategori.toLowerCase()
    );

    render(hasilFilter);
  });
}