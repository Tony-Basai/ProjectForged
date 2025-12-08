<template>
  <main class="main">
    <AppLayout>
    <RouterView/>
    </AppLayout>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue';
</script>


<style scoped lang="scss">
.main{
    background: 
    linear-gradient(to right, transparent 50%, #3b2c20 50%),
    url(./assets/BodyBackground.webp) center / cover no-repeat fixed;
}
</style>
