<template>
    <section class="our-products">
        <div class="our-products__container">
            <h3 class="our-products__container__title">
                Наша продукция:
            </h3>

            <div class="our-products__container__cards">
                <AppOurProductsCard v-for="product in products" :key="product.id"
                    :image="product.image"
                    :name="product.name"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

import AppOurProductsCard from './AppOurProductsCard.vue';

import GatesIcon from '../assets/GatesIcon.webp'

const products = ref([
    {
        id:1,
        image: GatesIcon,
        name: 'Ворота'
    },
    {
        id:2,
        image: GatesIcon,
        name: 'Стол'
    },
    {
        id:3,
        image: GatesIcon,
        name: 'Мангал'
    },
    {
        id:4,
        image: GatesIcon,
        name: 'Кровать'
    },
    {
        id:5,
        image: GatesIcon,
        name: 'Скамейка'
    },
    {
        id:6,
        image: GatesIcon,
        name: 'Перила'
    },
    {
        id:7,
        image: GatesIcon,
        name: 'Вывеска'
    }
])
</script>

<style scoped lang="scss">
.our-products{
    background-color: #1c1712;

    &__container{
        max-width: 90rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6rem;
        margin: 0 auto;
        padding: 3rem 3rem;

        &__title{
            font-family: "Kelly Slab", sans-serif;
            font-size: 2.5rem;
            color: #c7c7c7;
        }

        &__cards{
            max-width: 45rem;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15rem;
            row-gap: 1rem;
        }
    }
}

@media (max-width: 480rem) {
    .our-products{

        &__container{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            &__title{
                font-size: 1.5rem;
            }

            &__cards{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 5rem;
                row-gap: 1rem;
            }
        }
    }
}
</style>