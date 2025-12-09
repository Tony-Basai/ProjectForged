<template>
    <div class="card" @click="goToCategory">
        <img class="card__img" :src=" props.image " :alt=" props.name ">
        <a class="card__name" href="">
            {{ props.name }}
        </a>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    id: Number,
    image: String,
    name: String
})

const router = useRouter();

function goToCategory() {
    router.push({
        path: '/catalog',
        query: { category: props.name }
    });
}
</script>

<style scoped lang="scss">
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    &__img{
        background-color: #ff472b;
        border-radius: 5rem;
    }

    &__name{
        font-family: "Roboto Condensed", sans-serif;
        text-decoration: none;
        font-weight: bold;
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        color: #fff;
        text-transform: uppercase;

        &:hover{
            color: #ffb833;
        }
    }
}

@media (max-width: 480px) {
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;

        &__img{
            max-width: 5rem;
            width: 100%;
        }

        &__name{
            font-size: 0.7rem;

            &:hover{
                color: #ffb833;
            }
        }
    }
}
</style>