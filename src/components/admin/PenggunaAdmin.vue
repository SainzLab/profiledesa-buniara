<template>
  <div class="max-w-7xl mx-auto relative">
    
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
        class="fixed top-5 right-5 z-[200] max-w-md w-full bg-white rounded-2xl shadow-2xl border p-4 flex items-start space-x-4 transition-all duration-300"
        :class="{
          'border-emerald-200 bg-emerald-50/30': notif.type === 'success',
          'border-red-200 bg-red-50/30': notif.type === 'error',
          'border-blue-200 bg-blue-50/30': notif.type === 'info'
        }"
      >

        <div v-if="notif.type === 'success'" class="p-2 bg-emerald-100 rounded-xl text-emerald-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div v-else-if="notif.type === 'error'" class="p-2 bg-red-100 rounded-xl text-red-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div v-else class="p-2 bg-blue-100 rounded-xl text-blue-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div class="flex-1 pt-0.5">
          <h4 class="text-sm font-bold" :class="{
            'text-emerald-900': notif.type === 'success',
            'text-red-900': notif.type === 'error',
            'text-blue-900': notif.type === 'info'
          }">
            {{ notif.title }}
          </h4>
          <p class="text-xs text-gray-600 mt-1 leading-relaxed">
            {{ notif.message }}
          </p>
        </div>

        <button 
          @click="notif.show = false" 
          class="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
  
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Manajemen Pengguna</h2>
        <p class="text-sm text-gray-500 mt-1">Kelola akses administrator dan staf pengelola website.</p>
      </div>
      <button @click="bukaModalTambah" class="bg-[#0f644e] hover:bg-[#0a4d3c] text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center transition-colors shadow-sm">
        <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        Tambah Pengguna
      </button>
    </div>

    <div class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-3 items-center mb-6">
      <div class="relative flex-1 min-w-[250px]">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" placeholder="Cari nama atau email pengguna..." class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 text-gray-900">
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
              <th class="px-6 py-4">Pengguna</th>
              <th class="px-6 py-4">Peran</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-if="isLoading">
              <td colspan="4" class="px-6 py-8 text-center text-gray-500 text-sm">
                <svg class="animate-spin h-6 w-6 text-emerald-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Memuat data pengguna...
              </td>
            </tr>
            <tr v-else-if="daftarPengguna.length === 0">
              <td colspan="4" class="px-6 py-8 text-center text-gray-500 text-sm">
                Belum ada data pengguna.
              </td>
            </tr>
            <tr v-else v-for="user in daftarPengguna" :key="user.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold uppercase">
                      {{ user.nama.charAt(0) }}
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ user.nama }}</div>
                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-900 font-medium">{{ user.role }}</span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="user.isAktif" @change="toggleStatus(user)" class="sr-only peer">
                  <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0f644e]"></div>
                </label>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-center space-x-2">
                <button @click="bukaModalEdit(user)" class="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors" title="Edit Pengguna">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                </button>
                <button @click="hapusPengguna(user.id, user.nama)" class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors" title="Hapus Pengguna">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
        <div 
          class="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl transform transition-all scale-100"
          @click.stop
        >
          <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-900">{{ isEditing ? 'Edit Pengguna' : 'Tambah Pengguna Baru' }}</h3>
            <button @click="tutupModal" class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-200">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <form @submit.prevent="simpanPengguna" class="p-6 space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input type="text" v-model="formUser.nama" required class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-shadow focus:outline-none focus:border-gray-400 text-gray-900">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" v-model="formUser.email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-shadow focus:outline-none focus:border-gray-400 text-gray-900">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Peran Akses</label>
              <select v-model="formUser.role" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-shadow focus:outline-none focus:border-gray-400 text-gray-900">
                <option value="admin">Admin</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi 
                <span v-if="isEditing" class="text-xs font-normal text-gray-400">(Kosongkan jika tidak diubah)</span>
              </label>
              <input type="password" v-model="formUser.password" :required="!isEditing" placeholder="••••••••" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-shadow focus:outline-none focus:border-gray-400 text-gray-900">
            </div>

            <div class="mt-6 flex justify-end space-x-3 pt-2">
              <button type="button" @click="tutupModal" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Batal</button>
              <button type="submit" :disabled="isSubmitting" class="px-4 py-2 text-sm font-medium text-white bg-[#0f644e] rounded-lg hover:bg-[#0a4d3c] disabled:opacity-70 flex items-center transition-colors">
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                {{ isSubmitting ? 'Menyimpan...' : 'Simpan Data' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
    notifTimeout = setTimeout(() => { notif.value.show = false; }, duration);
  }
};

