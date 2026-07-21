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
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/admin/konten',
      name: 'admin-konten',
      component: AdminView
    },
    {
      path: '/admin/laporan', 
      name: 'admin-laporan',
      component: AdminLaporanView
    },
    {
      path: '/admin/wisata', 
      name: 'admin-wisata',
      component: AdminWisataView
    },
    {
      path: '/admin/umkm', 
      name: 'admin-umkm',
      component: AdminUmkmView
    },
    {
      path: '/admin/pengguna', 
      name: 'admin-pengguna',
      component: AdminPenggunaView
    }
  ]
})

export default router