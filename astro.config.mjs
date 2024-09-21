import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';  // Adaptador de Vercel

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
