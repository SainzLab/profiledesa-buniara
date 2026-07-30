<template>
  <div class="max-w-7xl mx-auto relative min-h-screen pb-16">
    
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
        <h2 class="text-2xl font-bold text-gray-900">Manajemen UMKM</h2>
        <p class="text-sm text-gray-500 mt-1">Kelola produk unggulan, galeri foto, dan informasi lengkap usaha Desa Buniara.</p>
      </div>
      <button @click="bukaModalTambah" class="bg-[#0f644e] hover:bg-[#0a4d3c] text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center transition-all shadow-sm hover:shadow">
        <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        Tambah UMKM Baru
      </button>
    </div>

    <div class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-3 items-center mb-8">
      <div class="relative flex-1 min-w-[250px]">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" v-model="searchQuery" placeholder="Cari nama UMKM atau pemilik..." class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 text-gray-900">
      </div>
    </div>

    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <svg class="animate-spin h-10 w-10 text-[#0f644e] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      <p class="text-gray-500 font-medium">Memuat data UMKM...</p>
    </div>

    <div v-else-if="filteredUmkm.length === 0" class="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <p class="text-gray-500 font-medium">Belum ada data UMKM atau pencarian tidak ditemukan.</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="item in filteredUmkm" :key="item.id" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-all h-full group">
        
        <div class="relative w-full pt-[65%] bg-gray-100 flex-shrink-0 overflow-hidden">
            <img 
                v-if="item.image || item.gambar_hero" 
                :src="getImageUrl(item.image || item.gambar_hero)" 
                :alt="item.nama_umkm" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div v-else class="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-100">   
               <span class="text-xs font-semibold opacity-70">No Image</span>
            </div>
            <div class="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0f644e] shadow-sm">
               {{ item.kategori || 'UMKM' }}
            </div>
        </div>

        <div class="p-5 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-3 gap-2">
            <div class="flex-grow">
              <h3 class="text-base font-bold text-gray-900 leading-tight line-clamp-1">{{ item.nama_umkm }}</h3>
              <p class="text-xs text-amber-600 font-semibold mt-1 flex items-center">
                <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                {{ item.pemilik || '-' }}
              </p>
            </div>
            
            <div class="flex flex-col items-center flex-shrink-0">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="item.is_published" @change="toggleStatus(item)" class="sr-only peer">
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0f644e]"></div>
              </label>
              <span class="text-[10px] text-gray-500 font-semibold mt-1">{{ item.is_published ? 'Publik' : 'Draft' }}</span>
            </div>
          </div>
          
          <p class="text-xs text-gray-500 line-clamp-2 mb-4">
            {{ item.deskripsi_singkat || item.deskripsi }}
          </p>

          <div class="flex items-center gap-3 text-[11px] text-gray-400 mb-4">
            <span v-if="item.no_wa" class="flex items-center gap-1 text-emerald-600">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              WA Aktif
            </span>
            <span v-if="item.peta_url" class="flex items-center gap-1 text-blue-600">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              Maps
            </span>
          </div>

          <div class="mt-auto pt-3 border-t border-gray-100 flex justify-end space-x-1">
            <button @click="bukaModalEdit(item)" class="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit Data Lengkap">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
            <button @click="bukaModalHapus(item)" class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity">
      <div class="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col transform transition-all">
        
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 flex-shrink-0">
          <h3 class="text-xl font-bold text-gray-900">{{ isEdit ? 'Edit Konten UMKM' : 'Tambah Konten UMKM' }}</h3>
          <button @click="tutupModal" class="text-gray-400 hover:text-gray-600 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div class="overflow-y-auto p-6 md:p-8 flex-grow">
          <form @submit.prevent="simpanUmkm" class="space-y-8">

            <div>
              <h4 class="text-sm font-bold text-gray-800 pb-2 mb-4 border-b border-gray-200">
                Informasi Dasar
              </h4>
              
              <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">
                      Nama UMKM <span class="text-red-500">*</span>
                    </label>
                    <input v-model="form.nama_umkm" type="text" required placeholder="Contoh: Kopi Gunung Canggah" class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900">
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">
                      Nama Pemilik <span class="text-red-500">*</span>
                    </label>
                    <input v-model="form.pemilik" type="text" required placeholder="Contoh: Ibu Diah" class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900">
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">
                      Kategori <span class="text-red-500">*</span>
                    </label>
                    <select v-model="form.kategori" required class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900 bg-white">
                      <option value="" disabled>Pilih Kategori</option>
                      <option value="Makanan & Minuman">Makanan & Minuman</option>
                      <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                      <option value="Jasa">Jasa</option>
                      <option value="Pertanian">Pertanian</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Deskripsi Singkat (Hero Banner) <span class="text-red-500">*</span>
                  </label>
                  <textarea v-model="form.deskripsi_singkat" rows="2" placeholder="Ringkasan pendek yang muncul di bawah judul pada gambar banner atas..." class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900"></textarea>
                  <p class="text-[11px] text-gray-400 mt-1">Teks pendek yang muncul di bawah judul pada gambar banner atas.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Tentang UMKM (Penjelasan Detail)
                  </label>
                  <textarea v-model="form.tentang" rows="5" placeholder="Ceritakan sejarah usaha, keunggulan kualitas produk, dan proses pembuatan di sini..." class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900"></textarea>
                  <p class="text-[11px] text-gray-400 mt-1">Gunakan tombol 'Enter' untuk memisahkan paragraf. Ini adalah isi lengkap cerita usaha Anda.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Deskripsi Umum / Katalog
                  </label>
                  <textarea v-model="form.deskripsi" rows="2" required placeholder="Deskripsi ringkas produk untuk halaman depan..." class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900"></textarea>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    URL Google Maps (Opsional)
                  </label>
                  <input 
                    v-model="form.peta_url" 
                    type="text" 
                    placeholder='<iframe src="https://www.google.com/maps/embed?pb=..."' 
                    class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900 font-mono text-xs"
                  >
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-base font-bold text-gray-900 border-b pb-2 mb-4">Sosial Media</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Nomor WhatsApp (WA)</label>
                  <input v-model="form.no_wa" type="text" placeholder="Contoh: 081234567890" class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">URL YouTube</label>
                  <input v-model="form.url_youtube" type="text" placeholder="https://youtube.com/..." class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">URL Instagram</label>
                  <input v-model="form.url_instagram" type="text" placeholder="https://instagram.com/..." class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">URL TikTok</label>
                  <input v-model="form.url_tiktok" type="text" placeholder="https://tiktok.com/..." class="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-gray-500 text-gray-900">
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-base font-bold text-gray-900 border-b pb-2 mb-4">Media & Galeri</h4>

              <div class="space-y-6">
                
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-2">
                    Gambar Banner Utama (gambar_hero) <span class="text-red-500">*</span>
                  </label>
                  
                  <div class="relative w-full h-44 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 mb-2 group">
                    <img v-if="preview.gambar_hero || form.gambar_hero" :src="preview.gambar_hero || getImageUrl(form.gambar_hero)" class="w-full h-full object-cover" />
                    <div v-else class="w-full h-full flex items-center justify-center text-gray-400 text-xs">Belum ada gambar</div>
                    
                    <div v-if="preview.gambar_hero || form.gambar_hero" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button type="button" @click="hapusFoto('gambar_hero')" class="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-1.5 rounded-xl text-xs shadow-md transition-all">
                        Hapus
                      </button>
                    </div>
                  </div>

                  <div class="border border-gray-300 rounded-xl p-1.5 bg-white flex items-center">
                    <input type="file" @change="e => handleFileChange(e, 'gambar_hero')" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-700 file:font-semibold hover:file:bg-emerald-100 cursor-pointer">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-2">
                    Foto Katalog Depan (image) <span class="text-red-500">*</span>
                  </label>
                  
                  <div class="relative w-full h-36 md:w-64 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 mb-2 group">
                    <img v-if="preview.image || form.image" :src="preview.image || getImageUrl(form.image)" class="w-full h-full object-cover" />
                    <div v-else class="w-full h-full flex items-center justify-center text-gray-400 text-xs">Belum ada gambar</div>
                    
                    <div v-if="preview.image || form.image" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button type="button" @click="hapusFoto('image')" class="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-1.5 rounded-xl text-xs shadow-md transition-all">
                        Hapus
                      </button>
                    </div>
                  </div>

                  <div class="border border-gray-300 rounded-xl p-1.5 bg-white flex items-center">
                    <input type="file" @change="e => handleFileChange(e, 'image')" accept="image/*" class="w-full text-xs text-gray-500 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:text-emerald-700 file:font-semibold hover:file:bg-emerald-100 cursor-pointer">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-2">
                    Galeri Produk (1-4)
                  </label>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    
                    <div v-for="num in [1, 2, 3, 4]" :key="num" class="flex flex-col">
                      <span class="text-[11px] font-semibold text-gray-600 mb-1">Galeri {{ num }}</span>
                      
                      <div class="relative w-full h-28 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 mb-2 group">
                        <img v-if="preview['galeri'+num] || form['galeri'+num]" :src="preview['galeri'+num] || getImageUrl(form['galeri'+num])" class="w-full h-full object-cover" />
                        <div v-else class="w-full h-full flex items-center justify-center text-gray-400 text-[10px]">No Image</div>
                        
                        <div v-if="preview['galeri'+num] || form['galeri'+num]" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button type="button" @click="hapusFoto('galeri'+num)" class="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1 rounded-xl text-[11px] shadow-md transition-all">
                            Hapus
                          </button>
                        </div>
                      </div>

                      <div class="border border-gray-300 rounded-lg p-1 bg-white">
                        <input type="file" @change="e => handleFileChange(e, 'galeri'+num)" accept="image/*" class="w-full text-[10px] text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-100 file:text-gray-700 cursor-pointer">
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-gray-100 flex justify-end space-x-3">
              <button type="button" @click="tutupModal" class="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                Batal
              </button>
              <button type="submit" :disabled="isSubmitting" class="px-6 py-2.5 text-sm font-semibold text-white bg-[#0f644e] rounded-xl hover:bg-[#0a4d3c] disabled:opacity-70 flex items-center shadow-sm transition-colors">
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
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
        
        <h3 class="text-xl font-bold text-gray-900 mb-2">Hapus Data UMKM</h3>
        <p class="text-sm text-gray-500 mb-6">
          Apakah Anda yakin ingin menghapus produk <span class="font-bold text-gray-900">"{{ itemToDelete?.nama_umkm }}"</span>?
        </p>
        
        <div class="flex justify-center space-x-3">
          <button @click="tutupModalHapus" :disabled="isDeleting" class="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            Batal
          </button>
          <button @click="konfirmasiHapus" :disabled="isDeleting" class="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 disabled:opacity-70 flex items-center justify-center shadow-sm">
            <svg v-if="isDeleting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            {{ isDeleting ? 'Menghapus...' : 'Ya, Hapus' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://0.0.0.0:3000/api';
