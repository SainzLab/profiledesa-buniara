<template>
  <div class="max-w-4xl mx-auto pb-12 relative">
    
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
        class="fixed top-5 right-5 z-50 max-w-md w-full bg-white rounded-2xl shadow-2xl border p-4 flex items-start space-x-4 transition-all duration-300"
        :class="{
          'border-emerald-200 bg-emerald-50/30': notif.type === 'success',
          'border-red-200 bg-red-50/30': notif.type === 'error',
          'border-amber-200 bg-amber-50/30': notif.type === 'warning',
          'border-blue-200 bg-blue-50/30': notif.type === 'info'
        }"
      >
        <div v-if="notif.type === 'success'" class="p-2 bg-emerald-100 rounded-xl text-emerald-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <div v-else-if="notif.type === 'error'" class="p-2 bg-red-100 rounded-xl text-red-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <div v-else-if="notif.type === 'warning'" class="p-2 bg-amber-100 rounded-xl text-amber-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <div v-else class="p-2 bg-blue-100 rounded-xl text-blue-600 shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>

        <div class="flex-1 pt-0.5">
          <h4 class="text-sm font-bold" :class="{
            'text-emerald-900': notif.type === 'success', 
            'text-red-900': notif.type === 'error', 
            'text-amber-900': notif.type === 'warning', 
            'text-blue-900': notif.type === 'info'}">
            {{ notif.title }}
          </h4>
          <p class="text-xs mt-1 leading-relaxed" :class="{
            'text-emerald-700': notif.type === 'success', 
            'text-red-700': notif.type === 'error', 
            'text-amber-700': notif.type === 'warning', 
            'text-blue-700': notif.type === 'info'}">
            {{ notif.message }}
          </p>
        </div>
        <button @click="notif.show = false" class="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </Transition>

    <Transition name="modal">
      <div v-if="confirmModal.show" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
        
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeConfirmModal"></div>
        
        <div class="modal-box relative bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl">
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ confirmModal.title }}</h3>
            <p class="text-sm text-gray-500 mb-6">{{ confirmModal.message }}</p>
            <div class="flex gap-3 w-full">
              <button @click="closeConfirmModal" class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-xl transition-colors">
                Batal
              </button>
              <button @click="executeConfirm" class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-red-600/20">
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </Transition>

    <div v-if="isFetching" class="flex flex-col items-center justify-center py-32">
      <svg class="animate-spin h-10 w-10 text-[#064e3b] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="text-gray-500 font-medium">Memuat data konten...</p>
    </div>

    <div v-else>
      <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Beranda</h3>
        
        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Headline Utama</label>
          <input type="text" 
                 v-model="form.hero_headline"
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 transition-colors" 
                 placeholder="Pesona Alam & Budaya Desa Buniara" />
          <p class="mt-2 text-sm text-gray-500">Teks besar yang menarik perhatian. Maksimal 60 karakter disarankan.</p>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Sub-headline (Deskripsi Singkat)</label>
          <textarea rows="3" 
                    v-model="form.hero_subheadline"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 resize-none transition-colors"
                    placeholder="Temukan keharmonisan alam..."></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar Latar Belakang (Disarankan 16:9)</label>
          <input type="file" accept="image/*" @change="handleFileUpload($event, 'hero_image')" 
                 class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2 transition-colors cursor-pointer" />
          
          <div class="relative w-full max-w-md aspect-[16/9] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
            <img v-if="preview.hero_image || form.hero_image" 
                 :src="preview.hero_image || form.hero_image" 
                 class="w-full h-full object-cover" 
                 alt="Preview Hero" />
            <span v-else class="text-sm font-medium text-gray-500">Preview 16:9</span>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Tentang Kami</h3>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Paragraf 1</label>
          <textarea rows="3" 
                    v-model="form.tentang_desc1"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 resize-none transition-colors"></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Paragraf 2</label>
          <textarea rows="3" 
                    v-model="form.tentang_desc2"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 resize-none transition-colors"></textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar 1 (Disarankan 4:3)</label>
            <input type="file" accept="image/*" @change="handleFileUpload($event, 'tentang_img1')" 
                   class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2 transition-colors cursor-pointer" />
            
            <div class="relative w-full aspect-[4/3] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
              <img v-if="preview.tentang_img1 || form.tentang_img1" 
                   :src="preview.tentang_img1 || form.tentang_img1" 
                   class="w-full h-full object-cover" 
                   alt="Preview Sawah" />
              <span v-else class="text-sm font-medium text-gray-500">Preview 4:3</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Gambar 2 (Disarankan 4:3)</label>
            <input type="file" accept="image/*" @change="handleFileUpload($event, 'tentang_img2')" 
                   class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2 transition-colors cursor-pointer" />
            
            <div class="relative w-full aspect-[4/3] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
              <img v-if="preview.tentang_img2 || form.tentang_img2" 
                   :src="preview.tentang_img2 || form.tentang_img2" 
                   class="w-full h-full object-cover" 
                   alt="Preview Mata Air" />
              <span v-else class="text-sm font-medium text-gray-500">Preview 4:3</span>
            </div>
          </div>
        </div>

        <div class="mb-2">
          <div class="flex justify-between items-center mb-4">
            <label class="block text-sm font-semibold text-gray-700">Daftar Wilayah Dusun</label>
            <button @click="tambahDusun" type="button" class="text-sm text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">+ Tambah Dusun</button>
          </div>
          <div class="space-y-3">
            <div v-for="(dusun, index) in form.dusun" :key="index" class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
              <input type="text" 
                     v-model="form.dusun[index]" 
                     class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-colors" 
                     placeholder="Nama Dusun (Contoh: Dusun 1)" />
              <button @click="requestDeleteDusun(index)" type="button" class="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors" title="Hapus">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
            <div v-if="form.dusun.length === 0" class="text-sm text-gray-500 text-center py-4 border border-dashed border-gray-300 rounded-lg">
              Belum ada data dusun. Klik "Tambah Dusun".
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3"> Administrasi & Kontak</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">URL Google Maps (Embed)</label>
            <textarea rows="4" 
                      v-model="form.maps_embed"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 text-sm resize-none mb-2 transition-colors" 
                      placeholder='<iframe src="..."></iframe>'></textarea>
            
            <div class="bg-gray-100 h-40 rounded-lg flex items-center justify-center border border-gray-200 overflow-hidden relative [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-none [&>iframe]:pointer-events-none" 
                 v-html="form.maps_embed || '<span class=\'text-sm text-gray-400\'>Pratinjau Peta</span>'">
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Foto Kantor Desa (Disarankan 16:9)</label>
            <input type="file" accept="image/*" @change="handleFileUpload($event, 'kantor_img')" 
                   class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 mb-2 transition-colors cursor-pointer" />
            
            <div class="relative w-full aspect-video bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed overflow-hidden flex items-center justify-center">
              <img v-if="preview.kantor_img || form.kantor_img" 
                   :src="preview.kantor_img || form.kantor_img" 
                   class="w-full h-full object-cover" 
                   alt="Preview Kantor" />
              <span v-else class="text-sm font-medium text-gray-500">Preview 16:9</span>
            </div>
          </div>
        </div>

        <h4 class="text-md font-semibold text-gray-800 mb-4">Informasi Utama</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Alamat</label>
            <input type="text" v-model="form.alamat" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 transition-colors" placeholder="Jl. Raya Buniara No. 1..." />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Jam Operasional</label>
            <input type="text" v-model="form.jam_operasional" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 transition-colors" placeholder="Senin-Jumat, 08:00 - 16:00 WIB." />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Layanan Utama</label>
            <input type="text" v-model="form.layanan" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 transition-colors" placeholder="Administrasi, Kependudukan." />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Kontak (No HP / Telp)</label>
            <input type="text" v-model="form.kontak" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 transition-colors" placeholder="+62 812-XXXX-XXXX" />
          </div>
          <div class="md:col-span-2 lg:col-span-1">
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Alamat Email</label>
            <input type="email" v-model="form.email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-900 transition-colors" placeholder="info@buniara-desa.id" />
          </div>
        </div>

        <div class="flex justify-between items-center mb-4 pt-6 border-t border-gray-100">
          <h4 class="text-md font-semibold text-gray-800">Perangkat Desa</h4>
          <button @click="tambahPerangkat" type="button" class="text-sm text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">+ Tambah Personel</button>
        </div>
        <div class="space-y-3 mb-8">
          <div v-for="(person, index) in form.perangkat_desa" :key="index" class="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
            <input type="text" 
                   v-model="person.nama" 
                   class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-colors" 
                   placeholder="Nama" />
            <input type="text" 
                   v-model="person.jabatan" 
                   class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-colors" 
                   placeholder="Jabatan" />
            <button @click="requestDeletePerangkat(index)" type="button" class="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors" title="Hapus">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
          <div v-if="form.perangkat_desa.length === 0" class="text-sm text-gray-500 text-center py-4 border border-dashed border-gray-300 rounded-lg">
            Belum ada data perangkat desa. Klik "Tambah Personel".
          </div>
        </div>

        <div class="pt-6 border-t border-gray-100">
          <div class="flex justify-between items-center mb-4">
            <h4 class="text-md font-semibold text-gray-800">Media Sosial</h4>
            <span class="text-xs text-gray-500">Tersimpan secara otomatis</span>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 items-center bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
            <select v-model="newSosmed.platform" class="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm bg-white transition-colors cursor-pointer">
              <option value="" disabled>Pilih Platform</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Facebook">Facebook</option>
              <option value="YouTube">YouTube</option>
            </select>
            <input type="url" v-model="newSosmed.url" class="w-full flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-colors" placeholder="https://..." />
            <button type="button" @click="tambahSosmed" :disabled="isSosmedLoading" class="w-full sm:w-auto px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 disabled:opacity-50 transition-colors flex items-center justify-center">
              <svg v-if="isSosmedLoading" class="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Tambah
            </button>
          </div>

          <div class="space-y-3">
            <div v-for="item in sosmedList" :key="item.id" class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <div class="flex items-center gap-3 overflow-hidden">
                <span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md whitespace-nowrap">{{ item.platform }}</span>
                <a :href="item.url" target="_blank" class="text-sm text-gray-600 hover:text-emerald-600 truncate transition-colors">{{ item.url }}</a>
              </div>
              <button @click="requestDeleteSosmed(item.id)" type="button" class="text-red-500 hover:text-red-700 p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors ml-2" title="Hapus">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
            <div v-if="sosmedList.length === 0" class="text-sm text-gray-500 text-center py-6 border border-dashed border-gray-300 rounded-xl bg-gray-50">
              Belum ada data media sosial yang ditambahkan.
            </div>
          </div>
        </div>

      </div>

      <div class="flex justify-end space-x-4 pt-4 mt-8 mb-4">
        <a href="/" target="_blank" class="px-6 py-2.5 border border-emerald-800 text-emerald-800 font-semibold rounded-full hover:bg-emerald-50 transition-colors flex items-center bg-white">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          Pratinjau Website
        </a>
        <button @click="simpanPerubahan" :disabled="isLoading" class="px-6 py-2.5 bg-[#064e3b] text-white font-semibold rounded-full hover:bg-emerald-900 transition-colors flex items-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
          <svg v-if="!isLoading" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
          <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          {{ isLoading ? 'Menyimpan...' : 'Simpan Perubahan' }}
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ASSET_BASE_URL = API_BASE_URL ? API_BASE_URL.replace(/\/api$/, '') : '';

