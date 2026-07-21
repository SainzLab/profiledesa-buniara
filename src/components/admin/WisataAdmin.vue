<template>
  <div class="max-w-7xl mx-auto relative min-h-screen">
    
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform translate-y-[-20px] opacity-0" enter-to-class="transform translate-y-0 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100" leave-to-class="transform translate-y-[-20px] opacity-0">
      <div v-if="notif.show" :class="`fixed top-6 right-6 px-6 py-3.5 rounded-xl shadow-lg border z-[100] flex items-center space-x-3 ${notif.type === 'success' ? 'bg-white border-emerald-100' : 'bg-white border-red-100'}`">
        <div :class="`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${notif.type === 'success' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`">
          <svg v-if="notif.type === 'success'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <p :class="`text-sm font-semibold ${notif.type === 'success' ? 'text-emerald-900' : 'text-red-900'}`">{{ notif.message }}</p>
      </div>
    </transition>

    <div class="flex justify-between items-center mb-8">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Manajemen Wisata</h2>
        <p class="text-sm text-gray-500 mt-1">Kelola destinasi wisata Desa Buniara.</p>
      </div>
      <button @click="bukaModalTambah" class="bg-[#0f644e] hover:bg-[#0a4d3c] text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center transition-all shadow-sm hover:shadow">
        <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        Tambah Konten Baru
      </button>
    </div>

    <div class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-3 items-center mb-8">
      <div class="relative flex-1 min-w-[250px]">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" placeholder="Cari nama wisata" class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:outline-none focus:border-gray-400 text-gray-900">
      </div>
    </div>

    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <svg class="animate-spin h-10 w-10 text-[#0f644e] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      <p class="text-gray-500 font-medium">Memuat data wisata...</p>
    </div>

    <div v-else-if="daftarWisata.length === 0" class="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <p class="text-gray-500 font-medium">Belum ada data wisata.</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="item in daftarWisata" :key="item.id" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-all h-full group">
        
        <div class="relative w-full pt-[75%] bg-gray-100 flex-shrink-0 overflow-hidden">
          <img :src="item.image" :alt="item.judul" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#0f644e] shadow-sm">
            {{ item.kategori }}
          </div>
        </div>

        <div class="p-5 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-3 gap-2">
            <h3 class="text-lg font-bold text-gray-900 leading-tight line-clamp-2 flex-grow">{{ item.judul }}</h3>
            
            <div class="flex flex-col items-center flex-shrink-0">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="item.isPublished" @change="toggleStatus(item)" class="sr-only peer">
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0f644e]"></div>
              </label>
              <span class="text-[10px] text-gray-500 font-semibold mt-1">{{ item.isPublished ? 'Publik' : 'Draft' }}</span>
            </div>
          </div>
          
          <p class="text-sm text-gray-500 line-clamp-3 mb-5">
            {{ item.deskripsi }}
          </p>

          <div class="mt-auto pt-4 border-t border-gray-100 flex justify-end space-x-2">
            <button @click="bukaModalEdit(item)" class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
            <button @click="bukaModalHapus(item)" class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity">
      <div class="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col transform transition-all">
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Konten Wisata' : 'Tambah Konten Wisata Baru' }}</h3>
          <button @click="tutupModal" class="text-gray-400 hover:text-gray-600 bg-white rounded-full p-1 hover:bg-gray-100 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div class="overflow-y-auto p-6">
          <form @submit.prevent="simpanWisata" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Judul Wisata</label>
              <input type="text" v-model="formWisata.judul" required class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm transition-all focus:outline-none focus:outline-none focus:border-gray-400 text-gray-900">
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Kategori</label>
              <select v-model="formWisata.kategori" required class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm transition-all focus:outline-none focus:outline-none focus:border-gray-400 text-gray-900">
                <option value="" disabled>Pilih Kategori</option>
                <option value="Wisata Alam">Wisata Alam</option>
                <option value="Wisata Buatan">Wisata Buatan</option>
                <option value="Wisata Budaya">Wisata Budaya</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Deskripsi Lengkap</label>
              <textarea v-model="formWisata.deskripsi" required rows="4" class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm transition-all focus:outline-none focus:outline-none focus:border-gray-400 text-gray-900"></textarea>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1.5">Gambar Banner (Disarankan Rasio 4:3)</label>
              <div v-if="imagePreview" class="mb-4 relative w-full pt-[50%] sm:pt-[40%] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 group">
                <img :src="imagePreview" class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button type="button" @click="hapusPreview" class="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-600 shadow-sm flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    Hapus Foto
                  </button>
                </div>
              </div>
              <input type="file" @change="handleFileUpload" accept="image/jpeg, image/png, image/webp" class="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-[#0f644e] hover:file:bg-emerald-100 border border-gray-300 rounded-xl p-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#0f644e]/20">
              <p class="text-xs text-gray-500 mt-2">Maksimal 40MB. Format: JPG, PNG, WEBP.</p>
            </div>

            <div class="mt-8 flex justify-end space-x-3 pt-5 border-t border-gray-100">
              <button type="button" @click="tutupModal" class="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">Batal</button>
              <button type="submit" :disabled="isSubmitting" class="px-5 py-2.5 text-sm font-semibold text-white bg-[#0f644e] rounded-xl hover:bg-[#0a4d3c] disabled:opacity-70 disabled:cursor-not-allowed flex items-center transition-colors shadow-sm">
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                {{ isSubmitting ? 'Menyimpan...' : 'Simpan Konten' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-opacity">
      <div class="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl transform transition-all p-6 text-center">
        <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 border-8 border-red-50/50">
          <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        
        <h3 class="text-xl font-bold text-gray-900 mb-2">Hapus Konten Wisata</h3>
        <p class="text-sm text-gray-500 mb-6">
          Apakah Anda yakin ingin menghapus <span class="font-bold text-gray-900">"{{ itemToDelete?.judul }}"</span>? Tindakan ini tidak dapat dibatalkan.
        </p>
        
        <div class="flex justify-center space-x-3">
          <button @click="tutupModalHapus" :disabled="isDeleting" class="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-70">
            Batal
          </button>
          <button @click="konfirmasiHapus" :disabled="isDeleting" class="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 disabled:opacity-70 flex items-center justify-center transition-colors shadow-sm">
            <svg v-if="isDeleting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            {{ isDeleting ? 'Menghapus...' : 'Ya, Hapus' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const daftarWisata = ref([]);
const isLoading = ref(false);
const showModal = ref(false);
const isEditing = ref(false);
const isSubmitting = ref(false);
const imagePreview = ref('');

const showDeleteModal = ref(false);
const isDeleting = ref(false);
const itemToDelete = ref(null);

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
  }, 3000); 
};

