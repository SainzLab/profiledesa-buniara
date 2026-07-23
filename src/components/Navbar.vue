<template>
  <nav 
    :class="[
      'fixed top-0 left-0 w-full z-40 px-6 md:px-8 flex justify-between items-center text-white transition-all duration-500',
      isScrolled 
        ? 'bg-black/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2 md:py-3' 
        : 'bg-transparent py-4 md:py-6'
    ]"
  >
    <div 
      :class="['hidden md:block font-bold tracking-wide cursor-pointer transition-all duration-500 origin-left hover:scale-105', isScrolled ? 'text-xl' : 'text-2xl']" 
      @click="scrollToSection('beranda')"
    >
      Desa Buniara
    </div>

    <div class="md:hidden"></div>

    <ul class="hidden md:flex space-x-8 text-sm font-medium items-center">
      <li v-for="item in menuItems" :key="item.id">
        <a 
          href="#" 
          @click.prevent="scrollToSection(item.id)"
          class="relative px-1 py-2 group text-white transition-colors duration-300"
        >
          <span :class="activeSection === item.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100 transition-opacity'">
            {{ item.name }}
          </span>
          <span 
            :class="[
              'absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform duration-300 origin-left rounded-full',
              activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            ]"
          ></span>
        </a>
      </li>
      <li>
        <a href="/laporan" class="inline-block bg-[#0a3622] hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-[0_4px_15px_rgba(10,54,34,0.4)] hover:-translate-y-0.5">
          Laporan & Pengajuan
        </a>
      </li>
    </ul>

    <button 
      @click="toggleSidebar" 
      class="md:hidden text-white focus:outline-none transform active:scale-95 transition-transform"
      aria-label="Toggle Menu"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </nav>

  <transition name="fade">
    <div 
      v-if="isSidebarOpen" 
      @click="toggleSidebar"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden cursor-pointer"
    ></div>
  </transition>

  <div 
    :class="[
      'fixed top-0 right-0 h-full w-64 bg-white text-gray-800 z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden shadow-2xl',
      isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
    ]"
  >
    <div class="p-6 flex flex-col h-full">
      <div class="flex justify-between items-center mb-8">
        <span class="text-xl font-bold text-[#0a3622]">Menu</span>
        <button @click="toggleSidebar" class="text-gray-400 hover:text-gray-800 transition-colors transform hover:rotate-90 duration-300">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <ul class="flex flex-col space-y-2 flex-grow text-base overflow-y-auto">
        <li 
          v-for="(item, index) in menuItems" 
          :key="item.id"
          :class="[
            'transform transition-all duration-500',
            isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          ]"
          :style="{ transitionDelay: `${index * 75 + 150}ms` }"
        >
          <a 
            href="#" 
            @click.prevent="scrollToSection(item.id)"
            :class="[
              'block py-3 px-4 rounded-xl transition-all duration-300',
              activeSection === item.id 
                ? 'bg-teal-50 text-[#0a3622] font-bold' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-[#0a3622] hover:pl-6'
            ]"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>

      <div class="mt-auto pt-6 border-t border-gray-100">
        <a href="/laporan" class="w-full text-center block bg-[#0a3622] hover:bg-emerald-800 text-white px-5 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
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
const activeSection = ref('beranda');

const menuItems = [
  { id: 'beranda', name: 'Beranda' },
  { id: 'tentang-kami', name: 'Tentang Kami' },
  { id: 'wilayah', name: 'Wilayah & Administrasi' },
  { id: 'wisata', name: 'Wisata' },
  { id: 'umkm', name: 'UMKM' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  const scrollPosition = window.scrollY;
  const threshold = window.innerHeight / 3;

  for (let i = menuItems.length - 1; i >= 0; i--) {
    const item = menuItems[i];
    const element = document.getElementById(item.id);
    
    if (element) {
      const rect = element.getBoundingClientRect();
      
      if (rect.top <= threshold) {
        activeSection.value = item.id;
        break;
      }
    }
  }
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  document.body.style.overflow = isSidebarOpen.value ? 'hidden' : '';
};

const scrollToSection = (id) => {
  activeSection.value = id;
  
  if (isSidebarOpen.value) {
    toggleSidebar();
  }

  const element = document.getElementById(id);
  if (element) {
    const navHeight = 80; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = ''; 
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>