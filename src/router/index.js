import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LaporanView from '../views/LaporanView.vue'
import LoginView from '../views/LoginView.vue'

import AdminLayout from '../admin/AdminLayout.vue'
import KontenWeb from '../views/KontenWeb.vue'

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
      component: AdminLayout,
      children: [
        {
          path: '',
          redirect: '/admin/konten'
        },
        {
          path: 'konten',
          name: 'admin-konten',
          component: KontenWeb 
        }
      ]
    }
  ]
})

export default router