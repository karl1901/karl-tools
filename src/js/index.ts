export * from './tools';

import CountTo from '../components/CountTo.vue';

import { App } from 'vue';

const install = (Vue: App) => {
    Vue.component('ktCountTo', CountTo);
};

export default {
    install
};
