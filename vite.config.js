import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [react(), FullReload(['./**/**.html'])],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' },
      { find: '~notifications', replacement: '/src/notifications' }
    ]
  },
  build: { assetsDir: '' }
})
