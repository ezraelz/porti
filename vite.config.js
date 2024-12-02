import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portifolio/",
  build: {
    sourcemap: true, // Enable source maps
  },
});
