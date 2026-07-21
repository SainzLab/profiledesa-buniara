import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LaporanView from '../views/LaporanView.vue'
import LoginView from '../views/LoginView.vue'

import AdminView from '../views/AdminView.vue'
import AdminLaporanView from '../views/AdminLaporanView.vue'
import AdminWisataView from '../views/AdminWisataView.vue'
import AdminUmkmView from '../views/AdminUmkmView.vue'
import AdminPenggunaView from '../views/AdminPenggunaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ==========================================
    // HALAMAN PUBLIK (Tidak butuh login)
    // ==========================================
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/laporan',
      name: 'laporan',
      component: LaporanView
    },
    {
      path: '/login',
      name: 'admin-login',
      component: LoginView,
      meta: { requiresGuest: true } // Menandakan halaman ini khusus untuk yang belum login
    },

    // ==========================================
    // HALAMAN ADMIN (Wajib login)
    // ==========================================
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/konten',
      name: 'admin-konten',
      component: AdminView,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/laporan', 
      name: 'admin-laporan',
      component: AdminLaporanView,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/wisata', 
      name: 'admin-wisata',
      component: AdminWisataView,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/umkm', 
      name: 'admin-umkm',
      component: AdminUmkmView,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/pengguna', 
      name: 'admin-pengguna',
      component: AdminPenggunaView,
      meta: { requiresAuth: true }
    }
  ]
})

// ==========================================
// NAVIGATION GUARD (Satpam Halaman)
// ==========================================
router.beforeEach((to, from, next) => {
  // Mengecek apakah token ada di localStorage
  const isAuthenticated = localStorage.getItem('token') !== null;

  // 1. Jika rute membutuhkan login dan user belum login
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Alihkan paksa ke halaman login
    next({ name: 'admin-login' });
  } 
  // 2. Jika user sudah login tapi mencoba mengakses halaman login lagi
  else if (to.meta.requiresGuest && isAuthenticated) {
    // Alihkan kembali ke dashboard admin
    next({ name: 'admin' });
  } 
  // 3. Jika aman, izinkan masuk ke halaman tujuan
  else {
    next();
  }
});

export default router