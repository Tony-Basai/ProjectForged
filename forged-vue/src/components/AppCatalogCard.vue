<template>
    <div class="catalog__card">
        <img class="catalog__card__img" :src=" props.image " :alt=" props.name ">
        <div class="catalog__card__items">
            <h3 class="catalog__card__items__name">{{ props.name }}</h3>
            <p class="catalog__card__items__description">{{ props.description }}</p>
        </div>
        <div class="catalog__card__items__order">
            <p class="catalog__card__items__order__price">{{ props.price }} <span class="span-price">руб.</span></p>
            <RouterLink class="catalog__card__items__order__buttons" :to="`/catalog/${props.id}`">
                <button class="catalog__card__items__order__buttons__product-button" :class="{ 'in-store': cardsStore.isCardInCart(props.id) }">
                    {{ cardsStore.isCardInCart(props.id) ? "В корзине" : "Заказать" }}
                </button>
                <button @click.prevent="cardsStore.addFavourite(props.id)" class="catalog__card__items__order__buttons__favourite-button">
                    <svg class="catalog__card__items__order__buttons__favourite-button__favourite-img" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="catalog__card__items__order__buttons__favourite-button__favourite-img__hover-red" :class="{'favoutire': cardsFavourite.isColorCard(props.id)}" fill-rule="evenodd" clip-rule="evenodd" d="M11.6577 1.75827C12.783 0.632497 14.3095 0 15.9013 0C17.493 0 19.0195 0.632466 20.1448 1.75819C21.2705 2.88347 21.9031 4.41012 21.9031 6.00183C21.9031 7.59357 21.2706 9.12009 20.1448 10.2454C20.1448 10.2454 20.1449 10.2454 20.1448 10.2454L11.3048 19.0854C11.1096 19.2806 10.793 19.2806 10.5977 19.0854L1.75774 10.2454C-0.585912 7.90173 -0.585912 4.10192 1.75774 1.75827C4.10139 -0.585378 7.90119 -0.585378 10.2448 1.75827L10.9513 2.46472L11.6577 1.75827C11.6578 1.75824 11.6577 1.7583 11.6577 1.75827ZM15.9013 1C14.5748 1 13.3027 1.52711 12.3649 2.4653L11.3048 3.52538C11.2111 3.61915 11.0839 3.67183 10.9513 3.67183C10.8187 3.67183 10.6915 3.61915 10.5977 3.52538L9.53774 2.46538C7.58461 0.512254 4.41797 0.512254 2.46484 2.46538C0.511719 4.4185 0.511719 7.58515 2.46484 9.53827L10.9513 18.0247L19.4377 9.53827C20.3759 8.60052 20.9031 7.32831 20.9031 6.00183C20.9031 4.67534 20.376 3.40321 19.4378 2.46546C18.5001 1.52727 17.2278 1 15.9013 1Z" fill="#ffb833"/>
                    </svg>
                </button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useCardsStore } from '@/stores/useCardsStore';
import { cardsToCart } from '@/stores/cardsToCart';

const cardsStore = cardsToCart();

const cardsFavourite = useCardsStore();

const props = defineProps({
    id: Number,
    image: String,
    name: String,
    category: String,
    description: String,
    price: Number
})

// const products = defineProps [{
//     id: Number
// }]
</script>

<style scoped lang="scss">
.catalog__card{
    max-width: 20rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 4rem 4rem 2rem 2rem;
    background-color: #fff;
    color: #000;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);

    &:hover{
        transform: translateY(-2px);
        -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    }

    &__img{
        max-width: 20rem;
        width: 100%;
        border-radius: 2rem 2rem 0 0;
    }

    &__items{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0 2rem 1.2rem;

        &__name{
            font-family: "Kelly Slab", sans-serif;
            color: #ffb833;
            font-size: 1.5rem;
            font-weight: bold;
        }

        &__order{
            display: flex;
            gap: 1.5rem;
            padding: 0 2rem;

            &__price{
                font-family: "Kelly Slab", sans-serif;
                color: #ffb833;
                font-weight: bold;
                font-size: 1.5rem;

                .span-price{
                    color: #ff472b;
                    font-weight: bold;
                }
            }

            &__buttons{
                display: flex;
                gap: 2.5rem;
                text-decoration: none;
                
                &__product-button{
                    padding: 0.05rem 0.2rem;
                    background-color: #ff472b;
                    color: #fff;
                    font-weight: bold;
                    border: none;
                    cursor: pointer;
    
                    &:hover{
                        background-color: #ff5a41;
                    }

                    &.in-store{
                        background-color: rgb(65, 194, 65);

                        &:hover{
                            background-color: rgb(97, 206, 97);
                        }
                    }
                }

                &__favourite-button{
                    background: none;
                    border: none;
                    cursor: pointer;
                }
            }
        }
    }
}

.catalog__card__items__order__buttons__favourite-button__favourite-img:hover{

    .catalog__card__items__order__buttons__favourite-button__favourite-img__hover-red{
        fill: #ff5a41;
    }
}

.favoutire{
    fill: #ff472b;
}
</style>
