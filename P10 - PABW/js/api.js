// js/api.js
const ALAMAT = 'data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    
    // Periksa status respons HTTP
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