const API_URL = `${API_BASE_URL}/umkm`;
const IMAGE_BASE_URL = API_BASE_URL.replace(/\/api$/, '');

const daftarUmkm = ref([]);
const isLoading = ref(false);
const showModal = ref(false);
const isEdit = ref(false);
const isSubmitting = ref(false);
const searchQuery = ref('');
const showDeleteModal = ref(false);
const isDeleting = ref(false);
const itemToDelete = ref(null);

const notif = reactive({ show: false, message: '', type: 'success' });

const showNotification = (message, type = 'success') => {
  notif.message = message;
  notif.type = type;
  notif.show = true;
  setTimeout(() => { notif.show = false; }, 3500); 
};

const form = ref({
  id: null,
  nama_umkm: '',
  pemilik: '',
  kategori: '',
  deskripsi: '',
  deskripsi_singkat: '',
  tentang: '',
  no_wa: '',
  url_youtube: '',
  url_instagram: '',
  url_tiktok: '',
  peta_url: '',
  image: '',
  gambar_hero: '',
  galeri1: '',
  galeri2: '',
  galeri3: '',
  galeri4: '',
  is_published: false
});

const filesUpload = reactive({});
const preview = reactive({});

const getAuthHeaders = (isFormData = false) => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };
  if (!isFormData) headers['Content-Type'] = 'application/json';
  return headers;
};

