import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: { assetsDir: '' },
  plugins: [tsconfigPaths(), FullReload(['./**/**.html']), react()]
})
