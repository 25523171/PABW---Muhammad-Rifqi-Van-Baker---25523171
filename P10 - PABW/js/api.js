// js/api.js
const ALAMAT = 'https://raw.githubusercontent.com/25523171/PABW---Muhammad-Rifqi-Van-Baker---25523171/refs/heads/main/P10%20-%20PABW/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    
    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }
    
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('Gagal memuat API:', galat.message);
    throw galat;
  }
}