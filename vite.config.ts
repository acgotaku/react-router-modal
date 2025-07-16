import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: true,
      port: 3410
    },
    plugins: [react()],
    build: {
      sourcemap: mode === 'production' ? 'hidden' : true,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom']
          }
        }
      }
    }
  };
});
