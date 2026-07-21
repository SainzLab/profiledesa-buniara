<template>
  <div class="max-w-4xl mx-auto pb-12 relative">
    
    <Transition
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="notif.show" 
        class="fixed top-5 right-5 z-50 max-w-md w-full bg-white rounded-2xl shadow-2xl border p-4 flex items-start space-x-4 transition-all duration-300"
        :class="{
          'border-emerald-200 bg-emerald-50/30': notif.type === 'success',
          'border-red-200 bg-red-50/30': notif.type === 'error',
          'border-blue-200 bg-blue-50/30': notif.type === 'info'
        }"
      >
        <div v-if="notif.type === 'success'" class="p-2 bg-emerald-100 rounded-xl text-emerald-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <div v-else-if="notif.type === 'error'" class="p-2 bg-red-100 rounded-xl text-red-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <div v-else class="p-2 bg-blue-100 rounded-xl text-blue-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>

        <div class="flex-1 pt-0.5">
          <h4 class="text-sm font-bold" :class="{'text-emerald-900': notif.type === 'success', 'text-red-900': notif.type === 'error', 'text-blue-900': notif.type === 'info'}">
            {{ notif.title }}
          </h4>
          <p class="text-xs text-gray-600 mt-1 leading-relaxed">
            {{ notif.message }}
          </p>
        </div>
        <button @click="notif.show = false" class="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </Transition>

    <div v-if="isFetching" class="flex flex-col items-center justify-center py-32">
      <svg class="animate-spin h-10 w-10 text-[#064e3b] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="text-gray-500 font-medium">Memuat data konten...</p>
    </div>

    <div v-else>
      <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Beranda</h3>
        
        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Headline Utama</label>
          <input type="text" 
                 v-model="form.hero_headline"
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" 
                 placeholder="Pesona Alam & Budaya Desa Buniara" />
          <p class="mt-2 text-sm text-gray-500">Teks besar yang menarik perhatian. Maksimal 60 karakter disarankan.</p>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Sub-headline (Deskripsi Singkat)</label>
          <textarea rows="3" 
                    v-model="form.hero_subheadline"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 resize-none"
                    placeholder="Temukan keharmonisan alam..."></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar Latar Belakang (Hero)</label>
          <input type="file" accept="image/*" @change="handleFileUpload($event, 'hero_image')" 
                 class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2" />
          
          <div class="relative w-full max-w-md aspect-[4/3] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
            <img v-if="preview.hero_image || form.hero_image" 
                 :src="preview.hero_image || form.hero_image" 
                 class="w-full h-full object-cover" 
                 alt="Preview Hero" />
            <span v-else class="text-sm font-medium text-gray-500">Preview 4:3</span>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Tentang Kami</h3>
        
        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Judul Bagian</label>
          <input type="text" 
                 v-model="form.tentang_judul"
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" 
                 placeholder="Surga Tersembunyi di Subang" />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Paragraf 1</label>
          <textarea rows="3" 
                    v-model="form.tentang_desc1"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 resize-none"></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Paragraf 2</label>
          <textarea rows="3" 
                    v-model="form.tentang_desc2"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 resize-none"></textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar 1 (Sawah)</label>
            <input type="file" accept="image/*" @change="handleFileUpload($event, 'tentang_img1')" 
                   class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2" />
            
            <div class="relative w-full aspect-[4/3] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
              <img v-if="preview.tentang_img1 || form.tentang_img1" 
                   :src="preview.tentang_img1 || form.tentang_img1" 
                   class="w-full h-full object-cover" 
                   alt="Preview Sawah" />
              <span v-else class="text-sm font-medium text-gray-500">Preview 4:3</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar 2 (Mata Air)</label>
            <input type="file" accept="image/*" @change="handleFileUpload($event, 'tentang_img2')" 
                   class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2" />
            
            <div class="relative w-full aspect-[4/3] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
              <img v-if="preview.tentang_img2 || form.tentang_img2" 
                   :src="preview.tentang_img2 || form.tentang_img2" 
                   class="w-full h-full object-cover" 
                   alt="Preview Mata Air" />
              <span v-else class="text-sm font-medium text-gray-500">Preview 4:3</span>
            </div>
          </div>
        </div>

        <div class="mb-2">
          <div class="flex justify-between items-center mb-4">
            <label class="block text-sm font-semibold text-gray-700">Daftar Wilayah Dusun</label>
            <button @click="tambahDusun" type="button" class="text-sm text-emerald-600 font-semibold hover:text-emerald-700">+ Tambah Dusun</button>
          </div>
          <div class="space-y-3">
            <div v-for="(dusun, index) in form.dusun" :key="index" class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
              <input type="text" 
                     v-model="form.dusun[index]" 
                     class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" 
                     placeholder="Nama Dusun" />
              <button @click="hapusDusun(index)" type="button" class="text-red-500 hover:text-red-700 p-2" title="Hapus">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
            <div v-if="form.dusun.length === 0" class="text-sm text-gray-500 text-center py-4 border border-dashed rounded-lg">
              Belum ada data dusun. Klik "Tambah Dusun".
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Administrasi & Kontak</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">URL Google Maps (Embed)</label>
            <textarea rows="4" 
                      v-model="form.maps_embed"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 text-sm resize-none mb-2" 
                      placeholder='<iframe src="..."></iframe>'></textarea>
            
            <div class="bg-gray-100 h-40 rounded-lg flex items-center justify-center border border-gray-200 overflow-hidden relative [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-none [&>iframe]:pointer-events-none" 
                 v-html="form.maps_embed || '<span class=\'text-sm text-gray-400\'>Pratinjau Peta</span>'">
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Foto Kantor Desa</label>
            <input type="file" accept="image/*" @change="handleFileUpload($event, 'kantor_img')" 
                   class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2" />
            
            <div class="relative w-full aspect-video bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
              <img v-if="preview.kantor_img || form.kantor_img" 
                   :src="preview.kantor_img || form.kantor_img" 
                   class="w-full h-full object-cover" 
                   alt="Preview Kantor" />
              <span v-else class="text-sm font-medium text-gray-500">Preview 16:9</span>
            </div>
          </div>
        </div>

        <h4 class="text-md font-semibold text-gray-800 mb-4">Informasi Utama</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Alamat</label>
            <input type="text" v-model="form.alamat" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" placeholder="Jl. Raya Buniara No. 1..." />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Jam Operasional</label>
            <input type="text" v-model="form.jam_operasional" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" placeholder="Senin-Jumat, 08:00 - 16:00 WIB." />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Layanan Utama</label>
            <input type="text" v-model="form.layanan" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" placeholder="Administrasi, Kependudukan." />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Kontak</label>
            <input type="text" v-model="form.kontak" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" placeholder="+62 812-XXXX-XXXX" />
          </div>
        </div>

        <div class="flex justify-between items-center mb-4">
          <h4 class="text-md font-semibold text-gray-800">Perangkat Desa</h4>
          <button @click="tambahPerangkat" type="button" class="text-sm text-emerald-600 font-semibold hover:text-emerald-700">+ Tambah Personel</button>
        </div>
        <div class="space-y-3">
          <div v-for="(person, index) in form.perangkat_desa" :key="index" class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
            <input type="text" 
                   v-model="person.nama" 
                   class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" 
                   placeholder="Nama" />
            <input type="text" 
                   v-model="person.jabatan" 
                   class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" 
                   placeholder="Jabatan" />
            <button @click="hapusPerangkat(index)" type="button" class="text-red-500 hover:text-red-700 p-2" title="Hapus">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
          <div v-if="form.perangkat_desa.length === 0" class="text-sm text-gray-500 text-center py-4 border border-dashed rounded-lg">
            Belum ada data perangkat desa. Klik "Tambah Personel".
          </div>
        </div>

      </div>

      <div class="flex justify-end space-x-4 pt-4 mt-8 mb-4">
        <button class="px-6 py-2.5 border border-emerald-800 text-emerald-800 font-semibold rounded-full hover:bg-emerald-50 transition-colors flex items-center bg-white">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          Pratinjau
        </button>
        <button @click="simpanPerubahan" :disabled="isLoading" class="px-6 py-2.5 bg-[#064e3b] text-white font-semibold rounded-full hover:bg-emerald-900 transition-colors flex items-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
          <svg v-if="!isLoading" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
          <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          {{ isLoading ? 'Menyimpan...' : 'Simpan Perubahan' }}
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const isLoading = ref(false); 
const isFetching = ref(true); 

