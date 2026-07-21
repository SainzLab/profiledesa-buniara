<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
    
    <!-- ==================== POP-UP NOTIFIKASI (TOAST) ==================== -->
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
        <!-- Icon Success -->
        <div v-if="notif.type === 'success'" class="p-2 bg-emerald-100 rounded-xl text-emerald-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <!-- Icon Error -->
        <div v-else-if="notif.type === 'error'" class="p-2 bg-red-100 rounded-xl text-red-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <!-- Content Text -->
        <div class="flex-1 pt-0.5">
          <h4 class="text-sm font-bold" :class="{
            'text-emerald-900': notif.type === 'success',
            'text-red-900': notif.type === 'error'
          }">
            {{ notif.title }}
          </h4>
          <p class="text-xs text-gray-600 mt-1 leading-relaxed">
            {{ notif.message }}
          </p>
        </div>

        <!-- Close Button -->
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
    <!-- ================================================================== -->

    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-4 text-center text-3xl font-extrabold text-gray-900">
        Panel Admin
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Sistem Informasi Desa Buniara
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
      <div class="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
        <form class="space-y-6" @submit.prevent="handleLogin">
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email atau Username
            </label>
            <div class="mt-1">
              <input 
                id="email" 
                name="email" 
                type="text" 
                required 
                v-model="loginForm.email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors" 
                placeholder="admin@buniara.desa.id"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Kata Sandi
            </label>
            <div class="mt-1">
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                v-model="loginForm.password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors" 
                placeholder="••••••••"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
                v-model="loginForm.rememberMe"
                class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer" 
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900 cursor-pointer">
                Ingat saya
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
                Lupa sandi?
              </a>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoading ? 'Memproses...' : 'Masuk ke Sistem' }}
            </button>
          </div>
        </form>
        
        <div class="mt-6 border-t border-gray-100 pt-6">
          <router-link to="/" class="flex justify-center items-center text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Kembali ke Beranda
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const router = useRouter();
const isLoading = ref(false);

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

const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false
});

const handleLogin = async () => {
  isLoading.value = true;
  
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginForm.email,
        password: loginForm.password
      })
    });

    const data = await response.json();

    if (data.success) {
      const isAktif = data.user.is_aktif === 1 || data.user.is_aktif === true;

      if (!isAktif) {
        showNotif('error', 'Akses Ditolak', 'Akun Anda telah dinonaktifkan oleh Administrator. Silakan hubungi pengelola.');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        isLoading.value = false;
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      showNotif('success', 'Login Berhasil!', `Selamat datang kembali, ${data.user.nama}. Mengalihkan...`);
      
      setTimeout(() => {
        router.push('/admin'); 
      }, 800);

    } else {
      showNotif('error', 'Gagal Masuk', data.message || 'Kredensial yang Anda masukkan salah.');
      isLoading.value = false;
    }
  } catch (error) {
    console.error('Error saat login:', error);
    showNotif('error', 'Kesalahan Sistem', 'Terjadi kesalahan pada jaringan atau server.');
    isLoading.value = false;
  }
};
</script>