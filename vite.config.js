// vite.config.js
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from '@rollup/plugin-babel';

// Get the directory name from the URL
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // To prevent potential conflicts with glob imports
      },
    },
  },
  define: {
    "process.env": {},
  },
  target: 'chrome88',

  // Add the __dirname workaround for CommonJS modules
  server: {
    fs: {
      allow: [__dirname],
    },
  },
});
