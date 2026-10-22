<template>
  <section id="tambah-mainan">
    <h2>Tambah Mainan</h2>

    <form action="/simpan" method="post">
      <div class="form-kolom">
        <label for="nama">Nama Mainan</label>
        <input type="text" id="nama" name="nama" required>
        <p class="pesan-galat">Nama mainan wajib diisi.</p>
      </div>

      <div class="form-kolom">
        <label for="harga">Harga</label>
        <input type="number" id="harga" name="harga" min="1" required>
        <p class="pesan-galat">Harga harus diisi.</p>
      </div>

      <div class="form-kolom">
        <label for="kategori">Kategori</label>
        <input type="text" id="kategori" name="kategori" required>
        <p class="pesan-galat">Kategori wajib diisi.</p>
      </div>

      <button type="submit">Simpan</button>
    </form>
  </section>

  <section id="tentang-kami">
    <h2>Tentang Kami</h2>
    <p>
      Toys Store adalah toko yang menyediakan
      berbagai macam mainan untuk anak-anak
      dan kolektor.
    </p>
  </section>
</template>

<script setup>
</script>