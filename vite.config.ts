import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'karl-tools',
      fileName: 'karl-tools'
    }
  }
})
