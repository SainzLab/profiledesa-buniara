<template>
  <section class="py-24 px-4 md:px-8 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 px-4">
        <h2 class="text-3xl font-bold text-primary-green mb-4">Destinasi Unggulan</h2>
        <p class="text-gray-600">Rekomendasi Destinasi Wisata Desa Buniara.</p>
      </div>
      
      <div class="relative group">
        
        <button 
          @click="scrollLeft" 
          class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white shadow-lg rounded-full p-3 text-primary-green hover:bg-primary-green hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div ref="sliderRef" class="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8 pt-4 px-4">
          
          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/400x300/a3a3a3/ffffff&text=Curug+Wangun" alt="Curug Wangun" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-lg text-primary-green mb-2">Curug Wangun</h3>
              <p class="text-sm text-gray-600">Air terjun alami dengan kesegaran air pegunungan yang jernih.</p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/400x300/a3a3a3/ffffff&text=Curug+Janari" alt="Curug Janari" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-lg text-primary-green mb-2">Curug Janari</h3>
              <p class="text-sm text-gray-600">Destinasi wisata air tersembunyi yang menenangkan jiwa.</p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/400x300/a3a3a3/ffffff&text=Kolam+Renang+Tirta" alt="Kolam Renang Tirta Indah" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-lg text-primary-green mb-2">Kolam Renang Tirta Indah</h3>
              <p class="text-sm text-gray-600">Fasilitas rekreasi keluarga dengan air langsung dari sumber mata air.</p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/400x300/a3a3a3/ffffff&text=Indah+Alam" alt="Indah Alam" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-lg text-primary-green mb-2">Indah Alam</h3>
              <p class="text-sm text-gray-600">Spot panorama untuk menikmati keindahan lanskap pegunungan Subang.</p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/400x300/a3a3a3/ffffff&text=Kolam+Renang+Tirta" alt="Kolam Renang Tirta Indah" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-lg text-primary-green mb-2">Kolam Renang Tirta Indah</h3>
              <p class="text-sm text-gray-600">Fasilitas rekreasi keluarga dengan air langsung dari sumber mata air.</p>
            </div>
          </div>

        </div>

        <button 
          @click="scrollRight" 
          class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white shadow-lg rounded-full p-3 text-primary-green hover:bg-primary-green hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const sliderRef = ref(null);

const scrollLeft = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: -320, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: 320, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>