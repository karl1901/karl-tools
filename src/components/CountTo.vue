<template>
    <div class="body">{{ prefix ? prefix : '' }}{{ addCommas(currentValue) }}{{ suffix ? suffix : '' }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CountTo',
    props: {
        // 起始值
        startValue: {
            type: Number,
            default: 0
        },
        // 结束值
        endValue: {
            type: Number,
            default: 2023,
            required: true
        },
        // 动画时间（毫秒）
        duration: {
            type: Number,
            default: 3000
        },
        // 分隔符
        separator: {
            type: String,
            default: ','
        },
        // 前缀字符串
        prefix: {
            type: String,
            default: null
        },
        // 后缀字符串
        suffix: {
            type: String,
            default: null
        }
    },
    watch: {
        startValue() {
            this.restart();
        },
        endValue() {
            this.restart();
        },
        duration() {
            this.restart();
        },
        separator() {
            this.restart();
        },
        prefix() {
            this.restart();
        },
        suffix() {
            this.restart();
        }
    },
    data() {
        return {
            currentValue: 0, // 当前计数值
            interval: null as any, // 计数器
            startTime: 0 // 开始时间
        };
    },
    mounted() {
        this.start();
    },
    methods: {
        // 重启函数
        restart() {
            this.currentValue = 0;
            this.interval = null;
            this.startTime = 0;
            this.start();
        },
        // 分隔符添加函数
        addCommas(nStr: any) {
            nStr += '';
            let x = nStr.split('.');
            let x1 = x[0];
            let x2 = x.length > 1 ? '.' + x[1] : '';
            let rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + this.separator + '$2');
            }
            return x1 + x2;
        },
        // 启动函数
        start() {
            this.interval = setInterval(() => {
                const timePassed = Date.now() - this.startTime;
                if (timePassed >= this.duration) {
                    clearInterval(this.interval);
                    this.currentValue = this.endValue;
                    return;
                }
                this.currentValue = Math.round(
                    this.easeInOutQuad(timePassed, this.startValue, this.endValue - this.startValue, this.duration)
                );
            }, 10);
            this.startTime = Date.now();
        },
        // 缓动效果函数
        easeInOutQuad(t: any, b: any, c: any, d: any) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        },
        // 关闭函数
        stop() {
            clearInterval(this.interval as any);
            this.interval = null;
        }
    },
    beforeUnmount() {
        this.stop();
    }
});
</script>

<style lang="scss" scoped>
.body {
    margin: 0px;
}
</style>
