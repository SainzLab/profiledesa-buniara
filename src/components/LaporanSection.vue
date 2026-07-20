<template>
  <section class="relative bg-slate-50 py-16 px-4 sm:px-8 font-sans min-h-screen overflow-hidden">
    
    <div class="max-w-7xl mx-auto relative z-10">
      
      <div class="mb-8 fade-in-up">
        <router-link to="/" class="group inline-flex items-center gap-3 p-1.5 pr-5 bg-white rounded-full shadow-sm hover:shadow-md hover:border-teal-100 transition-all duration-300">
          <div class="bg-slate-50 p-2 rounded-full text-gray-400 group-hover:bg-gradient-to-r group-hover:from-[#0a3622] group-hover:to-teal-500 group-hover:text-white transition-all duration-300 transform group-hover:-translate-x-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span class="text-sm font-medium text-gray-500 group-hover:text-[#0a3622] transition-colors duration-300">
            Kembali ke Beranda
          </span>
        </router-link>
      </div>

      <div class="mb-10 fade-in-up animation-delay-100">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0a3622] to-teal-500 tracking-tight mb-4">
          Laporan & Masukan Masyarakat
        </h1>
        <p class="text-gray-500 max-w-2xl text-base leading-relaxed">
          Sampaikan aspirasi, laporan, atau saran Anda untuk kemajuan Desa Buniara. Kami berkomitmen untuk mendengar dan menindaklanjuti setiap suara Anda.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        <div class="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[2rem] shadow-lg border border-gray-50 transition-all duration-500 hover:shadow-xl fade-in-left animation-delay-200">
          <div class="flex items-center gap-4 mb-8">
            <div class="bg-teal-50 p-3 rounded-2xl text-[#0a3622] shadow-inner">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-800">Formulir Pengaduan</h2>
              <p class="text-sm text-gray-500 mt-0.5">Lengkapi data di bawah ini secara akurat</p>
            </div>
          </div>

          <form class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#0a3622] transition-colors">Nama Lengkap</label>
                <input type="text" placeholder="Contoh: Budi Santoso" class="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white outline-none transition-all text-sm bg-slate-50 text-gray-800 placeholder-gray-400" />
              </div>
              <div class="group">
                <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#0a3622] transition-colors">Email / No. WhatsApp</label>
                <input type="text" placeholder="budi@email.com atau 0812..." class="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white outline-none transition-all text-sm bg-slate-50 text-gray-800 placeholder-gray-400" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Kategori Laporan</label>
              <div class="relative">
                <div v-if="isDropdownOpen" @click="isDropdownOpen = false" class="fixed inset-0 z-10"></div>
                <button 
                  type="button" 
                  @click="isDropdownOpen = !isDropdownOpen"
                  class="relative z-20 w-full flex items-center justify-between border rounded-xl px-4 py-3.5 outline-none transition-all duration-300 text-sm cursor-pointer"
                  :class="isDropdownOpen ? 'bg-white' : 'border-gray-200 bg-slate-50 hover:border-gray-300'"
                >
                  <span :class="selectedCategory ? 'text-gray-800 font-medium' : 'text-gray-400'">
                    {{ selectedCategory || 'Pilih kategori...' }}
                  </span>
                  <svg 
                    class="w-5 h-5 transition-transform duration-300" 
                    :class="isDropdownOpen ? 'rotate-180 text-[#0a3622]' : 'text-gray-400'"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <transition 
                  enter-active-class="transition ease-out duration-200" 
                  enter-from-class="opacity-0 translate-y-2 scale-95" 
                  enter-to-class="opacity-100 translate-y-0 scale-100" 
                  leave-active-class="transition ease-in duration-150" 
                  leave-from-class="opacity-100 translate-y-0 scale-100" 
                  leave-to-class="opacity-0 translate-y-2 scale-95"
                >
                  <div v-if="isDropdownOpen" class="absolute z-30 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl py-2 overflow-hidden">
                    <ul class="max-h-60 overflow-auto hide-scrollbar">
                      <li 
                        v-for="cat in categories" 
                        :key="cat.id" 
                        @click="selectCategory(cat)"
                        class="px-4 py-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3"
                        :class="selectedCategory === cat.label ? 'bg-teal-50 text-[#0a3622] font-semibold' : 'text-gray-600 hover:bg-slate-50 hover:text-gray-800'"
                      >
                        <div class="w-2 h-2 rounded-full transition-colors duration-200" :class="selectedCategory === cat.label ? 'bg-[#0a3622]' : 'bg-transparent'"></div>
                        {{ cat.label }}
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
            </div>

            <div class="group">
              <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#0a3622] transition-colors">Subjek</label>
              <input type="text" placeholder="Judul singkat laporan Anda" class="w-full border border-gray-200 rounded-xl px-4 py-3.5  focus:bg-white outline-none transition-all text-sm bg-slate-50 text-gray-800 placeholder-gray-400" />
            </div>

            <div class="group">
              <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#0a3622] transition-colors">Pesan / Laporan</label>
              <textarea rows="4" placeholder="Tuliskan detail laporan, lokasi kejadian, atau saran Anda secara lengkap..." class="w-full border border-gray-200 rounded-xl px-4 py-3.5  focus:bg-white outline-none transition-all text-sm bg-slate-50 text-gray-800 placeholder-gray-400 resize-y"></textarea>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Lampiran Foto (Opsional)</label>
              <div class="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-teal-50/50 hover:border-[#0a3622]/40 transition-all duration-300 cursor-pointer group bg-slate-50 hover:bg-white">
                <div class="bg-white shadow-sm p-3 rounded-full mb-3 group-hover:scale-110 group-hover:shadow-md group-hover:text-[#0a3622] transition-all duration-300">
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-[#0a3622] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-700 mb-1">Klik atau seret foto ke sini</p>
                <p class="text-xs text-gray-400">Format: JPG, PNG (Max. 5MB)</p>
              </div>
            </div>

            <button type="button" class="w-full bg-gradient-to-r from-[#0a3622] to-teal-600 hover:to-teal-500 text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-4 group">
              <svg class="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Kirim Laporan
            </button>
          </form>
        </div>

        <div class="lg:col-span-5 space-y-8 fade-in-right animation-delay-300">
          
          <div class="bg-white p-6 sm:p-8 rounded-[2rem] shadow-lg border border-gray-50 hover:shadow-xl transition-shadow duration-300">
            <h3 class="flex items-center gap-3 text-lg font-extrabold text-gray-800 mb-6">
              <div class="w-1.5 h-6 bg-gradient-to-b from-[#0a3622] to-teal-400 rounded-full"></div>
              Saluran Informasi Resmi
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group cursor-default border border-transparent hover:border-gray-100">
                <div class="bg-white shadow-sm border border-gray-50 p-3 rounded-2xl text-[#0a3622] group-hover:bg-[#0a3622] group-hover:text-white transition-colors duration-300 shrink-0">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
                </div>
                <div class="pt-1">
                  <h4 class="text-sm font-bold text-gray-800">Alamat Kantor Desa</h4>
                  <p class="text-sm text-gray-500 mt-1 leading-relaxed">Jl. Raya Buniara No. 12, Kec. Tanjungsiang, Subang.</p>
                </div>
              </li>
              <li class="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group cursor-default border border-transparent hover:border-gray-100">
                <div class="bg-white shadow-sm border border-gray-50 p-3 rounded-2xl text-[#0a3622] group-hover:bg-[#0a3622] group-hover:text-white transition-colors duration-300 shrink-0">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </div>
                <div class="pt-1">
                  <h4 class="text-sm font-bold text-gray-800">Email Resmi</h4>
                  <p class="text-sm text-gray-500 mt-1">info@buniara-desa.id</p>
                </div>
              </li>
              <li class="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group cursor-default border border-transparent hover:border-gray-100">
                <div class="bg-white shadow-sm border border-gray-50 p-3 rounded-2xl text-[#0a3622] group-hover:bg-[#0a3622] group-hover:text-white transition-colors duration-300 shrink-0">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" /></svg>
                </div>
                <div class="pt-1">
                  <h4 class="text-sm font-bold text-gray-800">WhatsApp Pelayanan</h4>
                  <p class="text-sm text-gray-500 mt-1">+62 812 3456 7890</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-[2rem] shadow-lg border border-gray-50 hover:shadow-xl transition-shadow duration-300">
            <h3 class="flex items-center gap-3 text-lg font-extrabold text-gray-800 mb-6">
              <div class="w-1.5 h-6 bg-gradient-to-b from-[#8b4513] to-amber-500 rounded-full"></div>
              Prosedur Penanganan
            </h3>
            
            <div class="mt-4 ml-2">
              <div class="flex gap-5 group">
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 rounded-full bg-slate-100 text-gray-600 flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white group-hover:bg-[#0a3622] group-hover:text-white transition-all duration-300">1</div>
                  <div class="w-0.5 bg-gray-100 h-full my-1 group-hover:bg-teal-200 transition-colors duration-300"></div>
                </div>
                <div class="pb-6 pt-0.5">
                  <h5 class="text-sm font-bold text-gray-800 group-hover:text-[#0a3622] transition-colors">Laporan Diterima</h5>
                  <p class="text-sm text-gray-500 mt-1.5 leading-relaxed">Sistem mencatat laporan Anda dan memberikan nomor tracking via WhatsApp/Email.</p>
                </div>
              </div>
              <div class="flex gap-5 group">
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 rounded-full bg-slate-100 text-gray-600 flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white group-hover:bg-[#0a3622] group-hover:text-white transition-all duration-300">2</div>
                  <div class="w-0.5 bg-gray-100 h-full my-1 group-hover:bg-teal-200 transition-colors duration-300"></div>
                </div>
                <div class="pb-6 pt-0.5">
                  <h5 class="text-sm font-bold text-gray-800 group-hover:text-[#0a3622] transition-colors">Verifikasi Laporan</h5>
                  <p class="text-sm text-gray-500 mt-1.5 leading-relaxed">Tim admin memvalidasi informasi dan mengarahkan ke divisi terkait.</p>
                </div>
              </div>
              <div class="flex gap-5 group">
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 rounded-full bg-slate-100 text-gray-600 flex items-center justify-center font-bold text-xs shrink-0 ring-4 ring-white group-hover:bg-[#0a3622] group-hover:text-white transition-all duration-300">3</div>
                </div>
                <div class="pt-0.5">
                  <h5 class="text-sm font-bold text-gray-800 group-hover:text-[#0a3622] transition-colors">Tindak Lanjut</h5>
                  <p class="text-sm text-gray-500 mt-1.5 leading-relaxed">Ditindaklanjuti di lapangan dan hasil akan diinformasikan kembali.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-[#0a3622] to-teal-800 rounded-[2rem] shadow-xl p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
      
            <div class="flex flex-col sm:flex-row justify-center items-center text-center relative z-10 gap-8 sm:gap-0">
              <div class="flex flex-col items-center w-full sm:w-1/2 sm:border-r border-white/20">
                <p class="text-4xl font-extrabold mb-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-200">124</p>
                <p class="text-[10px] font-bold text-teal-100 uppercase tracking-widest mt-1">Laporan Selesai</p>
              </div>
              <div class="flex flex-col items-center w-full sm:w-1/2">
                <p class="text-4xl font-extrabold mb-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-200">24<span class="text-2xl text-teal-200 font-medium ml-1">h</span></p>
                <p class="text-[10px] font-bold text-teal-100 uppercase tracking-widest mt-1">Waktu Respons</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isDropdownOpen = ref(false)
const selectedCategory = ref('')

const categories = [
  { id: 'infrastruktur', label: 'Infrastruktur' },
  { id: 'pelayanan', label: 'Pelayanan Publik' },
  { id: 'keamanan', label: 'Keamanan & Ketertiban' },
  { id: 'hewan', label: 'Hewan Liar' },
  { id: 'halus', label: 'Gangguan Mahluk Halus' },
  { id: 'lainnya', label: 'Lainnya' }
]

const selectCategory = (category) => {
  selectedCategory.value = category.label
  isDropdownOpen.value = false
}
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
  opacity: 0;
}
.fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}
.fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
}

.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }

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