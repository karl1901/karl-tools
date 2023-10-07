<template>
    <div class="body">
        <div>{{ title }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    data() {
        return {
            title: '首页'
        };
    },
    methods: {}
});
</script>

<style lang="scss" scoped>
.body {
    @include bodyStylePage;
}
</style>