const isLoading = ref(false); 
const isFetching = ref(true); 

const notif = ref({ show: false, type: 'success', title: '', message: '' });
let notifTimeout = null;
const showNotif = (type, title, message, duration = 4000) => {
  if (notifTimeout) clearTimeout(notifTimeout);
  notif.value = { show: true, type, title, message };
  if (duration > 0) notifTimeout = setTimeout(() => { notif.value.show = false; }, duration);
};

const confirmModal = ref({ show: false, title: '', message: '', action: null });
const openConfirmModal = (title, message, actionCallback) => {
  confirmModal.value = { show: true, title, message, action: actionCallback };
};
const closeConfirmModal = () => {
  confirmModal.value.show = false;
  setTimeout(() => { confirmModal.value.action = null; }, 300);
};
const executeConfirm = () => {
  if (confirmModal.value.action) confirmModal.value.action();
  closeConfirmModal();
};

const preview = ref({ hero_image: '', tentang_img1: '', tentang_img2: '', kantor_img: '' });
const fileUploads = ref({ hero_image: null, tentang_img1: null, tentang_img2: null, kantor_img: null });

const form = ref({
  hero_headline: '', hero_subheadline: '', hero_image: '', 
  tentang_judul: '', tentang_desc1: '', tentang_desc2: '',
  tentang_img1: '', tentang_img2: '',
  dusun: [], maps_embed: '', kantor_img: '', alamat: '',
  jam_operasional: '', layanan: '', kontak: '', email: '', 
  perangkat_desa: []
});

