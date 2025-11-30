<template>
    <AppHeader/>
    <slot></slot>
    <AppFooter/>    
</template>

<script setup>
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';
</script>