<template>
  <aside class="sisi">
    <h3>Menu Samping</h3>
    <nav>
      <ul>
        <li><a href="#daftar-mainan">Daftar Mainan</a></li>
        <li><a href="#tambah-mainan">Tambah Mainan</a></li>
        <li><a href="#tentang-kami">Tentang Kami</a></li>
      </ul>
    </nav>
  </aside>

  <section id="daftar-mainan">
    <h2>Daftar Mainan</h2>
    <p>
      Selamat datang di halaman profil kami.
      Di sini Anda dapat menemukan mainan yg anda cari...
    </p>

    <p id="muat" hidden>Memuat data mainan...</p>
    <p id="kosong" hidden>Belum ada data mainan.</p>

    <div id="daftar" class="katalog grid"></div>
  </section>
</template>

<script setup>
</script>