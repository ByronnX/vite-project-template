<script script="ts" setup >
import axios from 'axios'
function increment() {
    axios.get('/api').then(
        (res) => {
            console.log('res', res);
        }
    )
}
</script>
<template>
    <button @click="increment">点击</button>
</template>