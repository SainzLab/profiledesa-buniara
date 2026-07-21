<template>
  <div class="flex h-screen bg-gray-50 font-sans">

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
        <button 
          @click="handleLogout"
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
      <header class="h-15 bg-white border-b border-gray-200 flex items-center justify-end px-8 space-x-6">
        <button class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
        
        <div class="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <div class="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold">
            A
          </div>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-8">
        <slot />
      </div>
    </main>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = () => {
  if (confirm('Apakah Anda yakin ingin keluar dari Panel Admin?')) {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    router.push('/login'); 
  }
};
</script>