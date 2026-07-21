<template>
  <div class="max-w-4xl">
    
    <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8">
      
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Headline Utama</label>
        <input type="text" 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900" 
               value="Pesona Alam & Budaya Desa Buniara" />
        <p class="mt-2 text-sm text-gray-500">Teks besar yang menarik perhatian. Maksimal 60 karakter disarankan.</p>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Sub-headline (Deskripsi Singkat)</label>
        <textarea rows="3" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 resize-none">Temukan keharmonisan alam, kekayaan budaya lokal, dan keramahan warga di jantung kawasan konservasi. Jelajahi pengalaman otentik yang tak terlupakan.</textarea>
        <p class="mt-2 text-sm text-gray-500">Penjelasan singkat yang mendukung headline. Tampil di bawah headline utama.</p>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar Latar Belakang</label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg relative overflow-hidden group cursor-pointer hover:border-emerald-500 transition-colors">
          
          <img src="https://dummyimage.com/1200x400/4d7c0f/ffffff&text=Pemandangan+Sawah+Buniara" alt="Preview" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
          
          <div class="relative space-y-1 text-center py-12">
            <div class="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
               <svg class="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            </div>
            <div class="flex text-sm text-gray-900 font-bold justify-center">
              <span>Klik untuk mengganti gambar</span>
            </div>
            <p class="text-xs text-gray-800 font-medium">atau seret dan lepas file ke area ini</p>
            <p class="text-xs text-gray-800 font-medium">Format: JPG, PNG. Ukuran rasio 16:9 disarankan.</p>
          </div>
        </div>
      </div>

    </div>

    <div class="flex justify-end space-x-4 border-t border-gray-200 pt-6 mt-6">
      <button class="px-6 py-2.5 border border-emerald-800 text-emerald-800 font-semibold rounded-full hover:bg-emerald-50 transition-colors flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
        Pratinjau
      </button>
      <button class="px-6 py-2.5 bg-[#064e3b] text-white font-semibold rounded-full hover:bg-emerald-900 transition-colors flex items-center shadow-md">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
        Simpan Perubahan
      </button>
    </div>

  </div>
</template>