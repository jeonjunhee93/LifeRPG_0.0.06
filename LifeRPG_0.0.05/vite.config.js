import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ 배포 시 필수 — 상대경로 설정
  build: {
    outDir: 'dist', // ✅ Cloudflare가 빌드 결과를 찾을 폴더
  },
  server: {
    port: 5173, // 로컬 개발용 포트
  },
});
