import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* GITHUB PAGES (projeto): https://malta-lab.github.io/bracis_2027/
   Para publicar na raiz de um domínio próprio, use site: 'https://dominio/' e base: '/'.
   Links internos devem passar por withBase() (src/utils/paths.ts) para respeitar o base. */
export default defineConfig({
  site: 'https://malta-lab.github.io',
  base: '/bracis_2027',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