const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('blob:') || imagePath.startsWith('http')) return imagePath;
  if (imagePath.startsWith('/uploads')) return `${IMAGE_BASE_URL}${imagePath}`;
  return `${IMAGE_BASE_URL}/uploads/${imagePath}`;
};

const filteredUmkm = computed(() => {
  if (!searchQuery.value) return daftarUmkm.value;
  const q = searchQuery.value.toLowerCase();
  return daftarUmkm.value.filter(item => 
    (item.nama_umkm && item.nama_umkm.toLowerCase().includes(q)) || 
    (item.pemilik && item.pemilik.toLowerCase().includes(q))
  );
});

const fetchUmkm = async () => {
  isLoading.value = true;
  try {
    const response = await fetch(API_URL, { headers: getAuthHeaders() });
    const result = await response.json();
    if (result.success) {
      daftarUmkm.value = result.data.map(item => ({
        ...item,
        is_published: Boolean(item.is_published)
      }));
    } else {
      showNotification('Gagal mengambil data: ' + result.message, 'error');
    }
  } catch (error) {
    console.error('Error fetching UMKM:', error);
    showNotification('Terjadi kesalahan jaringan.', 'error');
  } finally {
    isLoading.value = false;
  }
};

const handleFileChange = (event, fieldName) => {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 10 * 1024 * 1024) {
    showNotification("Ukuran gambar maksimal adalah 10MB per foto!", "error");
    event.target.value = '';
    return;
  }

  filesUpload[fieldName] = file;
  preview[fieldName] = URL.createObjectURL(file);
};

const hapusFoto = (fieldName) => {
  form.value[fieldName] = '';
  delete filesUpload[fieldName];
  delete preview[fieldName];
};

