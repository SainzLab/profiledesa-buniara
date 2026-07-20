<template>
  <section class="py-24 px-4 md:px-8 bg-gray-50 overflow-hidden relative">
    <div class="max-w-7xl mx-auto z-10 relative">
      
      <div id="umkm" class="text-center mb-16 px-4 fade-in-up">
        <span class="inline-block px-4 py-1.5 mb-4 rounded-full bg-teal-50 border border-teal-100 text-[#005a66] text-xs font-bold tracking-widest shadow-sm">
          PRODUK LOKAL
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005a66] to-teal-400 mb-4">
          Pemberdayaan Ekonomi (UMKM)
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-[#005a66] to-teal-400 mx-auto mt-2 rounded-full"></div>
        <p class="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
          Dukung produk-produk unggulan karya warga Desa Buniara yang berkualitas dan autentik.
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
          
          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 group cursor-pointer animate-stagger-1">
            <div class="overflow-hidden relative aspect-[4/3] w-full">
              <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Kerajinan+Bambu" alt="Kerajinan Bambu" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="p-6 md:p-8 relative bg-white">
              <h3 class="font-extrabold text-xl text-gray-800 group-hover:text-[#005a66] transition-colors mb-2">Kerajinan Bambu</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Anyaman bambu tradisional berkualitas tinggi hasil karya pengrajin lokal.
              </p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 group cursor-pointer animate-stagger-2">
            <div class="overflow-hidden relative aspect-[4/3] w-full">
              <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Kopi+Gunung+Canggah" alt="Kopi Gunung Canggah" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="p-6 md:p-8 relative bg-white">
              <h3 class="font-extrabold text-xl text-gray-800 group-hover:text-[#005a66] transition-colors mb-2">Kopi Gunung Canggah</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Kopi robusta pilihan dengan aroma khas dari lereng Gunung Canggah.
              </p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 group cursor-pointer animate-stagger-3">
            <div class="overflow-hidden relative aspect-[4/3] w-full">
              <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Madu+Hutan+Alami" alt="Madu Hutan Alami" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="p-6 md:p-8 relative bg-white">
              <h3 class="font-extrabold text-xl text-gray-800 group-hover:text-[#005a66] transition-colors mb-2">Madu Hutan Alami</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Madu murni dari hutan lindung Buniara, kaya akan nutrisi dan manfaat.
              </p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 group cursor-pointer animate-stagger-4">
            <div class="overflow-hidden relative aspect-[4/3] w-full">
              <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Gula+Aren+Asli" alt="Gula Aren Asli" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="p-6 md:p-8 relative bg-white">
              <h3 class="font-extrabold text-xl text-gray-800 group-hover:text-[#005a66] transition-colors mb-2">Gula Aren Asli</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Gula aren murni hasil sadapan petani lokal dengan rasa manis alami.
              </p>
            </div>
          </div>

          <div class="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 group cursor-pointer animate-stagger-5">
            <div class="overflow-hidden relative aspect-[4/3] w-full">
              <img src="https://dummyimage.com/600x400/a3a3a3/ffffff&text=Keripik+Pisang" alt="Keripik Pisang" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="p-6 md:p-8 relative bg-white">
              <h3 class="font-extrabold text-xl text-gray-800 group-hover:text-[#005a66] transition-colors mb-2">Keripik Pisang</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Camilan renyah khas pedesaan yang diolah dari pisang pilihan.
              </p>
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
  </section>
</template>

<script setup>
import { ref } from 'vue';

const sliderRef = ref(null);

const scrollLeft = () => {
  if (sliderRef.value) {
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
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-stagger-1 { animation: fadeInUp 0.6s ease-out 0.1s forwards; opacity: 0; }
.animate-stagger-2 { animation: fadeInUp 0.6s ease-out 0.2s forwards; opacity: 0; }
.animate-stagger-3 { animation: fadeInUp 0.6s ease-out 0.3s forwards; opacity: 0; }
.animate-stagger-4 { animation: fadeInUp 0.6s ease-out 0.4s forwards; opacity: 0; }
.animate-stagger-5 { animation: fadeInUp 0.6s ease-out 0.5s forwards; opacity: 0; }

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