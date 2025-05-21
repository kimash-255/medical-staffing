import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // <-- Important: deploys to root of subdomain
  plugins: [react()],
})
