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
      meta: { requiresGuest: true } 
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
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'admin-login' });
  } 
  
  else if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: 'admin' });
  } 
  
  else {
    next();
  }
});

export default router