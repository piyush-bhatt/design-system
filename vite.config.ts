import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: false, // keep tsc generated .d.ts
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'design-system',
      fileName: (format) => `design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // sourcemap: true,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
