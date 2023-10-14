import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [react(), FullReload(['./**/**.html'])],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
});
