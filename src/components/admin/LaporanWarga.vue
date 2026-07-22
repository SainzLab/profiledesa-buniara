<template>
  <div class="max-w-7xl mx-auto relative font-sans min-h-screen">
    
    <transition 
      enter-active-class="transition duration-300 ease-out" 
      enter-from-class="transform translate-y-[-20px] opacity-0" 
      enter-to-class="transform translate-y-0 opacity-100" 
      leave-active-class="transition duration-200 ease-in" 
      leave-from-class="transform translate-y-0 opacity-100" 
      leave-to-class="transform translate-y-[-20px] opacity-0"
    >
      <div v-if="notif.show" :class="`fixed top-6 right-6 sm:top-10 sm:right-10 px-6 py-4 rounded-2xl shadow-xl border z-[120] flex items-center gap-4 max-w-sm w-full sm:w-auto ${notif.type === 'success' ? 'bg-white border-emerald-100' : 'bg-white border-red-100'}`">
        <div :class="`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full shadow-inner ${notif.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`">
          <svg v-if="notif.type === 'success'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <p class="text-sm font-bold leading-tight text-gray-800">{{ notif.message }}</p>
      </div>
    </transition>

    <div v-if="confirmModal.show" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110] flex items-center justify-center p-4 transition-opacity">
      <div class="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl p-8 text-center transform transition-all animate-fade-in-up">
        
        <div :class="`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative ${confirmModal.type === 'danger' ? 'bg-red-50' : 'bg-emerald-50'}`">
          <div :class="`absolute inset-0 rounded-full animate-ping ${confirmModal.type === 'danger' ? 'bg-red-100/50' : 'bg-emerald-100/50'}`"></div>
          
          <svg v-if="confirmModal.type === 'danger'" class="w-10 h-10 text-red-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <svg v-else class="w-10 h-10 text-emerald-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
        </div>

        <h3 class="text-2xl font-extrabold text-gray-800 mb-3">{{ confirmModal.title }}</h3>
        <p class="text-sm text-gray-500 mb-8 leading-relaxed">{{ confirmModal.message }}</p>
        
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button @click="closeConfirm" :disabled="confirmModal.isProcessing" class="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-gray-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors disabled:opacity-70">
            Batal
          </button>
          <button @click="executeConfirm" :disabled="confirmModal.isProcessing" :class="`w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 ${confirmModal.type === 'danger' ? 'bg-gradient-to-r from-red-600 to-red-500 hover:to-red-400' : 'bg-gradient-to-r from-emerald-700 to-emerald-500 hover:to-emerald-400'}`">
            <svg v-if="confirmModal.isProcessing" class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            {{ confirmModal.isProcessing ? 'Memproses...' : confirmModal.actionLabel }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 mt-8">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Data Laporan Warga</h2>
        <p class="text-sm text-gray-500 mt-1">Kelola dan tindak lanjuti pengaduan dari masyarakat.</p>
      </div>
      
      <div class="flex flex-wrap items-center gap-3">
        <button @click="openWaSettings" class="inline-flex items-center px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-xl hover:bg-slate-700 transition-colors shadow-sm">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Setting WA
        </button>

        <div class="relative">
          <input type="text" placeholder="Cari laporan..." class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 text-gray-900">
          <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-200 mb-6">
      <nav class="-mb-px flex space-x-6 overflow-x-auto hide-scrollbar">
        <button 
          v-for="tab in ['Semua', 'Menunggu', 'Diproses', 'Selesai', 'Ditolak']" 
          :key="tab"
          @click="activeTab = tab"
          :class="[
            activeTab === tab 
              ? 'font-bold' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium',
            'whitespace-nowrap pb-3 px-1 border-b-2 text-sm transition-colors outline-none'
          ]"
        >
          {{ tab === 'Menunggu' ? 'Baru Masuk (Menunggu)' : tab }}
        </button>
      </nav>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
      <div v-if="isLoading" class="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10">
        <svg class="animate-spin h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="text-gray-600 text-sm font-medium tracking-wide">Memuat data Laporan...</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
              <th class="px-6 py-4">Tanggal</th>
              <th class="px-6 py-4">Pelapor & Kontak</th>
              <th class="px-6 py-4">Kategori & Subjek</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-if="filteredLaporan.length === 0 && !isLoading">
              <td colspan="5" class="px-6 py-12 text-center text-gray-500 text-sm">
                Tidak ada data laporan untuk kategori <strong class="text-gray-700">{{ activeTab }}</strong>.
              </td>
            </tr>
            <tr v-for="laporan in filteredLaporan" :key="laporan.id" class="hover:bg-slate-50/50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {{ formatDate(laporan.created_at) }}
              </td>
              
              <td class="px-6 py-4">
                <div class="font-bold text-gray-900 text-sm">{{ laporan.nama_lengkap }}</div>
                <div class="text-xs text-gray-500 mt-0.5">{{ laporan.kontak }}</div>
              </td>
              
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-gray-700 mb-1 tracking-wide">
                  {{ laporan.kategori }}
                </span>
                <div class="text-sm text-gray-800 font-medium line-clamp-1 max-w-xs" :title="laporan.subjek">{{ laporan.subjek }}</div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <span v-if="laporan.status === 'Menunggu'" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-100">
                  <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span> Menunggu
                </span>
                <span v-if="laporan.status === 'Diproses'" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
                  <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span> Diproses
                </span>
                <span v-if="laporan.status === 'Selesai'" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span> Selesai
                </span>
                <span v-if="laporan.status === 'Ditolak'" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                  <span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"></span> Ditolak
                </span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="flex items-center justify-center gap-2">
                  <button @click="openDetail(laporan)" class="inline-flex items-center px-3 py-1.5 bg-white border border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 text-xs font-bold rounded-lg transition-all shadow-sm">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    Detail
                  </button>
                  <button @click="promptHapusLaporan(laporan.id)" class="inline-flex items-center px-3 py-1.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 text-xs font-bold rounded-lg transition-all shadow-sm">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-slate-50/50">
        <span class="text-sm font-medium text-gray-500">Menampilkan <span class="font-bold text-gray-800">{{ filteredLaporan.length }}</span> laporan</span>
        <div class="flex space-x-2">
          <button class="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 shadow-sm transition-colors" disabled>Sebelumnya</button>
          <button class="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 shadow-sm transition-colors" disabled>Selanjutnya</button>
        </div>
      </div>
    </div>

    <div v-if="isDetailModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
      <div class="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
        <div class="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-slate-50">
          <h3 class="text-lg font-extrabold text-gray-800">Detail Laporan <span class="text-emerald-600">#{{ selectedLaporan.id }}</span></h3>
          <button @click="closeDetail" class="text-gray-400 hover:text-gray-800 transition-colors bg-white p-1.5 rounded-full shadow-sm hover:shadow">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div class="p-8 overflow-y-auto hide-scrollbar">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div class="bg-slate-50 rounded-2xl p-4 border border-gray-50">
              <p class="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Informasi Pelapor</p>
              <p class="text-base font-bold text-gray-800">{{ selectedLaporan.nama_lengkap }}</p>
              <p class="text-sm text-gray-500 mt-1">{{ selectedLaporan.kontak }}</p>
            </div>
            <div class="bg-slate-50 rounded-2xl p-4 border border-gray-50">
              <p class="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Tanggal & Kategori</p>
              <p class="text-base font-bold text-gray-800">{{ formatDate(selectedLaporan.created_at) }}</p>
              <p class="text-sm text-gray-500 mt-1">{{ selectedLaporan.kategori }}</p>
            </div>
          </div>
          
          <div class="mb-6">
            <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Subjek Laporan</p>
            <p class="text-lg font-bold text-gray-800">{{ selectedLaporan.subjek }}</p>
          </div>

          <div class="mb-8 bg-slate-50 p-5 rounded-2xl border border-gray-100 relative">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 rounded-l-2xl"></div>
            <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Isi Laporan / Pesan</p>
            <p class="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{{ selectedLaporan.pesan }}</p>
          </div>

          <div v-if="selectedLaporan?.lampiran" class="mt-4">
            <p class="text-sm font-semibold text-gray-700 mb-2">Lampiran Foto</p>
            <img 
              :src="getImageUrl(selectedLaporan.lampiran)" 
              alt="Lampiran Laporan" 
              class="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
          <div class="border-t border-gray-100 pt-8 mt-4">
            <label class="block text-sm font-extrabold text-gray-800 mb-3">Tindak Lanjut Status</label>
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="relative flex-1">
                <select v-model="editStatus" class="w-full appearance-none border border-gray-200 rounded-xl pl-4 pr-10 py-3.5 text-sm font-medium outline-none bg-slate-50 hover:bg-white transition-colors cursor-pointer text-gray-700 focus:border-gray-400">
                  <option value="Menunggu">Menunggu (Baru Masuk)</option>
                  <option value="Diproses">Sedang Diproses</option>
                  <option value="Selesai">Selesai / Tuntas</option>
                  <option value="Ditolak">Ditolak / Tidak Valid</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              <button @click="promptUpdateStatus" class="px-6 py-3.5 bg-gradient-to-r from-emerald-700 to-emerald-500 hover:to-emerald-400 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center min-w-[140px]">
                Simpan Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isWaModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
      <div class="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <div class="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-slate-50">
          <h3 class="text-lg font-extrabold text-gray-800">Pengaturan WhatsApp</h3>
          <button @click="isWaModalOpen = false" class="text-gray-400 hover:text-gray-800 transition-colors bg-white p-1.5 rounded-full shadow-sm hover:shadow">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div class="p-8">
          <div class="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-100 flex gap-3">
            <svg class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="text-sm text-amber-800 leading-relaxed">Masukkan nomor WhatsApp admin penerima laporan. Gunakan kode negara (contoh: <span class="font-bold">62812...</span>)</p>
          </div>
          
          <label class="block text-sm font-extrabold text-gray-800 mb-2">Nomor WhatsApp Aktif</label>
          <input v-model="formWaNumber" type="text" placeholder="628123456789" class="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm mb-8 bg-slate-50 font-medium text-gray-800">
          
          <div class="flex flex-col sm:flex-row justify-end gap-3">
            <button @click="isWaModalOpen = false" class="w-full sm:w-auto px-5 py-3.5 border border-gray-200 text-gray-600 bg-white hover:bg-slate-50 rounded-xl text-sm font-bold transition-colors">Batal</button>
            <button @click="promptSaveWaNumber" class="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg">
              Simpan Nomor
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ASSET_BASE_URL = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : '';

