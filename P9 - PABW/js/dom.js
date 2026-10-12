import { daftarProyek } from "./app.js";
const wadahProyek = document.querySelector("#daftar-proyek");
const barisFilter = document.querySelector("#filter-kategori");
const pesanKosong = document.querySelector("#pesan-kosong");
const formKontak = document.querySelector("#form-kontak");


function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu-proyek";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul; // Aman dari XSS

  const deskripsi = document.createElement("p");
  deskripsi.textContent = proyek.deskripsi;

  const tagKategori = document.createElement("span");
  tagKategori.className = "badge";
  tagKategori.textContent = proyek.kategori;

  li.append(judul, deskripsi, tagKategori);
  return li;
}


function render(daftar) {
  // 1. Kosongkan wadah terlebih dahulu
  wadahProyek.textContent = "";

  // 2. Periksa keadaan kosong
  if (!daftar || daftar.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  // 3. Isi ulang wadah dengan elemen baru
  const fragment = document.createDocumentFragment();
  daftar.forEach((proyek) => {
    fragment.append(buatKartu(proyek));
  });
  wadahProyek.append(fragment);
}


if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // Abaikan jika klik di luar tombol

    const kategori = tombol.dataset.kategori;

    // Tandai tombol aktif
    barisFilter.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("aktif", btn === tombol);
    });

    // Filter data
    const hasilFilter = daftarProyek.filter(
      (p) => kategori === "semua" || p.kategori === kategori
    );

    render(hasilFilter);
  });
}


if (formKontak) {
  const inputs = formKontak.querySelectorAll("input, textarea");
  const tombolSubmit = formKontak.querySelector("button[type='submit']");

  function validasiKolom(input) {
    const nilai = input.value.trim();
    const wadahPesan = input.nextElementSibling; // Elemen span pesan galat
    let sah = true;

    if (nilai === "") {
      sah = false;
      if (wadahPesan) wadahPesan.textContent = "Kolom ini wajib diisi.";
      input.setAttribute("aria-invalid", "true");
    } else {
      if (wadahPesan) wadahPesan.textContent = "";
      input.removeAttribute("aria-invalid");
    }
    return sah;
  }

  function periksaSeluruhForm() {
    let formSah = true;
    inputs.forEach((input) => {
      if (!validasiKolom(input)) formSah = false;
    });
    if (tombolSubmit) tombolSubmit.disabled = !formSah;
  }

  // Validasi real-time saat mengetik
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      validasiKolom(input);
      periksaSeluruhForm();
    });
  });

  // Event submit
  formKontak.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah reload halaman

    let valid = true;
    inputs.forEach((input) => {
      if (!validasiKolom(input)) {
        valid = false;
        input.focus();
      }
    });

    if (valid) {
      alert("Pesan berhasil dikirim!");
      formKontak.reset();
      periksaSeluruhForm();
    }
  });
}

// Render awal
render(daftarProyek);