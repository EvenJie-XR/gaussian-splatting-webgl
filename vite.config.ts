import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "fs"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'gaussian-splatting-webgl',
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    },
    https: {
      key: fs.readFileSync("./ssl/119.key"),
      cert: fs.readFileSync("./ssl/119.crt")
    },
  },
})
