<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center text-emerald-700">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      </div>
      <h2 class="mt-4 text-center text-3xl font-extrabold text-gray-900">
        Panel Admin
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Sistem Informasi Desa Buniara
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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

const router = useRouter();
const isLoading = ref(false);

const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false
});

const handleLogin = () => {
  isLoading.value = true;
  
  setTimeout(() => {
    isLoading.value = false;
    
    console.log('Data Login:', loginForm);
    
    alert(`Simulasi Login Berhasil!\nEmail: ${loginForm.email}`);
  }, 1500);
};
</script>