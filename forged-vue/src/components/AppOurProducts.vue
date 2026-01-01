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
import TableIcon from '../assets/TableIcon.webp'
import BarbecueIcon from '../assets/BarbecueIcon.webp'
import BedIcon from '../assets/BedIcon.webp'
import BenchIcon from '../assets/BenchIcon.webp'
import RailingsIcon from '../assets/RailingsIcon.webp'
import SignboardIcon from '../assets/SignboardIcon.webp'

const products = ref([
    {
        id:1,
        image: GatesIcon,
        name: 'Ворота'
    },
    {
        id:2,
        image: TableIcon,
        name: 'Стол'
    },
    {
        id:3,
        image: BarbecueIcon,
        name: 'Мангал'
    },
    {
        id:4,
        image: BedIcon,
        name: 'Кровать'
    },
    {
        id:5,
        image: BenchIcon,
        name: 'Скамейка'
    },
    {
        id:6,
        image: RailingsIcon,
        name: 'Перила'
    },
    {
        id:7,
        image: SignboardIcon,
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