const notif = reactive({
  show: false,
  message: '',
  type: 'success'
});

const showNotification = (message, type = 'success') => {
  notif.message = message;
  notif.type = type;
  notif.show = true;
  setTimeout(() => {
    notif.show = false;
  }, 3500);
};

const confirmModal = reactive({
  show: false,
  title: '',
  message: '',
  actionLabel: '',
  type: 'primary',
  isProcessing: false,
  actionFn: null
});

const openConfirm = (title, message, actionLabel, type, actionFn) => {
  confirmModal.title = title;
  confirmModal.message = message;
  confirmModal.actionLabel = actionLabel;
  confirmModal.type = type;
  confirmModal.actionFn = actionFn;
  confirmModal.isProcessing = false;
  confirmModal.show = true;
};

const closeConfirm = () => {
  confirmModal.show = false;
};

const executeConfirm = async () => {
  if (confirmModal.actionFn) {
    confirmModal.isProcessing = true;
    await confirmModal.actionFn();
    confirmModal.isProcessing = false;
    closeConfirm();
  }
};

const daftarLaporan = ref([]);
const isLoading = ref(false);
const activeTab = ref('Semua');

const filteredLaporan = computed(() => {
  if (activeTab.value === 'Semua') {
    return daftarLaporan.value;
  }
  return daftarLaporan.value.filter(laporan => laporan.status === activeTab.value);
});

