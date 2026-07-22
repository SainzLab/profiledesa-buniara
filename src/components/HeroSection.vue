<template>
  <section id="beranda" class="relative h-screen flex items-center justify-center text-center overflow-hidden">
    
    <div class="absolute inset-0 z-0 brightness-50">
      <img 
        v-if="heroData.image"
        :src="heroData.image" 
        alt="Hero Background" 
        class="w-full h-full object-cover animate-ken-burns" 
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0a3622]/80"></div>
    </div>

    <div v-if="!isLoading" class="relative z-10 max-w-5xl px-4 flex flex-col items-center">
      
      <h1 class="fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
        {{ heroData.title }} 
        
        <template v-if="heroData.highlight">
          <br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
            {{ heroData.highlight }}
          </span>
        </template>
      </h1>
      
      <p class="fade-in-up animation-delay-200 text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md whitespace-pre-wrap">
        {{ heroData.subtitle }}
      </p>

    </div>

    <div v-else class="relative z-10 max-w-5xl px-4 flex flex-col items-center">
      <p class="text-white text-lg animate-pulse">Memuat data...</p>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 fade-in-up animation-delay-500 cursor-pointer flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" @click.prevent="scrollToWisata">
      <span class="text-white text-xs tracking-widest uppercase">Scroll</span>
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
        <div class="w-1.5 h-2 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const heroData = ref({
  title: '', 
  highlight: '', 
  subtitle: '', 
  image: '/desa2.jpg'
});

const isLoading = ref(true);

const fetchHeroKonten = async () => {
  isLoading.value = true;
  console.log("[DEBUG] Mulai mengambil data dari API...");

  try {
    const response = await fetch('http://localhost:3000/api/konten');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("[DEBUG] Hasil dari Database:", result);
    
    if (result.success && result.data) {
      const data = result.data;
      
      if (data.hero_headline) {
        heroData.value.title = data.hero_headline;
        heroData.value.highlight = ''; 
      }
      if (data.hero_subheadline) {
        heroData.value.subtitle = data.hero_subheadline;
      }
      if (data.hero_image) {
        if (data.hero_image.startsWith('/uploads')) {
          heroData.value.image = `http://localhost:3000${data.hero_image}`;
        } else {
          heroData.value.image = data.hero_image;
        }
      }
      console.log("[DEBUG] Sukses update konten ke layar!");
    } else {
      console.warn("[DEBUG] API merespons, tapi success: false", result);
    }
  } catch (error) {
    console.error('[DEBUG] GAGAL FETCH API! Alasan:', error.message);
    
    heroData.value.title = 'Harmoni Alam, Pertanian,';
    heroData.value.highlight = 'dan Pariwisata Buniara';
    heroData.value.subtitle = 'Temukan keindahan alam, kekayaan budaya, dan produk lokal unggulan kami.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchHeroKonten();
});

const scrollToWisata = () => {
  const element = document.getElementById('wisata');
  if (element) {
    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.animate-ken-burns {
  animation: kenBurns 20s ease-out forwards;
}

@keyframes kenBurns {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-500 { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
</style>