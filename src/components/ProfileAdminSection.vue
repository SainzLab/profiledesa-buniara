<template>
  <section class="relative py-20 md:py-24 px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
    
    <div id="wilayah" class="relative max-w-7xl mx-auto z-10" v-if="!isLoading">
      
      <div class="text-center mb-12 md:mb-16 fade-in-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800">
          Profil Wilayah & <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#005a66] to-teal-400">Administrasi</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-[#005a66] to-teal-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        <div class="fade-in-left bg-white p-3 md:p-4 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
          <div 
            class="relative w-full flex-grow h-full min-h-[350px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-inner bg-gray-100"
            v-html="konten.maps_embed"
          >
          </div>
        </div>

        <div class="fade-in-right bg-gradient-to-br from-[#f4f7f6] to-white p-6 md:p-8 rounded-3xl flex flex-col gap-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          
          <div class="bg-white p-2 rounded-2xl shadow-md overflow-hidden group">
            <img 
              :src="getImageUrl(konten.kantor_img, 'Kantor Desa Buniara')" 
              alt="Kantor Desa" 
              class="w-full h-48 md:h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
          </div>
          
          <h3 class="text-2xl md:text-3xl font-extrabold text-[#005a66] mt-2">
            Kantor Desa Buniara
          </h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            
            <div class="animate-stagger-1 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md border border-transparent hover:border-teal-100 flex gap-4 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="bg-[#eaf1f1] w-10 h-10 rounded-xl flex items-center justify-center text-[#005a66] flex-shrink-0 group-hover:bg-[#005a66] group-hover:text-white transition-colors duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-[10px] font-bold text-[#005a66] uppercase tracking-wider">Alamat</h4>
                <p class="text-sm text-gray-600 mt-1 leading-snug">{{ konten.alamat }}</p>
              </div>
            </div>
            
            <div class="animate-stagger-2 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md border border-transparent hover:border-teal-100 flex gap-4 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="bg-[#eaf1f1] w-10 h-10 rounded-xl flex items-center justify-center text-[#005a66] flex-shrink-0 group-hover:bg-[#005a66] group-hover:text-white transition-colors duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-[10px] font-bold text-[#005a66] uppercase tracking-wider">Jam Operasional</h4>
                <p class="text-sm text-gray-600 mt-1 leading-snug whitespace-pre-line">{{ konten.jam_operasional }}</p>
              </div>
            </div>

            <div class="animate-stagger-3 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md border border-transparent hover:border-teal-100 flex gap-4 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="bg-[#eaf1f1] w-10 h-10 rounded-xl flex items-center justify-center text-[#005a66] flex-shrink-0 group-hover:bg-[#005a66] group-hover:text-white transition-colors duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-[10px] font-bold text-[#005a66] uppercase tracking-wider">Layanan Utama</h4>
                <p class="text-sm text-gray-600 mt-1 leading-snug">{{ konten.layanan }}</p>
              </div>
            </div>
            
            <div class="animate-stagger-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md border border-transparent hover:border-teal-100 flex gap-4 transition-all duration-300 hover:-translate-y-1 group cursor-default">
              <div class="bg-[#eaf1f1] w-10 h-10 rounded-xl flex items-center justify-center text-[#005a66] flex-shrink-0 group-hover:bg-[#005a66] group-hover:text-white transition-colors duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-[10px] font-bold text-[#005a66] uppercase tracking-wider">Kontak</h4>
                <p class="text-sm text-gray-600 mt-1 leading-snug">{{ konten.kontak }}</p>
              </div>
            </div>
          </div>
        
          <div class="mt-4 border-t border-gray-200 pt-6 animate-stagger-5 relative group">
            <h4 class="text-xs font-bold text-[#005a66] uppercase tracking-wider mb-5">Perangkat Desa</h4>
            
            <button 
              @click="scrollStaffLeft" 
              class="absolute left-[-10px] md:left-[-16px] top-[60%] -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg border border-gray-100 rounded-full p-1.5 md:p-2 text-gray-400 hover:text-[#005a66] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <div ref="staffSliderRef" class="flex overflow-x-auto gap-6 sm:gap-8 snap-x snap-mandatory scroll-smooth hide-scrollbar pb-6 pt-2 -mx-6 md:-mx-8 px-6 md:px-8">
              
              <div 
                v-for="(staff, index) in konten.perangkat_desa" 
                :key="index"
                class="shrink-0 w-28 sm:w-30 snap-start text-center flex flex-col items-center group/staff cursor-pointer"
              >

                <div 
                  class="w-14 h-14 sm:w-16 sm:h-16 text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 shadow-md group-hover/staff:scale-110 group-hover/staff:shadow-lg transition-all duration-300"
                  :class="index % 2 === 0 ? 'bg-gradient-to-tr from-[#005a66] to-teal-500 group-hover/staff:ring-4 ring-teal-100' : 'bg-gray-400 text-white group-hover/staff:bg-[#005a66]'"
                >
                  {{ getInitials(staff.nama) }}
                </div>
                <p class="text-sm font-bold text-gray-800 group-hover/staff:text-[#005a66] transition-colors leading-tight">{{ staff.nama }}</p>
                <p class="text-[10px] font-bold text-gray-500 uppercase mt-1">{{ staff.jabatan }}</p>
              </div>
              
              <div class="shrink-0 w-2 md:w-4 snap-start"></div>
            </div>

            <button 
              @click="scrollStaffRight" 
              class="absolute right-[-10px] md:right-[-16px] top-[60%] -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg border border-gray-100 rounded-full p-1.5 md:p-2 text-gray-400 hover:text-[#005a66] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
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
const staffSliderRef = ref(null);

const konten = ref({
  maps_embed: '',
  kantor_img: '',
  alamat: '',
  jam_operasional: '',
  layanan: '',
  kontak: '',
  perangkat_desa: []
});

const getInitials = (name) => {
  if (!name) return 'PD';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const getImageUrl = (imagePath, fallbackText) => {
  if (!imagePath) return `https://dummyimage.com/600x300/a3a3a3/ffffff&text=${fallbackText.replace(/ /g, '+')}`;
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

const scrollStaffLeft = () => {
  if (staffSliderRef.value) {
    staffSliderRef.value.scrollBy({ left: -200, behavior: 'smooth' });
  }
};

const scrollStaffRight = () => {
  if (staffSliderRef.value) {
    staffSliderRef.value.scrollBy({ left: 200, behavior: 'smooth' });
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
.fade-in-left {
  animation: fadeInLeft 1s ease-out forwards;
}
.fade-in-right {
  animation: fadeInRight 1s ease-out forwards;
}

.animate-stagger-1 { animation: fadeInUp 0.5s ease-out 0.2s forwards; opacity: 0; }
.animate-stagger-2 { animation: fadeInUp 0.5s ease-out 0.3s forwards; opacity: 0; }
.animate-stagger-3 { animation: fadeInUp 0.5s ease-out 0.4s forwards; opacity: 0; }
.animate-stagger-4 { animation: fadeInUp 0.5s ease-out 0.5s forwards; opacity: 0; }
.animate-stagger-5 { animation: fadeInUp 0.5s ease-out 0.6s forwards; opacity: 0; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>