const isDetailModalOpen = ref(false);
const selectedLaporan = ref(null);
const editStatus = ref('');

const isWaModalOpen = ref(false);
const formWaNumber = ref('');

const getToken = () => localStorage.getItem('token') || '';

const formatDate = (dateString) => {
  if (!dateString) return '-';
  const options = { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('blob:') || imagePath.startsWith('data:image')) return imagePath;
  if (imagePath.startsWith('/uploads')) return `${ASSET_BASE_URL}${imagePath}`;
  return imagePath;
};

const fetchLaporan = async () => {
  isLoading.value = true;
  try {
    const res = await fetch(`${API_BASE_URL}/laporan`, {
      headers: { 'Authorization': `Bearer ${getToken()}` }
    });
    const result = await res.json();
    if (result.success) {
      daftarLaporan.value = result.data;
    } else {
      showNotification('Gagal mengambil data laporan.', 'error');
    }
  } catch (error) {
    console.error('Error fetching laporan:', error);
    showNotification('Terjadi kesalahan jaringan.', 'error');
  } finally {
    isLoading.value = false;
  }
};

const promptUpdateStatus = () => {
  if (!selectedLaporan.value) return;
  
  openConfirm(
    'Simpan Perubahan?',
    `Anda akan mengubah status laporan warga ini menjadi "${editStatus.value}". Lanjutkan?`,
    'Ya, Simpan Status',
    'primary',
    async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/laporan/${selectedLaporan.value.id}/status`, {
          method: 'PATCH',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}` 
          },
          body: JSON.stringify({ status: editStatus.value })
        });
        const result = await res.json();
        
        if (result.success) {
          showNotification('Status laporan berhasil diperbarui!', 'success');
          const index = daftarLaporan.value.findIndex(l => l.id === selectedLaporan.value.id);
          if (index !== -1) {
            daftarLaporan.value[index].status = editStatus.value;
          }
          closeDetail();
        } else {
          showNotification('Gagal update status: ' + result.message, 'error');
        }
      } catch (error) {
        console.error('Error updating status:', error);
        showNotification('Terjadi kesalahan jaringan.', 'error');
      }
    }
  );
};

