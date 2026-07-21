<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-center mb-8">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Manajemen Wisata</h2>
        <p class="text-sm text-gray-500 mt-1">Kelola destinasi wisata dan produk unggulan Desa Buniara.</p>
      </div>
      <button class="bg-[#0f644e] hover:bg-[#0a4d3c] text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center transition-colors">
        <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        Tambah Konten Baru
      </button>
    </div>

    <div class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-3 items-center mb-8">
      <div class="relative flex-1 min-w-[250px]">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" placeholder="Cari nama wisata" class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none">
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in daftarWisata" :key="item.id" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
        
        <div class="relative h-48 bg-gray-200">
          <img :src="item.image" :alt="item.judul" class="w-full h-full object-cover" />
          <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-800">
            {{ item.kategori }}
          </div>
        </div>

        <div class="p-5 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-bold text-gray-900 leading-tight">{{ item.judul }}</h3>
            
            <div class="flex flex-col items-center">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="item.isPublished" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0f644e]"></div>
              </label>
              <span class="text-[10px] text-gray-500 font-medium mt-1">{{ item.isPublished ? 'Publik' : 'Draft' }}</span>
            </div>
          </div>
          
          <p class="text-sm text-gray-500 line-clamp-3 mb-4">
            {{ item.deskripsi }}
          </p>

          <div class="mt-auto pt-4 border-t border-gray-100 flex justify-end space-x-3 text-gray-400">
            <button class="hover:text-gray-600 transition-colors" title="Lihat">
              <svg v-if="item.isPublished" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </button>
            <button class="hover:text-blue-600 transition-colors" title="Edit">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
            <button class="hover:text-red-600 transition-colors" title="Hapus">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const daftarWisata = ref([
  {
    id: 1,
    judul: 'Curug Wangun',
    kategori: 'Wisata Alam',
    deskripsi: 'Air terjun bertingkat yang menawarkan pemandangan alam asri dan kolam alami yang menyegarkan.',
    isPublished: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  {
    id: 2,
    judul: 'Terasering Sawah Khas',
    kategori: 'Wisata Alam',
    deskripsi: 'Hamparan sawah berundak yang indah, cocok untuk fotografi dan jalan santai menghirup udara segar pagi hari.',
    isPublished: false,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]);
</script>