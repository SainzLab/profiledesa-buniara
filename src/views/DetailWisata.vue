<template>

  <Navbar />

  <main v-if="!loading && wisata" class="min-h-screen bg-white pb-24 font-sans">
    
    <section class="relative h-[60vh] min-h-[400px] w-full">
      <img 
        :src="wisata.image || 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2000&auto=format&fit=crop'" 
        :alt="wisata.judul"
        class="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
      
      <div class="absolute z-20 bottom-0 left-0 w-full px-6 md:px-12 pb-12 max-w-6xl mx-auto right-0">
        <div class="text-white">
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
      
      <section>
        <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 tracking-tight">Tentang {{ wisata.judul }}</h2>
        <div class="text-gray-600 text-sm md:text-base leading-loose space-y-5 text-justify md:text-left">
          <p>
            {{ wisata.judul }} merupakan permata tersembunyi yang terletak di jantung Desa Buniara. Dikelilingi oleh vegetasi tropis yang rimbun dan tebing batu purba, air terjun ini menawarkan pemandangan spektakuler dengan ketinggian sekitar 30 meter. Suasana di sini sangat tenang, hanya terdengar gemuruh air yang jatuh dan kicauan burung hutan.
          </p>
          <p>
            Kekhasan {{ wisata.judul }} terletak pada kolam alaminya yang berwarna biru kehijauan yang jernih. Para pengunjung dapat merasakan kesegaran air pegunungan yang murni, menjadikannya tempat pelarian sempurna dari hiruk-pikuk kehidupan kota. Jalur trekking menuju lokasi pun telah ditata rapi untuk memudahkan wisatawan tanpa mengurangi kesan petualangan alam.
          </p>
        </div>
      </section>

      <section>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-[20px] p-8 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-center">
            <div class="w-12 h-12 bg-[#E8F5EE] text-[#0F9D58] rounded-full flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Air Jernih</h3>
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">Air pegunungan murni yang menyegarkan tubuh.</p>
          </div>
          <div class="bg-white rounded-[20px] p-8 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-center">
            <div class="w-12 h-12 bg-[#E8F5EE] text-[#0F9D58] rounded-full flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Jalur Trekking</h3>
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">Trekking ringan dengan pemandangan hutan tropis.</p>
          </div>
          <div class="bg-white rounded-[20px] p-8 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-center">
            <div class="w-12 h-12 bg-[#E8F5EE] text-[#0F9D58] rounded-full flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Area Piknik</h3>
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">Spot santai untuk berkumpul bersama keluarga.</p>
          </div>
        </div>
      </section>

      <section class="relative pt-4">
        <div class="w-full h-56 md:h-72 bg-gray-200 rounded-[24px] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Peta Lokasi" class="w-full h-full object-cover opacity-80" />
        </div>
        <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-xl shadow-lg font-bold text-gray-900 whitespace-nowrap z-10 text-sm">
          {{ wisata.judul }}
        </div>
      </section>

      <section class="pt-8">
        <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 tracking-tight">Galeri Foto</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[400px] md:h-[450px]">
          <div class="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-xs md:text-sm text-gray-800 shadow-sm">
              {{ wisata.judul }}
              <span class="block text-[10px] text-gray-500 font-normal mt-0.5">Desa Buniara</span>
            </div>
          </div>
          <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer hidden md:block">
            <img src="https://images.unsplash.com/photo-1518182170546-076616fd6251?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer hidden md:block">
            <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div class="col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </section>
    </div>
      <section class="pt-10">
        <DestinationSection />
      </section>
  </main>

  <div v-else-if="loading" class="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center">
    <div class="w-full fixed top-0 z-50">
      <Navbar />
    </div>
    <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#0F9D58] mt-20"></div>
  </div>

  <div v-else class="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center">
    <div class="w-full fixed top-0 z-50">
      <Navbar />
    </div>
    <div class="flex flex-col items-center mt-20">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
      <p class="text-gray-600 mb-6">{{ error || 'Data wisata tidak ditemukan.' }}</p>
      <button @click="$router.push('/')" class="bg-[#0F9D58] hover:bg-green-700 transition-colors text-white px-6 py-2.5 rounded-xl font-medium">Kembali ke Beranda</button>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/FooterSection.vue';
import DestinationSection from '@/components/DestinationSection.vue';

const route = useRoute();
const idWisata = route.params.id;

const API_URL = `http://0.0.0.0:3000/api/wisata/${idWisata}`; 

const wisata = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchDetail = async () => {
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
  fetchDetail();
});
</script>