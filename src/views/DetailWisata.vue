<template>
  <NavbarDetail />

  <Transition name="fade-smooth" mode="out-in">
    <main v-if="!loading && wisata" key="content" class="min-h-screen bg-white pb-24 font-sans">
      
      <section class="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          :src="getImageUrl(wisata.image, 'hero')" 
          :alt="wisata.judul"
          class="absolute inset-0 w-full h-full object-cover brightness-50 transform hover:scale-105 transition-transform duration-[2s]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
        
        <div class="absolute z-20 bottom-0 left-0 w-full px-6 md:px-12 pb-12 max-w-6xl mx-auto right-0">
          <div class="text-white fade-in-up">
            <div class="flex items-center gap-2 text-xs md:text-sm font-medium mb-3 opacity-90 tracking-wide">
              <span>Destinasi</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              <span class="font-bold">{{ wisata.judul }}</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">{{ wisata.judul }}</h1>
            <p class="text-sm md:text-base max-w-2xl opacity-90 leading-relaxed font-light line-clamp-2">
              {{ wisata.deskripsi }}
            </p>
          </div>
        </div>
      </section>

      <div class="max-w-5xl mx-auto px-6 md:px-8 pt-16 space-y-20">
        
        <section v-if="wisata.tentang" class="animate-stagger-1 opacity-0">
          <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 tracking-tight relative inline-block">
            Tentang {{ wisata.judul }}
            <div class="absolute -bottom-2 left-0 w-12 h-1 bg-[#0F9D58] rounded-full"></div>
          </h2>
          
          <div class="text-gray-600 text-sm md:text-base leading-loose text-justify md:text-left whitespace-pre-line mt-4">
            {{ wisata.tentang }}
          </div>
        </section>
        
        <section v-if="wisata.fasilitas && wisata.fasilitas.length > 0" class="animate-stagger-2 opacity-0">
          <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight relative inline-block">
            Fasilitas
            <div class="absolute -bottom-2 left-0 w-12 h-1 bg-[#0F9D58] rounded-full"></div>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4">
            <div v-for="(fas, index) in wisata.fasilitas" :key="index" class="bg-white rounded-2xl md:rounded-[20px] p-4 md:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-row md:flex-col items-center md:justify-center text-left md:text-center gap-4 md:gap-4 hover:-translate-y-1 hover:shadow-[0_8px_25px_-4px_rgba(15,157,88,0.15)] transition-all duration-300 group">
        
              <div class="w-12 h-12 flex-shrink-0 bg-[#E8F5EE] group-hover:bg-[#0F9D58] text-[#0F9D58] group-hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 text-sm md:text-base mb-1">{{ fas.judul }}</h3>
                <p class="text-xs md:text-sm text-gray-500 leading-relaxed">{{ fas.deskripsi }}</p>
              </div>
            </div>
          </div>
        </section>

        <section v-if="wisata.peta_url" class="relative pt-4 animate-stagger-3 opacity-0">
          <div v-if="wisata.peta_url.includes('<iframe')" class="w-full h-56 md:h-72 bg-gray-200 rounded-[24px] overflow-hidden relative map-container shadow-lg group" v-html="wisata.peta_url"></div>
          
          <div v-else class="w-full h-56 md:h-72 bg-gray-200 rounded-[24px] overflow-hidden relative flex items-center justify-center shadow-lg group">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
            <a :href="wisata.peta_url" target="_blank" class="bg-white px-8 py-3 rounded-xl shadow-xl font-bold text-gray-900 z-10 text-sm hover:scale-105 hover:bg-gray-50 transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Buka di Google Maps
            </a>
          </div>
          <div v-if="wisata.peta_url.includes('<iframe')" class="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] font-bold text-gray-900 whitespace-nowrap z-10 text-sm">
            Lokasi {{ wisata.judul }}
          </div>
        </section>

        <section class="pt-8 animate-stagger-4 opacity-0">
          <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 tracking-tight relative inline-block">
            Galeri Foto
            <div class="absolute -bottom-2 left-0 w-12 h-1 bg-[#0F9D58] rounded-full"></div>
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[400px] md:h-[450px] mt-4">
            <div class="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
              <img :src="getImageUrl(wisata.galeri_1, 'galeri1')" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-xs md:text-sm text-gray-800 shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                {{ wisata.judul }}
                <span class="block text-[10px] text-gray-500 font-normal mt-0.5">Desa Buniara</span>
              </div>
            </div>
            <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer hidden md:block shadow-sm hover:shadow-xl transition-shadow">
              <img :src="getImageUrl(wisata.galeri_2, 'galeri2')" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer hidden md:block shadow-sm hover:shadow-xl transition-shadow">
              <img :src="getImageUrl(wisata.galeri_3, 'galeri3')" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div class="col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
              <img :src="getImageUrl(wisata.galeri_4, 'galeri4')" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </section>
      </div>
      
      <section class="pt-16 animate-stagger-5 opacity-0">
        <DestinationSection />
      </section>
    </main>

    <div v-else-if="loading" key="loading" class="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center relative">
      <div class="w-full fixed top-0 z-50">
        <Navbar />
      </div>
      
      <div class="flex flex-col items-center justify-center gap-6 mt-16">
        <div class="relative w-16 h-16 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border-4 border-teal-600/10"></div>
          <div class="w-16 h-16 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>
          <div class="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <p class="text-teal-100 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase animate-pulse">
            Memuat Konten...
          </p>
        </div>
      </div>
    </div>

    <div v-else key="error" class="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center">
      <div class="w-full fixed top-0 z-50">
        <Navbar />
      </div>
      <div class="flex flex-col items-center mt-20 fade-in-up">
        <div class="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
        <p class="text-gray-600 mb-8 text-center max-w-sm">{{ error || 'Data wisata tidak ditemukan.' }}</p>
        <button @click="$router.push('/')" class="bg-[#0F9D58] hover:bg-green-700 shadow-lg shadow-green-600/20 transition-all hover:-translate-y-1 text-white px-8 py-3 rounded-xl font-medium">
          Kembali ke Beranda
        </button>
      </div>
    </div>
  </Transition>

  <Footer />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import NavbarDetail from '@/components/NavbarDetail.vue';
