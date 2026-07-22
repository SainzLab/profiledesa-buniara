<template>
  <section id="tentang-kami" class="relative mt-16 pt-20 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
    
    <div class="absolute top-10 left-0 w-72 h-72 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
    <div class="absolute bottom-10 right-0 w-72 h-72 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center z-10" v-if="!isLoading">
      
      <div class="relative h-[280px] sm:h-[350px] md:h-[450px] w-full max-w-md mx-auto md:max-w-none group fade-in-left">
        <img 
          :src="getImageUrl(konten.tentang_img1, 'Sawah')" 
          alt="Sawah" 
          class="absolute top-0 right-0 w-[70%] md:w-2/3 aspect-[4/3] object-cover rounded-2xl shadow-lg border-4 border-white transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-2 group-hover:scale-105 z-0" 
        />
        <img 
          :src="getImageUrl(konten.tentang_img2, 'Mata Air')" 
          alt="Mata Air" 
          class="absolute bottom-0 left-0 w-[70%] md:w-2/3 aspect-[4/3] object-cover rounded-2xl shadow-xl border-4 border-white transition-all duration-500 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-hover:z-20 z-10" 
        />
      </div>

      <div class="fade-in-right">

        <h2 class="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#007b8b] to-green-500 mb-4 md:mb-6 leading-tight">
          Surga Tersembunyi di Subang
        </h2>
        
        <p class="text-gray-600 mb-4 leading-relaxed text-base md:text-lg">
          {{ konten.tentang_desc1 }}
        </p>
        <p class="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
          {{ konten.tentang_desc2 }}
        </p>
        
        <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 md:mb-5 flex items-center gap-2">
          <span class="w-8 h-[2px] bg-[#007b8b] rounded-full"></span> Wilayah Dusun
        </h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-gray-700 text-sm font-medium">
          
          <div 
            v-for="(dusun, index) in konten.dusun" 
            :key="index"
            v-show="showAllDusun || index < 3"
            class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-teal-50 border border-transparent hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 cursor-default"
          >
            <div class="p-2 bg-white rounded-lg shadow-sm text-[#007b8b]">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            {{ dusun }}
          </div>

          <div 
            v-if="konten.dusun.length > 3"
            @click="showAllDusun = !showAllDusun"
            class="flex items-center justify-between gap-2 p-3 rounded-xl bg-gradient-to-r from-[#007b8b] to-teal-500 text-white hover:from-[#006370] hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer select-none"
          >
            <span class="font-semibold tracking-wide text-xs sm:text-sm">
              {{ showAllDusun ? 'Sembunyikan' : `Lihat ${konten.dusun.length - 3} Lainnya` }}
            </span>
            <div class="p-1 bg-white/20 rounded-full">
              <svg 
                class="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300" 
                :class="{ 'rotate-180': showAllDusun }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ASSET_BASE_URL = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : '';

const isLoading = ref(true);
const showAllDusun = ref(false);

const konten = ref({
  tentang_desc1: '',
  tentang_desc2: '',
  tentang_img1: '',
  tentang_img2: '',
  dusun: []
});

const getImageUrl = (imagePath, fallbackText) => {
  if (!imagePath) return `https://dummyimage.com/400x300/d4d4d4/000000&text=${fallbackText.replace(' ', '+')}`;
  if (imagePath.startsWith('http') || imagePath.startsWith('data:image')) return imagePath;
  if (imagePath.startsWith('/uploads')) return `${ASSET_BASE_URL}${imagePath}`;
  return imagePath;
};

const fetchKonten = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/konten`);
    const result = await response.json();
    
    if (result.success && result.data) {
      konten.value = result.data;
    }
  } catch (error) {
    console.error('Gagal mengambil data konten:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchKonten();
});
</script>

<style scoped>
.fade-in-left {
  animation: fadeInLeft 1s ease-out forwards;
}

.fade-in-right {
  animation: fadeInRight 1s ease-out forwards;
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
</style>