const notif = ref({
  show: false,
  type: 'success',
  title: '',
  message: ''
});

let notifTimeout = null;

const showNotif = (type, title, message, duration = 4000) => {
  if (notifTimeout) clearTimeout(notifTimeout);
  
  notif.value = { show: true, type, title, message };

  if (duration > 0) {
    notifTimeout = setTimeout(() => {
      notif.value.show = false;
    }, duration);
  }
};

const preview = ref({
  hero_image: '',
  tentang_img1: '',
  tentang_img2: '',
  kantor_img: ''
});

const form = ref({
  hero_headline: '',
  hero_subheadline: '',
  hero_image: '', 
  tentang_judul: '',
  tentang_desc1: '',
  tentang_desc2: '',
  tentang_img1: '',
  tentang_img2: '',
  dusun: [], 
  maps_embed: '',
  kantor_img: '',
  alamat: '',
  jam_operasional: '',
  layanan: '',
  kontak: '',
  perangkat_desa: []
});

const handleFileUpload = (event, fieldName) => {
  const file = event.target.files[0];
  if (!file) return;

  preview.value[fieldName] = URL.createObjectURL(file);

  const reader = new FileReader();
  reader.onload = (e) => {
    form.value[fieldName] = e.target.result;
  };
  reader.readAsDataURL(file);
};

