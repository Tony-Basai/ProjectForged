<template>
    <div class="card">
        <img class="card__img" :src=" props.image " alt="">
    </div>
</template>

<script setup>
const props = defineProps({
    id: Number,
    image: String
})
</script>

<style scoped lang="scss">
.card{
    
    &__img{
        max-width: 20rem;
        height: 20rem;
        cursor: pointer;
    }
}
</style>