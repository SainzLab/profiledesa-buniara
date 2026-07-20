<template>
  <section id="beranda" class="relative h-screen flex items-center justify-center text-center overflow-hidden">
    
    <div class="absolute inset-0 z-0 brightness-50">
      <img 
        src="/desa2.jpg" 
        alt="Hero Background" 
        class="w-full h-full object-cover animate-ken-burns" 
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0a3622]/80"></div>
    </div>

    <div class="relative z-10 max-w-5xl px-4 flex flex-col items-center">
      
      <h1 class="fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
        Harmoni Alam, Pertanian, <br class="hidden sm:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
          dan Pariwisata Buniara
        </span>
      </h1>
      
      <p class="fade-in-up animation-delay-200 text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md">
        Temukan keindahan alam, kekayaan budaya, dan produk lokal unggulan kami.
      </p>
      
      <!-- <button 
        @click.prevent="scrollToWisata" 
        class="fade-in-up animation-delay-300 group inline-flex items-center justify-center gap-2 bg-[#0a3622] hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
      >
        <span>Jelajahi Pesona Buniara</span>
        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button> -->

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
const scrollToWisata = () => {
  const element = document.getElementById('wisata');
  
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