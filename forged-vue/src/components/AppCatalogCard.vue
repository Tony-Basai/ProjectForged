<template>
    <div class="catalog__card">
        <img class="catalog__card__img" :src=" props.image " :alt=" props.name ">
        <div class="catalog__card__items">
            <h3 class="catalog__card__items__name">{{ props.name }}</h3>
            <div class="catalog__card__items__info">
                <img class="catalog__card__items__info__img" src="../assets/clockIcon.svg" :alt="props.name">
                <p class="catalog__card__items__info__text">Срок изготовления — {{ props.clock }} дней после оформления заказа.</p>
            </div>
            <div class="catalog__card__items__info">
                <img class="catalog__card__items__info__img" src="../assets/deliveryIcon.svg" :alt="props.name">
                <p class="catalog__card__items__info__text">Доставка по всей РБ. Стоимость определяется при оформлении заказа.</p>
            </div>
        </div>
        <div class="catalog__card__items__order">
            <p class="catalog__card__items__order__price">{{ props.price }} <span class="span-price">руб.</span></p>
            <div class="catalog__card__items__order__buttons">
                <RouterLink class="catalog__card__items__order__buttons__product-button" :to="`/catalog/${props.id}`" :class="{ 'in-store': cardsStore.isCardInCart(props.id) }">
                    {{ cardsStore.isCardInCart(props.id) ? "В корзине" : "Заказать" }}
                </RouterLink>
                <button @click.stop.prevent="cardsFavourite.addFavourite(props.id)" class="catalog__card__items__order__buttons__favourite-button">
                    <svg class="catalog__card__items__order__buttons__favourite-button__favourite-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="catalog__card__items__order__buttons__favourite-button__favourite-img__hover-red" :class="{'favourite': cardsFavourite.isColorCard(props.id)}" d="M17.3653 1C15.1604 1 13.2067 2.07706 12 3.73408C10.7933 2.07706 8.84098 1 6.63474 1C2.9706 1 0 3.9706 0 7.63474C0 13.2098 12 22.2004 12 22.2004C12 22.2004 24 13.2098 24 7.63474C24 3.9706 21.0294 1 17.3653 1Z" fill="#ffb833"/>
                    </svg>
                </button>
            </div>
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
    clock: String,
    description: String,
    price: Number
})
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
        padding: 0 2rem;

        &__name{
            font-family: "Kelly Slab", sans-serif;
            color: #ffb833;
            font-size: 1.5rem;
            font-weight: bold;
        }

        &__info{
            display: flex;
            gap: 0.5rem;

            &__img{
                max-width: 2rem;
                width: 100%;
            }

            &__text{
                font-size: 0.8rem;
            }
        }

        &__order{
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0 2rem 1.5rem;

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
                gap: 2.2rem;
                
                &__product-button{
                    height: 2rem;
                    padding: 0.2rem 0.5rem;
                    background-color: #ff472b;
                    color: #fff;
                    font-weight: bold;
                    border: none;
                    text-decoration: none;
                    white-space: nowrap;
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

.favourite{
    fill: #ff472b;
}

@media (max-width: 782px) {
    .catalog__card{
        max-width: 15rem;
        width: 100%;
        gap: 0.5rem;

        &__items{
            &__name{
                font-size: 1.2rem;
            }

            &__info{

                &__img{
                    max-width: 1.4rem;
                    width: 100%;
                }
            }

            &__order{
                gap: 1rem;

                &__price{
                    font-size: 1.2rem;
                }

                &__buttons{
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    
                    &__product-button{
                        font-size: 0.7rem;
                        height: 1.5rem;
                        padding: 0.25rem 0.5rem;
                    }
                }
            }
        }
    }
}

@media (max-width: 480px){
    .catalog__card{
        max-width: 15rem;
        width: 100%;
        gap: 0.2rem;

        &__items{
            &__name{
                font-size: 1rem;
            }

            &__info{
                &__img{
                    max-width: 1.2rem;
                    width: 100%;
                }

                &__text{
                    font-size: 0.6rem;
                }
            }

            &__order{
                &__price{
                    font-size: 1rem;
                }

                &__buttons{
                    &__product-button{
                        font-size: 0.6rem;
                        height: 1.5rem;
                        padding: 0.25rem 0.5rem;
                    }
                }
            }
        }
    }
}
</style>