const formWisata = reactive({
  id: null,
  judul: '',
  kategori: '',
  deskripsi: '',
  image: '',
  isPublished: true
});

const resetForm = () => {
  formWisata.id = null;
  formWisata.judul = '';
  formWisata.kategori = '';
  formWisata.deskripsi = '';
  formWisata.image = '';
  formWisata.isPublished = true;
  imagePreview.value = '';
};

const bukaModalTambah = () => {
  resetForm();
  isEditing.value = false;
  showModal.value = true;
};

const bukaModalEdit = (item) => {
  formWisata.id = item.id;
  formWisata.judul = item.judul;
  formWisata.kategori = item.kategori;
  formWisata.deskripsi = item.deskripsi;
  formWisata.image = ''; 
  formWisata.isPublished = item.isPublished;
  imagePreview.value = item.image; 
  
  isEditing.value = true;
  showModal.value = true;
};

const tutupModal = () => {
  showModal.value = false;
};

const hapusPreview = () => {
  imagePreview.value = '';
  formWisata.image = '';
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 40 * 1024 * 1024) {
    showNotification("Ukuran file maksimal adalah 40MB!", "error");
    event.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target.result;
    formWisata.image = e.target.result;
  };
  reader.readAsDataURL(file);
};

const bukaModalHapus = (item) => {
  itemToDelete.value = item;
  showDeleteModal.value = true;
};

const tutupModalHapus = () => {
  showDeleteModal.value = false;
  setTimeout(() => {
    itemToDelete.value = null;
  }, 300);
};

const fetchWisata = async () => {
  isLoading.value = true;
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/wisata`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const result = await response.json();
    if (result.success) {
      daftarWisata.value = result.data.map(item => ({
        ...item,
        isPublished: item.is_published === 1
      }));
    } else {
      showNotification(result.message || 'Gagal mengambil data', 'error');
    }
  } catch (error) {
    console.error('Error:', error);
    showNotification('Terjadi kesalahan jaringan saat mengambil data', 'error');
  } finally {
    isLoading.value = false;
  }
};

const simpanWisata = async () => {
  isSubmitting.value = true;
  try {
    const token = localStorage.getItem('token');
    const url = isEditing.value 
      ? `${API_BASE_URL}/wisata/${formWisata.id}` 
      : `${API_BASE_URL}/wisata`;
      
    const method = isEditing.value ? 'PUT' : 'POST';

    if (!isEditing.value && !formWisata.image) {
      showNotification("Gambar wajib diunggah untuk wisata baru!", "error");
      isSubmitting.value = false;
      return;
    }

    const response = await fetch(url, {
      method: method,
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formWisata)
    });

    const result = await response.json();
    
    if (result.success) {
      tutupModal();
      showNotification('Berhasil! Data wisata telah disimpan.');
      fetchWisata(); 
    } else {
      showNotification(`Gagal menyimpan: ${result.message}`, 'error');
    }
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
    showNotification("Terjadi kesalahan pada server saat menyimpan data.", 'error');
  } finally {
    isSubmitting.value = false;
  }
};

const toggleStatus = async (item) => {
  try {
    const token = localStorage.getItem('token'); 
    const response = await fetch(`${API_BASE_URL}/wisata/${item.id}/status`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ is_published: item.isPublished ? 1 : 0 })
    });
    
    const result = await response.json();
    if (result.success) {
      showNotification(`Status publikasi "${item.judul}" diperbarui.`);
    } else {
      showNotification("Gagal merubah status: " + result.message, 'error');
      item.isPublished = !item.isPublished; 
    }
  } catch (error) {
    console.error("Error:", error);
    showNotification("Terjadi kesalahan jaringan.", 'error');
    item.isPublished = !item.isPublished; 
  }
};

const konfirmasiHapus = async () => {
  if (!itemToDelete.value) return;
  
  isDeleting.value = true;
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/wisata/${itemToDelete.value.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    
    if (result.success) {
      showNotification('Data wisata berhasil dihapus.');
      daftarWisata.value = daftarWisata.value.filter(item => item.id !== itemToDelete.value.id);
      tutupModalHapus();
    } else {
      showNotification(result.message, 'error');
    }
  } catch (error) {
    console.error("Gagal menghapus:", error);
    showNotification("Terjadi kesalahan jaringan saat menghapus.", 'error');
  } finally {
    isDeleting.value = false;
  }
};

onMounted(() => {
  fetchWisata();
});
</script>