const daftarPengguna = ref([]);
const isLoading = ref(false);
const showModal = ref(false);
const isEditing = ref(false);
const isSubmitting = ref(false);

const formUser = reactive({
  id: null,
  nama: '',
  email: '',
  password: '',
  role: 'admin'
});

const resetForm = () => {
  formUser.id = null;
  formUser.nama = '';
  formUser.email = '';
  formUser.password = '';
  formUser.role = 'admin';
};

const bukaModalTambah = () => {
  resetForm();
  isEditing.value = false;
  showModal.value = true;
};

const bukaModalEdit = (user) => {
  formUser.id = user.id;
  formUser.nama = user.nama;
  formUser.email = user.email;
  formUser.role = user.role;
  formUser.password = ''; 
  isEditing.value = true;
  showModal.value = true;
};

const tutupModal = () => {
  showModal.value = false;
};

const fetchPengguna = async () => {
  isLoading.value = true;
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_BASE_URL}/pengguna`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const result = await response.json();
    
    if (result.success) {
      daftarPengguna.value = result.data.map(user => ({
        ...user,
        isAktif: user.is_aktif === 1 
      }));
    } else {
      showNotif('error', 'Gagal Memuat Data', result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    showNotif('error', 'Kesalahan Sistem', 'Gagal terhubung ke server saat memuat data pengguna.');
  } finally {
    isLoading.value = false;
  }
};

const simpanPengguna = async () => {
  isSubmitting.value = true;
  try {
    const token = localStorage.getItem('token');
    const url = isEditing.value 
      ? `${API_BASE_URL}/pengguna/${formUser.id}` 
      : `${API_BASE_URL}/pengguna`;
      
    const method = isEditing.value ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method: method,
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formUser)
    });

    const result = await response.json();
    
    if (result.success) {
      tutupModal();
      showNotif('success', 'Berhasil Disimpan!', 'Data pengguna telah berhasil diperbarui.');
      fetchPengguna(); 
    } else {
      showNotif('error', 'Gagal Menyimpan', result.message || 'Silakan periksa kembali isian form Anda.');
    }
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
    showNotif('error', 'Kesalahan Server', 'Terjadi kesalahan pada server saat menyimpan data.');
  } finally {
    isSubmitting.value = false;
  }
};

const toggleStatus = async (user) => {
  try {
    const token = localStorage.getItem('token'); 
    const response = await fetch(`${API_BASE_URL}/pengguna/${user.id}/status`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ is_aktif: user.isAktif ? 1 : 0 })
    });
    
    const result = await response.json();
    if (result.success) {
      showNotif('success', 'Status Diperbarui', `Status akses untuk ${user.nama} berhasil diubah.`);
    } else {
      showNotif('error', 'Gagal Mengubah Status', result.message);
      user.isAktif = !user.isAktif; 
    }
  } catch (error) {
    console.error("Error:", error);
    showNotif('error', 'Kesalahan Jaringan', 'Gagal terhubung ke server.');
    user.isAktif = !user.isAktif;
  }
};

const hapusPengguna = async (id, nama) => {
  if (confirm(`Apakah Anda yakin ingin menghapus pengguna "${nama}" secara permanen?`)) {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/pengguna/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      
      if (result.success) {
        showNotif('success', 'Berhasil Dihapus', `Pengguna ${nama} telah dihapus dari sistem.`);
        daftarPengguna.value = daftarPengguna.value.filter(u => u.id !== id);
      } else {
        showNotif('error', 'Gagal Menghapus', result.message);
      }
    } catch (error) {
      console.error("Gagal menghapus:", error);
      showNotif('error', 'Kesalahan Server', 'Terjadi masalah teknis saat mencoba menghapus data.');
    }
  }
};

onMounted(() => {
  fetchPengguna();
});
</script>