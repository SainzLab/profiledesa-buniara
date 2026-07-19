<template>
  <!-- Menambahkan overflow-hidden dan menyesuaikan padding untuk mobile -->
  <section class="py-24 px-4 md:px-8 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 px-4">
        <h2 class="text-3xl font-bold text-primary-green mb-4">Pemberdayaan Ekonomi Lokal (UMKM)</h2>
        <p class="text-gray-600">Dukung produk-produk unggulan karya warga Desa Buniara.</p>
      </div>
      
      <!-- Slider Container -->
      <div class="relative group">
        
        <!-- Tombol Navigasi Kiri -->
        <button 
          @click="scrollLeft" 
          class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white shadow-lg rounded-full p-3 text-primary-green hover:bg-primary-green hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <!-- Track Slider -->
        <div 
          ref="sliderRef" 
          class="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8 pt-4 px-4"
        >
          
          <!-- Card 1 -->
          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Kerajinan+Bambu" alt="Kerajinan Bambu" class="w-full h-56 object-cover" />
            <div class="p-8">
              <h3 class="text-xl font-bold text-primary-green mb-3">Kerajinan Bambu</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Anyaman bambu tradisional berkualitas tinggi hasil karya pengrajin lokal.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Kopi+Gunung+Canggah" alt="Kopi Gunung Canggah" class="w-full h-56 object-cover" />
            <div class="p-8">
              <h3 class="text-xl font-bold text-primary-green mb-3">Kopi Gunung Canggah</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Kopi robusta pilihan dengan aroma khas dari lereng Gunung Canggah.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Madu+Hutan+Alami" alt="Madu Hutan Alami" class="w-full h-56 object-cover" />
            <div class="p-8">
              <h3 class="text-xl font-bold text-primary-green mb-3">Madu Hutan Alami</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Madu murni dari hutan lindung Buniara, kaya akan nutrisi dan manfaat.
              </p>
            </div>
          </div>

          <!-- Card 4 (Tambahan agar slider desktop bisa digeser) -->
          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Gula+Aren+Asli" alt="Gula Aren Asli" class="w-full h-56 object-cover" />
            <div class="p-8">
              <h3 class="text-xl font-bold text-primary-green mb-3">Gula Aren Asli</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Gula aren murni hasil sadapan petani lokal dengan rasa manis alami.
              </p>
            </div>
          </div>

          <!-- Card 5 (Tambahan agar slider desktop bisa digeser) -->
          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Keripik+Pisang" alt="Keripik Pisang" class="w-full h-56 object-cover" />
            <div class="p-8">
              <h3 class="text-xl font-bold text-primary-green mb-3">Keripik Pisang</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Camilan renyah khas pedesaan yang diolah dari pisang pilihan.
              </p>
            </div>
          </div>

        </div>

        <!-- Tombol Navigasi Kanan -->
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
    // Menggeser sesuai dengan perkiraan lebar kartu UMKM
    sliderRef.value.scrollBy({ left: -400, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: 400, behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* Menyembunyikan scrollbar bawaan browser */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>