const fetchKonten = async () => {
  isFetching.value = true;
  try {
    const response = await fetch(`${API_BASE_URL}/konten`);
    const result = await response.json();
    
    if (result.success && result.data) {
      for (const key in result.data) {
        if (form.value.hasOwnProperty(key)) {
          form.value[key] = result.data[key] !== null 
            ? result.data[key] 
            : (Array.isArray(form.value[key]) ? [] : '');
        }
      }
    }
  } catch (error) {
    console.error('Gagal mengambil data:', error);
    showNotif('error', 'Gagal Memuat Data', 'Tidak dapat terhubung ke server untuk mengambil data.');
  } finally {
    isFetching.value = false;
  }
};

const simpanPerubahan = async () => {
  isLoading.value = true;
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_BASE_URL}/konten`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(form.value)
    });

    const result = await response.json();
    if (result.success) {
      showNotif('success', 'Berhasil Disimpan!', 'Perubahan konten website telah berhasil diperbarui.');
    } else {
      showNotif('error', 'Gagal Menyimpan', result.message || 'Terjadi kesalahan saat menyimpan data.');
    }
  } catch (error) {
    console.error('Error saving data:', error);
    showNotif('error', 'Kesalahan Server', 'Gagal terhubung ke server. Silakan periksa koneksi Anda.');
  } finally {
    isLoading.value = false;
  }
};

const tambahDusun = () => form.value.dusun.push('');
const hapusDusun = (index) => form.value.dusun.splice(index, 1);

const tambahPerangkat = () => form.value.perangkat_desa.push({ nama: '', jabatan: '' });
const hapusPerangkat = (index) => form.value.perangkat_desa.splice(index, 1);

onMounted(() => {
  fetchKonten();
});
</script>