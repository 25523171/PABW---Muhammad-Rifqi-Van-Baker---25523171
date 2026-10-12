const profil = {
  nama: "Rifqi Van Baker",
  peran: "Pengembang Toys Store",
  alamat: {
    kota: "Balikpapan",
  },
  keahlian: ["HTML", "CSS", "JavaScript", "Git", "React"]
};

const jumlahMainanSelesai = 3;

const kalimatPerkenalan = `Nama saya ${profil.nama}, peran saya sebagai ${profil.peran} dari ${profil.alamat?.kota ?? "Indonesia"}. Saya mengelola ${profil.keahlian.length} keahlian utama.`;

console.log("--- LEMBAR B ---");
console.log(kalimatPerkenalan);
console.log("Tipe data nama:", typeof profil.nama);
console.log("Tipe data jumlah mainan:", typeof jumlahMainanSelesai);




function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log("\n--- LEMBAR C ---");
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));




const daftarMainan = [
  { id: 1, judul: "Prabubu", harga: 100000, stok: 40, kategori: "Figur", tersedia: true },
  { id: 2, judul: "Hirono", harga: 200000, stok: 10, kategori: "Figur", tersedia: true },
  { id: 3, judul: "Lego", harga: 60000, stok: 0, kategori: "Blok", tersedia: false }
];

console.log("\n--- LEMBAR D ---");
console.log("Daftar Keahlian:");
console.table(profil.keahlian);

console.log("Daftar Seluruh Mainan:");
console.table(daftarMainan);


const mainanTersedia = daftarMainan.filter((mainan) => mainan.tersedia);
console.log("Mainan Tersedia (filter):");
console.table(mainanTersedia);


const hirono = daftarMainan.find((mainan) => mainan.judul === "Hirono");
console.log("Cari Mainan 'Hirono' (find):", hirono);


const daftarNamaMainan = daftarMainan.map((mainan) => mainan.judul);
console.log("Daftar Nama Mainan (map):", daftarNamaMainan);




const kotaToko = profil.alamat?.kota ?? "Kota Belum Diset";
console.log("\n--- LEMBAR E ---");
console.log("Akses Kota Aman:", kotaToko);