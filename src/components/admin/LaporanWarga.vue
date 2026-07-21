<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Data Laporan Warga</h2>
        <p class="text-sm text-gray-500 mt-1">Kelola dan tindak lanjuti pengaduan dari masyarakat.</p>
      </div>
      
      <div class="flex space-x-3">
        <div class="relative">
          <input type="text" placeholder="Cari laporan..." class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm">
          <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <select class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
          <option>Semua Kategori</option>
          <option>Infrastruktur</option>
          <option>Keamanan</option>
          <option>Lingkungan</option>
        </select>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
              <th class="px-6 py-4">Tanggal</th>
              <th class="px-6 py-4">Pelapor & Kontak</th>
              <th class="px-6 py-4">Kategori & Subjek</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="laporan in daftarLaporan" :key="laporan.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {{ laporan.tanggal }}
              </td>
              
              <td class="px-6 py-4">
                <div class="font-medium text-gray-900 text-sm">{{ laporan.nama }}</div>
                <div class="text-xs text-gray-500 mt-0.5">{{ laporan.kontak }}</div>
              </td>
              
              <td class="px-6 py-4">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mb-1">
                  {{ laporan.kategori }}
                </span>
                <div class="text-sm text-gray-900 line-clamp-1">{{ laporan.subjek }}</div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <span v-if="laporan.status === 'Menunggu'" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  <span class="w-2 h-2 bg-yellow-400 rounded-full mr-1.5"></span> Menunggu
                </span>
                <span v-if="laporan.status === 'Diproses'" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <span class="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></span> Diproses
                </span>
                <span v-if="laporan.status === 'Selesai'" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-1.5"></span> Selesai
                </span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-center">
                <button class="inline-flex items-center px-3 py-1.5 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-xs font-semibold rounded-lg transition-colors">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span class="text-sm text-gray-500">Menampilkan 1 hingga 3 dari 3 laporan</span>
        <div class="flex space-x-2">
          <button class="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>Sebelumnya</button>
          <button class="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">Selanjutnya</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const daftarLaporan = ref([
  {
    id: 1,
    tanggal: '21 Jul 2026',
    nama: 'Budi Santoso',
    kontak: '081234567890',
    kategori: 'Infrastruktur',
    subjek: 'Jalan berlubang di pertigaan desa',
    pesan: 'Terdapat jalan berlubang yang cukup dalam di area pertigaan masuk desa. Sangat membahayakan pengendara motor saat malam hari.',
    lampiran: 'ada',
    status: 'Menunggu'
  },
  {
    id: 2,
    tanggal: '20 Jul 2026',
    nama: 'Siti Aminah',
    kontak: 'siti@email.com',
    kategori: 'Lingkungan',
    subjek: 'Tumpukan sampah di pinggir sungai',
    pesan: 'Mohon ditindaklanjuti warga yang membuang sampah sembarangan di pinggir sungai dekat lapangan.',
    lampiran: 'ada',
    status: 'Diproses'
  },
  {
    id: 3,
    tanggal: '18 Jul 2026',
    nama: 'Agus Salim',
    kontak: '085712341234',
    kategori: 'Keamanan',
    subjek: 'Lampu jalan mati',
    pesan: 'Lampu penerangan jalan di RW 04 sudah mati sejak 3 hari yang lalu.',
    lampiran: 'tidak',
    status: 'Selesai'
  }
]);
</script>