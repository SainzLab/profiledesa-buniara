<template>
  <div class="flex h-screen bg-gray-50 font-sans relative overflow-hidden">
    
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
        <div class="flex-1 pt-0.5">
          <h4 class="text-sm font-bold" :class="{ 'text-emerald-900': notif.type === 'success', 'text-red-900': notif.type === 'error' }">
            {{ notif.title }}
          </h4>
          <p class="text-xs text-gray-600 mt-1 leading-relaxed">
            {{ notif.message }}
          </p>
        </div>
      </div>
    </Transition>

    <!-- ==================== MODAL KONFIRMASI LOGOUT ==================== -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showLogoutModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[150] p-4">
        <div 
          class="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl transform transition-all scale-100"
          @click.stop
        >
          <div class="p-6 text-center">
            <div class="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-5">
              <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Konfirmasi Keluar</h3>
            <p class="text-sm text-gray-500 mb-6">Apakah Anda yakin ingin mengakhiri sesi dan keluar dari Panel Admin?</p>
            
            <div class="flex justify-center space-x-3">
              <button 
                @click="showLogoutModal = false" 
                class="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Batal
              </button>
              <button 
                @click="executeLogout" 
                class="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors shadow-sm shadow-red-200"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- ================================================================== -->

    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div class="h-20 flex items-center px-6 border-b border-transparent">
          <div>
            <h1 class="text-xl font-bold text-emerald-900 leading-tight">Buniara</h1>
            <p class="text-xs text-gray-500 font-medium">Admin Portal</p>
          </div>
        </div>

        <nav class="mt-6 px-4 space-y-2">
          <router-link to="/admin/konten" :class="[$route.path.startsWith('/admin/konten') ? 'bg-[#a7f3d0] text-emerald-900 font-semibold' : 'font-medium text-gray-600 hover:bg-gray-50', 'flex items-center px-4 py-3 text-sm rounded-xl transition-colors']">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            Konten Web
          </router-link>

          <router-link to="/admin/laporan" :class="[$route.path.startsWith('/admin/laporan') ? 'bg-[#a7f3d0] text-emerald-900 font-semibold' : 'font-medium text-gray-600 hover:bg-gray-50', 'flex items-center px-4 py-3 text-sm rounded-xl transition-colors']">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Laporan Warga
          </router-link>

          <router-link to="/admin/wisata" :class="[$route.path.startsWith('/admin/wisata') ? 'bg-[#a7f3d0] text-emerald-900 font-semibold' : 'font-medium text-gray-600 hover:bg-gray-50', 'flex items-center px-4 py-3 text-sm rounded-xl transition-colors']">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Wisata
          </router-link>

          <router-link to="/admin/umkm" :class="[$route.path.startsWith('/admin/umkm') ? 'bg-[#a7f3d0] text-emerald-900 font-semibold' : 'font-medium text-gray-600 hover:bg-gray-50', 'flex items-center px-4 py-3 text-sm rounded-xl transition-colors']">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            UMKM
          </router-link>

          <router-link to="/admin/pengguna" :class="[$route.path.startsWith('/admin/pengguna') ? 'bg-[#a7f3d0] text-emerald-900 font-semibold' : 'font-medium text-gray-600 hover:bg-gray-50', 'flex items-center px-4 py-3 text-sm rounded-xl transition-colors']">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Pengguna
          </router-link>
        </nav>
      </div>

      <div class="p-6">
        <!-- Tombol Keluar sekarang memanggil Modal, bukan alert bawaan -->
        <button 
          @click="showLogoutModal = true"
          class="w-full flex justify-center items-center px-4 py-2 border border-red-200 text-sm font-medium rounded-lg text-red-600 bg-white hover:bg-red-50 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Keluar
        </button>
      </div>
    </aside>

    <main class="flex-1 flex flex-col overflow-hidden">
      <header class="h-15 bg-white border-b border-gray-200 flex items-center justify-end px-8 space-x-6 min-h-[60px]">
        <button class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
        
        <div class="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <div class="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold">
            A
          </div>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-8 relative">
        <slot />
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showLogoutModal = ref(false); 

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

const executeLogout = () => {
  showLogoutModal.value = false;
  
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  showNotif('success', 'Berhasil Keluar', 'Sesi Anda telah diakhiri. Mengalihkan...', 1000);
  
  setTimeout(() => {
    router.push('/login'); 
  }, 800);
};
</script>