const promptHapusLaporan = (id) => {
  openConfirm(
    'Hapus Laporan Ini?',
    'Apakah Anda yakin ingin menghapus data laporan ini? Proses ini permanen dan data tidak dapat dikembalikan.',
    'Ya, Hapus Permanen',
    'danger',
    async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/laporan/${id}`, {
          method: 'DELETE',
          headers: { 
            'Authorization': `Bearer ${getToken()}` 
          }
        });
        const result = await res.json();
        
        if (result.success) {
          daftarLaporan.value = daftarLaporan.value.filter(l => l.id !== id);
          showNotification('Laporan berhasil dihapus secara permanen.', 'success');
        } else {
          showNotification('Gagal menghapus laporan: ' + result.message, 'error');
        }
      } catch (error) {
        console.error('Error deleting laporan:', error);
        showNotification('Terjadi kesalahan jaringan.', 'error');
      }
    }
  );
};

const promptSaveWaNumber = () => {
  openConfirm(
    'Simpan Nomor WhatsApp?',
    'Pastikan nomor sudah benar. Nomor ini akan menerima otomatis format laporan masuk dari masyarakat.',
    'Ya, Simpan Nomor',
    'primary',
    async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/pengaturan/wa`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}` 
          },
          body: JSON.stringify({ nomor: formWaNumber.value })
        });
        const result = await res.json();
        
        if (result.success) {
          showNotification('Pengaturan WhatsApp berhasil disimpan!', 'success');
          isWaModalOpen.value = false;
        } else {
          showNotification('Gagal menyimpan nomor WA: ' + result.message, 'error');
        }
      } catch (error) {
        console.error('Error saving WA number:', error);
        showNotification('Terjadi kesalahan jaringan.', 'error');
      }
    }
  );
};

const fetchWaNumber = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/pengaturan/wa`, {
      headers: { 'Authorization': `Bearer ${getToken()}` }
    });
    const result = await res.json();
    if (result.success) {
      formWaNumber.value = result.data || '';
    }
  } catch (error) {
    console.error('Error fetching WA number:', error);
  }
};

const openDetail = (laporan) => {
  selectedLaporan.value = laporan;
  editStatus.value = laporan.status;
  isDetailModalOpen.value = true;
};

const closeDetail = () => {
  isDetailModalOpen.value = false;
  selectedLaporan.value = null;
};

const openWaSettings = async () => {
  isWaModalOpen.value = true;
  await fetchWaNumber(); 
};

onMounted(() => {
  fetchLaporan();
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>