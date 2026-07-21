<template>
  <div class="max-w-4xl mx-auto pb-12">
    
    <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
      <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Beranda (Hero)</h3>
      
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Headline Utama</label>
        <input type="text" 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" 
               value="Pesona Alam & Budaya Desa Buniara" />
        <p class="mt-2 text-sm text-gray-500">Teks besar yang menarik perhatian. Maksimal 60 karakter disarankan.</p>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Sub-headline (Deskripsi Singkat)</label>
        <textarea rows="3" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 resize-none">Temukan keharmonisan alam, kekayaan budaya lokal, dan keramahan warga di jantung kawasan konservasi. Jelajahi pengalaman otentik yang tak terlupakan.</textarea>
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
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
      <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Tentang Kami</h3>
      
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Judul Bagian</label>
        <input type="text" 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" 
               value="Surga Tersembunyi di Subang" />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Paragraf 1</label>
        <textarea rows="3" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 resize-none">Desa Buniara, terletak di Kecamatan Tanjungsiang, Kabupaten Subang, adalah surga tersembunyi yang menawarkan keindahan alam yang asri. Dikelilingi oleh hutan lindung yang rindang, desa ini menjadi tempat yang sempurna untuk melarikan diri dari hiruk-pikuk kota.</textarea>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Paragraf 2</label>
        <textarea rows="3" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 resize-none">Pemandangan desa ini didominasi oleh kemegahan Gunung Canggah yang menjulang setinggi 2.073 mdpl, memberikan udara segar dan pemandangan yang memukau setiap harinya.</textarea>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar 1 (Sawah)</label>
          <div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-emerald-500 bg-gray-50 h-32 items-center text-center">
            <span class="text-sm font-medium text-gray-500">Upload Gambar Sawah</span>
          </div>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar 2 (Mata Air)</label>
          <div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-emerald-500 bg-gray-50 h-32 items-center text-center">
            <span class="text-sm font-medium text-gray-500">Upload Gambar Mata Air</span>
          </div>
        </div>
      </div>

      <!-- DAFTAR WILAYAH DUSUN (Format Baru) -->
      <div class="mb-2">
        <div class="flex justify-between items-center mb-4">
          <label class="block text-sm font-semibold text-gray-700">Daftar Wilayah Dusun</label>
          <button class="text-sm text-emerald-600 font-semibold hover:text-emerald-700">+ Tambah Dusun</button>
        </div>
        <div class="space-y-3">
          <!-- Dusun 1 -->
          <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
            <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Babakan Cilungsir" placeholder="Nama Dusun" />
            <button class="text-red-500 hover:text-red-700 p-2" title="Hapus"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
          </div>
          <!-- Dusun 2 -->
          <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
            <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Campaka" placeholder="Nama Dusun" />
            <button class="text-red-500 hover:text-red-700 p-2" title="Hapus"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
          </div>
          <!-- Dusun 3 -->
          <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
            <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Wangun" placeholder="Nama Dusun" />
            <button class="text-red-500 hover:text-red-700 p-2" title="Hapus"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
      <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Administrasi & Kontak</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Peta Area -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">URL Google Maps (Embed)</label>
          <textarea rows="4" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900 text-sm resize-none mb-2" 
                    placeholder='<iframe src="..."></iframe>'></textarea>
          <div class="bg-gray-100 h-40 rounded-lg flex items-center justify-center border border-gray-200">
             <span class="text-sm text-gray-400">Pratinjau Peta</span>
          </div>
        </div>

        <!-- Foto Kantor Desa -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Foto Kantor Desa</label>
          <div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-emerald-500 bg-gray-50 h-full min-h-[200px] flex-col items-center justify-center text-center">
            <svg class="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span class="text-sm font-medium text-gray-500">Klik untuk upload foto kantor</span>
          </div>
        </div>
      </div>

      <!-- Info Kontak Grid -->
      <h4 class="text-md font-semibold text-gray-800 mb-4">Informasi Utama</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Alamat</label>
          <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" value="Jl. Raya Buniara No. 1, Tanjungsiang." />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Jam Operasional</label>
          <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" value="Senin-Jumat, 08:00 - 16:00 WIB." />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Layanan Utama</label>
          <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" value="Administrasi, Kependudukan." />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Kontak</label>
          <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 text-gray-900" value="+62 812-XXXX-XXXX" />
        </div>
      </div>

      <!-- Perangkat Desa -->
      <div class="flex justify-between items-center mb-4">
        <h4 class="text-md font-semibold text-gray-800">Perangkat Desa</h4>
        <button class="text-sm text-emerald-600 font-semibold hover:text-emerald-700">+ Tambah Personel</button>
      </div>
      <div class="space-y-3">
        <!-- Row 1 -->
        <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="H. Ahmad" placeholder="Nama" />
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Kepala Desa" placeholder="Jabatan" />
          <button class="text-red-500 hover:text-red-700 p-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
        </div>
        <!-- Row 2 -->
        <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Siti Aminah" placeholder="Nama" />
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Sekdes" placeholder="Jabatan" />
          <button class="text-red-500 hover:text-red-700 p-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
        </div>
        <!-- Row 3 -->
        <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Budi Santoso" placeholder="Nama" />
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Kaur Keuangan" placeholder="Jabatan" />
          <button class="text-red-500 hover:text-red-700 p-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
        </div>
        <!-- Row 4 -->
        <div class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Ridwan W." placeholder="Nama" />
          <input type="text" class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm" value="Kasi Pelayanan" placeholder="Jabatan" />
          <button class="text-red-500 hover:text-red-700 p-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
        </div>
      </div>

    </div>

    <!-- ACTION BUTTONS -->
    <div class="flex justify-end space-x-4 pt-4 mt-8 mb-4">
      <button class="px-6 py-2.5 border border-emerald-800 text-emerald-800 font-semibold rounded-full hover:bg-emerald-50 transition-colors flex items-center bg-white">
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