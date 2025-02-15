import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

 
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //    '/api': 'http://localhost:3001'
  //   }
  // }
  server:{
    proxy:{
      '/api': {
        target: 'https://mern-backend-gznwfusrj-sougataghar477s-projects.vercel.app',
      },
    }
  }
})