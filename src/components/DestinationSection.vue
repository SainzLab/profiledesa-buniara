<template>
  <section class="py-24 px-4 md:px-8 bg-white overflow-hidden relative">
    <div class="max-w-7xl mx-auto z-10 relative">
      
      <Transition name="fade-smooth" mode="out-in">
        
        <div v-if="!isLoading" key="content" class="w-full">
          
          <div id="wisata" class="text-center mb-16 px-4 fade-in-up">
            <h2 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005a66] to-teal-400 mb-4">
              Destinasi Unggulan
            </h2>
            <div class="w-24 h-1.5 bg-gradient-to-r from-[#005a66] to-teal-400 mx-auto mt-2 rounded-full"></div>
            <p class="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
              Jelajahi keindahan alam dan rekomendasi destinasi wisata terbaik di Desa Buniara yang menenangkan jiwa.
            </p>
          </div>
          
          <div class="relative group">
            
            <button 
              @click="scrollLeft" 
              class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md border border-gray-100 rounded-full p-2.5 text-gray-400 hover:text-[#005a66] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
            >
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <div ref="sliderRef" class="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scroll-smooth hide-scrollbar pb-10 pt-4 px-4 md:px-2">
              
              <div 
                v-for="(item, index) in wisataList" 
                :key="item.id"
                class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
                :class="`animate-stagger-${(index % 5) + 1}`"
              >
                <div class="overflow-hidden relative aspect-[4/3] w-full">
                  <img 
                    :src="getImageUrl(item.image, item.judul)" 
                    :alt="item.judul" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#005a66] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {{ item.kategori }}
                  </div>
                </div>
                <div class="p-6 relative bg-white">
                  <h3 class="font-extrabold text-xl text-gray-800 group-hover:text-[#005a66] transition-colors mb-2">{{ item.judul }}</h3>
                  <p class="text-sm text-gray-500 leading-relaxed line-clamp-3">{{ item.deskripsi }}</p>
                </div>
              </div>
              
            </div>

            <button 
              @click="scrollRight" 
              class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md border border-gray-100 rounded-full p-2.5 text-gray-400 hover:text-[#005a66] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
            >
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

          </div>
        </div>

        <div v-else key="loading" class="relative z-10 flex flex-col items-center justify-center gap-4 py-32 md:py-40">
          <div class="relative w-14 h-14 flex items-center justify-center">
            <div class="absolute inset-0 rounded-full border-2 border-teal-600/20"></div>
            <div class="w-14 h-14 rounded-full border-2 border-teal-500 border-t-transparent animate-spin"></div>
            <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
          </div>
          <p class="text-teal-700 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase animate-pulse">
            Memuat Destinasi...
          </p>
        </div>

      </Transition>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sliderRef = ref(null);
const isLoading = ref(true);
const wisataList = ref([]);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ASSET_BASE_URL = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : '';

const getImageUrl = (imagePath, fallbackText) => {
  if (!imagePath) return `https://dummyimage.com/400x300/a3a3a3/ffffff&text=${fallbackText.replace(/ /g, '+')}`;
  
  let normalizedPath = imagePath;
  if (typeof normalizedPath === 'string') {
    normalizedPath = normalizedPath.replace(/\\/g, '/');
  }

  if (normalizedPath.startsWith('http') || normalizedPath.startsWith('data:image') || normalizedPath.startsWith('blob:')) {
    return normalizedPath;
  }
  
  const formattedPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  return `${ASSET_BASE_URL}${formattedPath}`;
};

const fetchWisata = async () => {
  isLoading.value = true;
  try {
    const response = await fetch(`${API_BASE_URL}/public/wisata`);
    const result = await response.json();
    
    if (result.success && result.data) {
      wisataList.value = result.data;
    }
  } catch (error) {
    console.error('Gagal mengambil data wisata:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchWisata();
});

const scrollLeft = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: -340, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: 340, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.fade-smooth-enter-active,
.fade-smooth-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-smooth-enter-from,
.fade-smooth-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-stagger-1 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s forwards; opacity: 0; }
.animate-stagger-2 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards; opacity: 0; }
.animate-stagger-3 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards; opacity: 0; }
.animate-stagger-4 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards; opacity: 0; }
.animate-stagger-5 { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards; opacity: 0; }

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