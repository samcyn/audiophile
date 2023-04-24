/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'assets/js/[name]-[hash].js',
  //       entryFileNames: 'assets/js/[name]-[hash].js',
        
  //       assetFileNames: ({name}) => {
  //         if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
  //             return 'assets/images/[name]-[hash][extname]';
  //         }
          
  //         if (/\.css$/.test(name ?? '')) {
  //             return 'assets/css/[name]-[hash][extname]';   
  //         }
 
  //         // default value
  //         // ref: https://rollupjs.org/guide/en/#outputassetfilenames
  //         return 'assets/[name]-[hash][extname]';
  //       },
  //     },
  //   }
  // },
})
