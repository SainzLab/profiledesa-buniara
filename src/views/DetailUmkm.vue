<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <NavbarDetail />

    <Transition name="fade-smooth" mode="out-in">
        
      <main v-if="!loading && umkm" key="content" class="flex-grow pb-24">
        
        <section class="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <img
            :src="getImageUrl(umkm.gambar_hero || umkm.image, 'hero')"
            :alt="umkm.nama_umkm"
            class="absolute inset-0 w-full h-full object-cover brightness-50 transform hover:scale-105 transition-transform duration-[2s]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

          <div class="absolute z-20 bottom-0 left-0 w-full px-6 md:px-12 pb-12 max-w-6xl mx-auto right-0">
            <div class="text-white fade-in-up">
              <div class="flex items-center gap-2 text-xs md:text-sm font-medium mb-3 opacity-90 tracking-wide">
                <span>UMKM</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                <span class="font-bold">{{ umkm.nama_umkm }}</span>
              </div>
              
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                {{ umkm.nama_umkm }}
              </h1>

              <p class="text-sm md:text-base max-w-2xl opacity-90 leading-relaxed font-light line-clamp-2">
                {{ umkm.deskripsi_singkat || umkm.deskripsi }}
              </p>
            </div>
          </div>
        </section>

        <div class="max-w-5xl mx-auto px-6 md:px-8 pt-16 space-y-20">
          
          <section class="animate-stagger-1 opacity-0">
            <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 tracking-tight relative inline-block">
              Tentang {{ umkm.nama_umkm }}
              <div class="absolute -bottom-2 left-0 w-12 h-1 bg-[#0F9D58] rounded-full"></div>
            </h2>
            <div class="text-gray-600 text-sm md:text-base leading-loose text-justify md:text-left whitespace-pre-line mt-4">
              {{ umkm.tentang || umkm.deskripsi }}
            </div>
          </section>

          <section v-if="umkm.peta_url && renderGoogleMaps(umkm.peta_url)" class="relative pt-4 animate-stagger-2 opacity-0">
            <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 tracking-tight relative inline-block">
              Lokasi UMKM
              <div class="absolute -bottom-2 left-0 w-12 h-1 bg-[#0F9D58] rounded-full"></div>
            </h2>
            <div class="w-full h-64 sm:h-80 md:h-96 rounded-[24px] overflow-hidden border border-gray-100 shadow-lg relative bg-gray-100 mt-4">
              <iframe
                :src="renderGoogleMaps(umkm.peta_url)"
                class="w-full h-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          <section class="pt-4 animate-stagger-3 opacity-0">
            <h2 class="text-[22px] md:text-2xl font-bold text-gray-900 mb-6 tracking-tight relative inline-block">
              Galeri Produk
              <div class="absolute -bottom-2 left-0 w-12 h-1 bg-[#0F9D58] rounded-full"></div>
            </h2>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[400px] md:h-[450px] mt-4">
              <div class="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                <img
                  :src="getImageUrl(umkm.galeri1 || umkm.image, 'galeri1')"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-xs md:text-sm text-gray-800 shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {{ umkm.nama_umkm }}
                  <span class="block text-[10px] text-gray-500 font-normal mt-0.5">Produk Unggulan</span>
                </div>
              </div>

              <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer hidden md:block shadow-sm hover:shadow-xl transition-shadow">
                <img
                  :src="getImageUrl(umkm.galeri2 || umkm.image, 'galeri2')"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div class="col-span-1 row-span-1 rounded-2xl overflow-hidden group cursor-pointer hidden md:block shadow-sm hover:shadow-xl transition-shadow">
                <img
                  :src="getImageUrl(umkm.galeri3 || umkm.image, 'galeri3')"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div class="col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                <img
                  :src="getImageUrl(umkm.galeri4 || umkm.image, 'galeri4')"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </section>

          <section class="pt-8 animate-stagger-4 opacity-0">
            <div class="text-center max-w-2xl mx-auto">
              <div class="mb-8">
                <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                  Tertarik Menikmati {{ umkm.nama_umkm }}?
                </h3>
                <p class="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                  Hubungi admin kami untuk pemesanan produk, konsultasi varian, atau reservasi kunjungan ke lokasi UMKM.
                </p>
              </div>

              <div class="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(15,157,88,0.08)] border border-emerald-900/10 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,157,88,0.15)]">
              
                <div class="absolute -top-12 -right-12 w-40 h-40 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none"></div>
                <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-amber-100/50 rounded-full blur-2xl pointer-events-none"></div>

                <div class="relative z-10 flex flex-col items-center">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F9D58] to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 mb-4 transform -rotate-3 hover:rotate-0 transition-transform">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>

                  <p class="text-xs text-[#0F9D58] font-bold uppercase tracking-wider mb-1">
                    Layanan Pelanggan UMKM
                  </p>
                  
                  <p class="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-wide mb-1">
                    {{ umkm.no_wa || '-' }}
                  </p>
                  <p class="text-xs text-gray-400 mb-8">WhatsApp & Telepon Aktif</p>

                  <a
                    :href="getWhatsAppUrl(umkm.no_wa, umkm.nama_umkm)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0F9D58] to-emerald-700 hover:from-emerald-700 hover:to-[#0F9D58] text-white rounded-2xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg class="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.289.072.39-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.131.563 4.133 1.554 5.867l-1.651 6.033 6.182-1.62c1.684.916 3.614 1.44 5.669 1.44 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                    </svg>
                    <span>Chat via WhatsApp Sekarang</span>
                  </a>

                  <div class="w-full border-t border-gray-100 my-8"></div>

                  <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                    <div class="flex items-center gap-2">
                      <a
                        v-if="umkm.url_youtube"
                        :href="umkm.url_youtube"
                        target="_blank"
                        class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 text-xs font-semibold border border-gray-200/60 hover:border-red-200 transition-all duration-200"
                      >
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      </a>

                      <a
                        v-if="umkm.url_instagram"
                        :href="umkm.url_instagram"
                        target="_blank"
                        class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-pink-50 text-gray-600 hover:text-pink-600 text-xs font-semibold border border-gray-200/60 hover:border-pink-200 transition-all duration-200"
                      >
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>

                      <a
                        v-if="umkm.url_tiktok"
                        :href="umkm.url_tiktok"
                        target="_blank"
                        class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-gray-900 text-gray-600 hover:text-white text-xs font-semibold border border-gray-200/60 hover:border-gray-900 transition-all duration-200"
                      >
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="mt-24 animate-stagger-5 opacity-0">
          <UmkmSection />
        </div>
      </main>

      <div v-else-if="loading" key="loading" class="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center relative">
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
        <div class="flex flex-col items-center mt-20 fade-in-up px-4 text-center">
          <div class="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
          <p class="text-gray-600 mb-8 max-w-sm">{{ error || 'Produk UMKM tidak ditemukan.' }}</p>
          <button @click="$router.push('/')" class="bg-[#0F9D58] hover:bg-green-700 shadow-lg shadow-green-600/20 transition-all hover:-translate-y-1 text-white px-8 py-3 rounded-xl font-medium text-sm">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </Transition>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import NavbarDetail from '@/components/NavbarDetail.vue';
