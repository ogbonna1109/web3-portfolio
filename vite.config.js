import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web3-portfolio/',
  plugins: [react()],
})
