<template>
  <div class="page">
    <Navbar />

    <main class="content">
      <HeroSection />
      <div class="utama">
        <ProjectSection />
      </div>
    </main>

    <FooterSection />
  </div>

  <button id="atur-ulang">Atur Ulang</button>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>