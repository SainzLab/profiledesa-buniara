import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import axios from 'axios'

const app = createApp(App)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.warn("Sesi berakhir atau token kadaluarsa.")
      
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      
      alert("Sesi Anda telah habis. Silakan login kembali.")
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

app.use(router)
app.mount('#app')