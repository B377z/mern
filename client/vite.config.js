import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the server to all network interfaces
    port: 5173
  }
}