const simpanUmkm = async () => {
  isSubmitting.value = true;
  try {
    const url = isEdit.value ? `${API_URL}/${form.value.id}` : API_URL;
    const method = isEdit.value ? 'PUT' : 'POST';

    const formData = new FormData();
    formData.append('nama_umkm', form.value.nama_umkm);
    formData.append('judul', form.value.nama_umkm); 
    formData.append('pemilik', form.value.pemilik || '');
    formData.append('kategori', form.value.kategori || '');
    formData.append('deskripsi', form.value.deskripsi || '');
    formData.append('deskripsi_singkat', form.value.deskripsi_singkat || '');
    formData.append('tentang', form.value.tentang || '');
    formData.append('no_wa', form.value.no_wa || '');
    formData.append('url_youtube', form.value.url_youtube || '');
    formData.append('url_instagram', form.value.url_instagram || '');
    formData.append('url_tiktok', form.value.url_tiktok || '');
    formData.append('peta_url', form.value.peta_url || '');
    formData.append('is_published', form.value.is_published ? '1' : '0');

    if (isEdit.value) {
      if (form.value.image) formData.append('image', form.value.image);
      if (form.value.gambar_hero) formData.append('gambar_hero', form.value.gambar_hero);
      if (form.value.galeri1) formData.append('galeri1', form.value.galeri1);
      if (form.value.galeri2) formData.append('galeri2', form.value.galeri2);
      if (form.value.galeri3) formData.append('galeri3', form.value.galeri3);
      if (form.value.galeri4) formData.append('galeri4', form.value.galeri4);
    }

    ['image', 'gambar_hero', 'galeri1', 'galeri2', 'galeri3', 'galeri4'].forEach(fName => {
      if (filesUpload[fName]) {
        formData.append(fName, filesUpload[fName]);
      }
    });

    const response = await fetch(url, {
      method: method,
      headers: getAuthHeaders(true),
      body: formData
    });

    const result = await response.json();
    if (result.success) {
      tutupModal();
      showNotification('Berhasil! Data UMKM telah disimpan.');
      fetchUmkm(); 
    } else {
      showNotification('Gagal menyimpan: ' + result.message, 'error');
    }
  } catch (error) {
    console.error('Error saving UMKM:', error);
    showNotification('Terjadi kesalahan pada server saat menyimpan data.', 'error');
  } finally {
    isSubmitting.value = false;
  }
};

const toggleStatus = async (item) => {
  try {
    const response = await fetch(`${API_URL}/${item.id}/status`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ is_published: item.is_published })
    });
    const result = await response.json();
    if (!result.success) {
      item.is_published = !item.is_published; 
      showNotification('Gagal mengubah status: ' + result.message, 'error');
    } else {
      showNotification(`Status produk "${item.nama_umkm}" diperbarui.`);
    }
  } catch (error) {
    item.is_published = !item.is_published;
    showNotification('Terjadi kesalahan jaringan.', 'error');
  }
};

const resetFiles = () => {
  ['image', 'gambar_hero', 'galeri1', 'galeri2', 'galeri3', 'galeri4'].forEach(k => {
    delete filesUpload[k];
    delete preview[k];
  });
};

const bukaModalTambah = () => {
  isEdit.value = false;
  form.value = {
    id: null, nama_umkm: '', pemilik: '', kategori: '', deskripsi: '', deskripsi_singkat: '',
    tentang: '', no_wa: '', url_youtube: '', url_instagram: '', url_tiktok: '', peta_url: '',
    image: '', gambar_hero: '', galeri1: '', galeri2: '', galeri3: '', galeri4: '', is_published: false
  };
  resetFiles();
  showModal.value = true;
};

const bukaModalEdit = (item) => {
  isEdit.value = true;
  form.value = { ...item, nama_umkm: item.nama_umkm || item.judul || '' };
  resetFiles();
  showModal.value = true;
};

const tutupModal = () => {
  showModal.value = false;
};

const bukaModalHapus = (item) => {
  itemToDelete.value = item;
  showDeleteModal.value = true;
};

const tutupModalHapus = () => {
  showDeleteModal.value = false;
  setTimeout(() => { itemToDelete.value = null; }, 300);
};

const konfirmasiHapus = async () => {
  if (!itemToDelete.value) return;
  isDeleting.value = true;
  try {
    const response = await fetch(`${API_URL}/${itemToDelete.value.id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    const result = await response.json();
    
    if (result.success) {
      showNotification('Data UMKM berhasil dihapus.');
      fetchUmkm();
      tutupModalHapus();
    } else {
      showNotification('Gagal menghapus data: ' + result.message, 'error');
    }
  } catch (error) {
    showNotification('Terjadi kesalahan jaringan saat menghapus.', 'error');
  } finally {
    isDeleting.value = false;
  }
};

onMounted(() => {
  fetchUmkm();
});
</script>