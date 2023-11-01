<template>
    <div>
        <h1>Resiter!!!!</h1>
        <p>{{ store.counter }}</p>
    </div>
</template>
<script setup>
import { useStore } from '@/store'
const store = useStore();
</script>
<style scoped lang="scss">
div {
    color: $primary-color; // 主题色
}

.gutter-box {
    background: #0092ff;
    padding: 8px 0;
}
</style>