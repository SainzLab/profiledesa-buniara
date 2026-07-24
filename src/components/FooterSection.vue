<template>
  <footer class="bg-gradient-to-br from-emerald-950 to-teal-800 pt-20 pb-8 px-8 text-emerald-50 border-t-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        <div class="md:col-span-5">
          <h3 class="text-3xl font-extrabold tracking-tight mb-4 text-white">
            Desa Buniara
          </h3>
          <p class="text-emerald-100/90 leading-relaxed max-w-sm text-sm">
            Menuju Desa Mandiri, Digital, dan Berkelanjutan melalui keterbukaan informasi dan pelayanan prima demi kesejahteraan masyarakat.
          </p>
        </div>

        <div class="md:col-span-4">
          <h4 class="text-sm font-bold text-teal-200 uppercase tracking-widest mb-6">Navigasi</h4>
          
          <ul class="grid grid-cols-1 sm:grid-cols-1 gap-y-3 gap-x-4 text-emerald-100/80 text-sm">
            <li>
              <a href="/login" class="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                &rarr; Panel Admin 
              </a>
            </li>
            <li>
              <a href="/" class="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                &rarr; Beranda 
              </a>
            </li>
            <li>
              <a href="/laporan" class="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                &rarr; Laporan & Pengajuan
              </a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-3">
          <h4 class="text-sm font-bold text-teal-200 uppercase tracking-widest mb-6">Media Sosial</h4>
          <!-- Container Ikon Media Sosial Dinamis -->
          <div class="flex space-x-4">
            
            <a 
              v-for="sosmed in sosmedList" 
              :key="sosmed.id"
              :href="sosmed.url" 
              target="_blank"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-50 hover:bg-emerald-50 hover:text-teal-900 hover:-translate-y-1 shadow-md transition-all duration-300" 
              :aria-label="sosmed.platform"
            >
              
              <!-- Ikon Instagram -->
              <svg v-if="sosmed.platform.toLowerCase() === 'instagram'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
              </svg>

              <!-- Ikon TikTok -->
              <svg v-else-if="sosmed.platform.toLowerCase() === 'tiktok'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>

              <!-- Ikon YouTube -->
              <svg v-else-if="sosmed.platform.toLowerCase() === 'youtube'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>

              <!-- Ikon Default (Ikon Link) jika platform tidak dikenali -->
              <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>

            </a>

          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center text-xs text-emerald-200/60 pt-8 border-t border-emerald-500/20">
        <p>&copy; 2026 Pemerintah Desa Buniara.</p>
        <p class="mt-2 md:mt-0">Support By KKN Buniara Unsub | Sainzlab</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sosmedList = ref([]);
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const fetchSosmed = async () => {
  try {
    const response = await fetch(`${apiUrl}/sosmed`);
    const result = await response.json();
    
    if (result.success) {
      sosmedList.value = result.data;
    }
  } catch (error) {
    console.error("Gagal mengambil data media sosial:", error);
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  
  if (element) {
    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  fetchSosmed();
});
</script>