const sosmedList = ref([]);
const newSosmed = ref({ platform: '', url: '' });
const isSosmedLoading = ref(false);

const handleFileUpload = (event, fieldName) => {
  const file = event.target.files[0];
  if (!file) return;
  preview.value[fieldName] = URL.createObjectURL(file);
  fileUploads.value[fieldName] = file;
};

const isValidURL = (string) => {
  try { new URL(string); return true; } catch (_) { return false; }
};
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const fetchKonten = async () => {
  isFetching.value = true;
  try {
    const response = await fetch(`${API_BASE_URL}/konten`);
    const result = await response.json();
    
    if (result.success && result.data) {
      for (const key in result.data) {
        if (form.value.hasOwnProperty(key)) {
          form.value[key] = result.data[key] !== null ? result.data[key] : (Array.isArray(form.value[key]) ? [] : '');
        }
      }
      if (result.data.hero_image) preview.value.hero_image = `${ASSET_BASE_URL}${result.data.hero_image}`;
      if (result.data.tentang_img1) preview.value.tentang_img1 = `${ASSET_BASE_URL}${result.data.tentang_img1}`;
      if (result.data.tentang_img2) preview.value.tentang_img2 = `${ASSET_BASE_URL}${result.data.tentang_img2}`;
      if (result.data.kantor_img) preview.value.kantor_img = `${ASSET_BASE_URL}${result.data.kantor_img}`;
    }
  } catch (error) {
    showNotif('error', 'Gagal Memuat Data', 'Tidak dapat terhubung ke server.');
  } finally {
    isFetching.value = false;
  }
};

