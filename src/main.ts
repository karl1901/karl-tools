import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// ElementPlus全局图标注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router).mount('#app');
