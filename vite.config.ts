import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Inspect from 'vite-plugin-inspect';

const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue'],
            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(pathSrc, 'auto-imports.d.ts')
        }),
        Components({
            resolvers: [
                // 自动导入 Element Plus 组件
                ElementPlusResolver()
            ],
            dts: path.resolve(pathSrc, 'components.d.ts')
        }),
        // http://localhost:5173/__inspect/
        Inspect()
    ],
    resolve: {
        // 特定路径映射别名
        alias: {
            '@': pathSrc
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // sass全局变量
                additionalData: `@import "@/assets/styles/base.scss";`
            }
        }
    }
});