const simpanPerubahan = async () => {
  if (!form.value.hero_headline.trim()) {
    return showNotif('warning', 'Validasi Gagal', 'Headline utama tidak boleh kosong.');
  }
  
  if (form.value.email && !isValidEmail(form.value.email)) {
    return showNotif('warning', 'Validasi Gagal', 'Format alamat email tidak valid.');
  }

  const filteredDusun = form.value.dusun.filter(d => d.trim() !== '');
  const filteredPerangkat = form.value.perangkat_desa.filter(p => p.nama.trim() !== '' && p.jabatan.trim() !== '');
  
  if (form.value.dusun.length !== filteredDusun.length || form.value.perangkat_desa.length !== filteredPerangkat.length) {
    showNotif('info', 'Pembersihan Data', 'Baris kosong pada Dusun/Perangkat telah otomatis diabaikan.', 3000);
  }
  
  form.value.dusun = filteredDusun;
  form.value.perangkat_desa = filteredPerangkat;

  isLoading.value = true;
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    
    for (const key in form.value) {
      if (Array.isArray(form.value[key])) {
        formData.append(key, JSON.stringify(form.value[key]));
      } else {
        formData.append(key, form.value[key]);
      }
    }

    if (fileUploads.value.hero_image) formData.append('hero_image', fileUploads.value.hero_image);
    if (fileUploads.value.tentang_img1) formData.append('tentang_img1', fileUploads.value.tentang_img1);
    if (fileUploads.value.tentang_img2) formData.append('tentang_img2', fileUploads.value.tentang_img2);
    if (fileUploads.value.kantor_img) formData.append('kantor_img', fileUploads.value.kantor_img);

    const response = await fetch(`${API_BASE_URL}/konten`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData 
    });

    const result = await response.json();
    if (result.success) {
      showNotif('success', 'Berhasil Disimpan!', 'Perubahan konten website telah berhasil diperbarui.');
      await fetchKonten();
      fileUploads.value = { hero_image: null, tentang_img1: null, tentang_img2: null, kantor_img: null };
    } else {
      showNotif('error', 'Gagal Menyimpan', result.message || 'Terjadi kesalahan saat menyimpan data.');
    }
  } catch (error) {
    showNotif('error', 'Kesalahan Server', 'Gagal terhubung ke server.');
  } finally {
    isLoading.value = false;
  }
};

