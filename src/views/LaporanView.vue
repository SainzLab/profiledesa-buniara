<template>
  <div class="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
    <main class="flex-grow container mx-auto">
  
      <LaporanSection />

    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from '../components/FooterSection.vue'
import LaporanSection from '../components/LaporanSection.vue'
</script>

<style scoped>
</style>