import Footer from '@/components/FooterSection.vue';
import DestinationSection from '@/components/DestinationSection.vue';

import Navbar from '@/components/Navbar.vue';

const route = useRoute();

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const ASSET_BASE_URL = API_BASE_URL.replace(/\/api$/, '');

const wisata = ref(null);
const loading = ref(true);
const error = ref(null);

const fallbacks = {
  hero: 'https://placehold.co/2000x1000/e2e8f0/475569?text=IMAGE',
  galeri1: 'https://placehold.co/800x600/e2e8f0/475569?text=IMAGE',
  galeri2: 'https://placehold.co/800x600/e2e8f0/475569?text=IMG',
  galeri3: 'https://placehold.co/800x600/e2e8f0/475569?text=IMAGE',
  galeri4: 'https://placehold.co/1200x800/e2e8f0/475569?text=IMG',
};

const getImageUrl = (imagePath, type) => {
  if (!imagePath) return fallbacks[type] || fallbacks.hero;
  if (imagePath.startsWith('http')) return imagePath;
  return `${ASSET_BASE_URL}${imagePath}`;
};

const fetchDetail = async () => {
  loading.value = true;
  error.value = null;
  
  const currentId = route.params.id;
  const API_URL = `${API_BASE_URL}/wisata/${currentId}`; 

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Gagal mengambil data dari server');
    
    const result = await response.json();
    
    if (result.success) {
      wisata.value = result.data;
    } else {
      error.value = result.message;
    }
  } catch (err) {
    console.error(err);
    error.value = 'Terjadi kesalahan saat memuat data.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'instant' 
  });
  
  fetchDetail();
});

watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      fetchDetail();
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
);
</script>

<style scoped>
:deep(.map-container iframe) {
  width: 100%;
  height: 100%;
  border: none;
}

.fade-smooth-enter-active,
.fade-smooth-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-smooth-enter-from,
.fade-smooth-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-stagger-1 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s forwards; }
.animate-stagger-2 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards; }
.animate-stagger-3 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards; }
.animate-stagger-4 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards; }
.animate-stagger-5 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>