const fetchSosmed = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sosmed`);
    const result = await response.json();
    if (result.success) sosmedList.value = result.data;
  } catch (error) {}
};

const tambahSosmed = async () => {
  if (!newSosmed.value.platform) {
    return showNotif('warning', 'Validasi Gagal', 'Silakan pilih platform media sosial.');
  }
  if (!newSosmed.value.url || !isValidURL(newSosmed.value.url)) {
    return showNotif('warning', 'Validasi Gagal', 'Masukkan URL yang valid (harus diawali http:// atau https://).');
  }

  isSosmedLoading.value = true;
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/sosmed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(newSosmed.value)
    });
    const result = await response.json();
    
    if (result.success) {
      showNotif('success', 'Tersimpan', `Tautan ${newSosmed.value.platform} berhasil ditambahkan.`, 3000);
      newSosmed.value = { platform: '', url: '' }; 
      await fetchSosmed(); 
    } else {
      showNotif('error', 'Gagal', result.message);
    }
  } catch (error) {
    showNotif('error', 'Error', 'Terjadi kesalahan jaringan.');
  } finally {
    isSosmedLoading.value = false;
  }
};

const requestDeleteSosmed = (id) => {
  openConfirmModal('Hapus Media Sosial?', 'Media sosial yang dihapus tidak dapat dipulihkan. Lanjutkan?', async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/sosmed/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const result = await response.json();
      if (result.success) {
        showNotif('success', 'Dihapus', 'Media sosial telah berhasil dihapus.', 3000);
        await fetchSosmed(); 
      } else {
        showNotif('error', 'Gagal', result.message);
      }
    } catch (error) {
      showNotif('error', 'Error', 'Terjadi kesalahan saat menghapus data.');
    }
  });
};

const tambahDusun = () => {
  const lastIndex = form.value.dusun.length - 1;
  if (lastIndex >= 0 && form.value.dusun[lastIndex].trim() === '') {
    return showNotif('warning', 'Tindakan Ditolak', 'Isi nama dusun sebelumnya terlebih dahulu.');
  }
  form.value.dusun.push('');
};

const requestDeleteDusun = (index) => {
  if (form.value.dusun[index].trim() === '') {
    form.value.dusun.splice(index, 1);
    return;
  }
  openConfirmModal('Hapus Dusun?', 'Anda yakin ingin menghapus dusun ini dari daftar?', () => {
    form.value.dusun.splice(index, 1);
  });
};

const tambahPerangkat = () => {
  const lastIndex = form.value.perangkat_desa.length - 1;
  if (lastIndex >= 0) {
    const last = form.value.perangkat_desa[lastIndex];
    if (last.nama.trim() === '' || last.jabatan.trim() === '') {
      return showNotif('warning', 'Tindakan Ditolak', 'Isi data personel sebelumnya dengan lengkap.');
    }
  }
  form.value.perangkat_desa.push({ nama: '', jabatan: '' });
};

const requestDeletePerangkat = (index) => {
  const item = form.value.perangkat_desa[index];
  if (item.nama.trim() === '' && item.jabatan.trim() === '') {
    form.value.perangkat_desa.splice(index, 1);
    return;
  }
  openConfirmModal('Hapus Personel?', `Anda yakin ingin menghapus ${item.nama || 'personel ini'}?`, () => {
    form.value.perangkat_desa.splice(index, 1);
  });
};

onMounted(() => {
  fetchKonten();
  fetchSosmed();
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-box,
.modal-leave-active .modal-box {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-enter-from .modal-box,
.modal-leave-to .modal-box {
  transform: scale(0.95) translateY(10px);
}
</style>