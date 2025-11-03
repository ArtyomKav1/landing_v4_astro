// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()], 
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@uploads': path.resolve('./public/uploads'),
      },
    },
    assetsInclude: ['**/*.svg'],
  },
});
