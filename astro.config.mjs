// @ts-check
import { defineConfig } from 'astro/config';

// Recover Clinic Astro config — Phase C 6-page IA
// publicDir: assets·logo는 build 시 dist/로 복사
// outDir: 'dist' (firebase.json public 대상)
export default defineConfig({
  site: 'https://recover-clinic.kr',
  publicDir: './public',
  outDir: './dist',
  build: {
    format: 'directory', // /research/ 같은 trailing-slash URL
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  trailingSlash: 'always',
});
