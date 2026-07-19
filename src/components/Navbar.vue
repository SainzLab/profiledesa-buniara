<template>
  <nav 
    :class="[
      'fixed top-0 left-0 w-full z-40 px-6 md:px-8 py-4 md:py-6 flex justify-between items-center text-white transition-all duration-300',
      isScrolled ? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="hidden md:block text-2xl font-bold tracking-wide">
      Desa Buniara
    </div>

    <div class="md:hidden"></div>

    <ul class="hidden md:flex space-x-8 text-sm font-medium items-center">
      <li><a href="#" class="border-b-2 border-white pb-1">Beranda</a></li>
      <li><a href="#" class="hover:text-gray-200 transition-colors">Tentang Kami</a></li>
      <li><a href="#" class="hover:text-gray-200 transition-colors">Wilayah & Administrasi</a></li>
      <li><a href="#" class="hover:text-gray-200 transition-colors">Wisata</a></li>
      <li><a href="#" class="hover:text-gray-200 transition-colors">UMKM</a></li>
      <li>
        <a href="/laporan" class="bg-primary-green hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
          Laporan & Masukan
        </a>
      </li>
    </ul>

    <button 
      @click="toggleSidebar" 
      class="md:hidden text-white focus:outline-none"
      aria-label="Toggle Menu"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </nav>

  <div 
    v-if="isSidebarOpen" 
    @click="toggleSidebar"
    class="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity"
  ></div>

  <div 
    :class="[
      'fixed top-0 right-0 h-full w-64 bg-white text-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl',
      isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
    ]"
  >
    <div class="p-6 flex flex-col h-full">
      <div class="flex justify-between items-center mb-8">
        <span class="text-xl font-bold text-primary-green">Menu</span>
        <button @click="toggleSidebar" class="text-gray-500 hover:text-gray-800">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <ul class="flex flex-col space-y-6 flex-grow text-base">
        <li>
          <a href="#" @click="toggleSidebar" class="text-primary-green font-semibold border-b-2 border-primary-green pb-1 inline-block">Beranda</a>
        </li>
        <li><a href="#" @click="toggleSidebar" class="hover:text-primary-green transition-colors">Tentang Kami</a></li>
        <li><a href="#" @click="toggleSidebar" class="hover:text-primary-green transition-colors">Wilayah & Administrasi</a></li>
        <li><a href="#" @click="toggleSidebar" class="hover:text-primary-green transition-colors">Wisata</a></li>
        <li><a href="#" @click="toggleSidebar" class="hover:text-primary-green transition-colors">UMKM</a></li>
      </ul>

      <div class="mt-auto pt-6 border-t border-gray-100">
        <a href="/laporan" class="w-full bg-primary-green hover:bg-green-800 text-white px-5 py-3 rounded-full text-sm font-semibold transition-colors">
          Laporan & Masukan
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isSidebarOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  
  if (isSidebarOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = ''; 
});
</script>