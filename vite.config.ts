import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'karl-tools',
      fileName: 'karl-tools',
    },
  },
  plugins: [dts()],
});
