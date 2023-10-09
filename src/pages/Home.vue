<template>
    <div class="body">
        <div>{{ title }}</div>
        <div class="values">
            <CountTo :startValue="0" :endValue="values" :duration="800" :prefix="'单位：'" :suffix="'＄'"></CountTo>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountTo from '@/components/CountTo.vue';

export default defineComponent({
    name: 'Home',
    components: {
        CountTo
    },
    data() {
        return {
            title: '首页',
            iv: null as any,
            values: 237923
        };
    },
    mounted() {
        this.iv = setInterval(() => {
            this.values = this.generateRandomInteger(131, 231132);
        }, 3000);
    },
    methods: {
        generateRandomInteger(min: any, max: any) {
            // 使用 Math.floor() 向下取整，确保生成的是整数
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    beforeUnmount() {
        clearInterval(this.iv as any);
        this.iv = null;
    }
});
</script>

<style lang="scss" scoped>
.values {
    font-size: 2rem;
    font-weight: bold;
    font-family: '黑体';
    color: #255cf3;
}

.body {
    @include bodyStylePage;
}
</style>