import Footer from '@/components/FooterSection.vue';
import UmkmSection from '@/components/UmkmSection.vue';

const route = useRoute();

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const ASSET_BASE_URL = API_BASE_URL.replace(/\/api$/, '');

const umkm = ref(null);
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

const renderGoogleMaps = (urlOrIframe) => {
  if (!urlOrIframe) return '';
  const match = urlOrIframe.match(/src\s*=\s*["']([^"']+)["']/i);
  if (match && match[1]) {
    return match[1];
  }
  if (urlOrIframe.startsWith('http')) {
    return urlOrIframe;
  }
  return '';
};

const getWhatsAppUrl = (noWa, namaUmkm) => {
  let number = noWa || '-';
  number = number.replace(/[^0-9]/g, '');
  if (number.startsWith('0')) {
    number = '62' + number.slice(1);
  } else if (!number.startsWith('62')) {
    number = '62' + number;
  }
  
  const text = encodeURIComponent(`Halo, saya tertarik dengan produk ${namaUmkm || 'UMKM Anda'} yang ada di website Desa Buniara. Bisa minta informasi lebih lanjut?`);
  return `https://wa.me/${number}?text=${text}`;
};

const fetchDetailUmkm = async () => {
  loading.value = true;
  error.value = null;

  const currentId = route.params.id;
  const API_URL = `${API_BASE_URL}/public/umkm/${currentId}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Gagal mengambil data produk UMKM dari server');

    const result = await response.json();

    if (result.success && result.data) {
      umkm.value = result.data;
    } else {
      error.value = result.message || 'Produk UMKM tidak ditemukan';
    }
  } catch (err) {
    console.error(err);
    error.value = 'Terjadi kesalahan saat memuat detail UMKM.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'instant' 
  });
  fetchDetailUmkm();
});

watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      fetchDetailUmkm();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
);
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