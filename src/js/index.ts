export * from './tools';
export * from './ajax/ajax';
export * from './eventEmitter/eventEmitter';

import CountTo from '../components/CountTo.vue';
export const ktCountTo = CountTo;

import { App } from 'vue';

const install = (Vue: App) => {
    Vue.component('ktCountTo', CountTo);
};

export default {
    install
};
