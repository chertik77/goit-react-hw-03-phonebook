import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  build: { assetsDir: '' },
  plugins: [jsconfigPaths(), FullReload(['./**/**.html']), react()]
})
