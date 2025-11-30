<template>
    <section class="why-us">
        <div class="why-us__container">
            <div class="why-us__container__info">
                <h3 class="why-us__container__info__title">Коротко о нас</h3>
                <p class="why-us__container__info__description">
                    Кованные изделия - это то, что никогда не выходит из моды и всегда актуально. С тех самых пор как человек научился обрабатывать металл, кузнецы по всему миру оттачивали свое мастерство. А на сегодняшний день производство кованых изделий - настоящее искусство, высокохудожественные произведения которого могут порадовать и Вас.
                </p>
                <p class="why-us__container__info__description">
                    Кованые изделия позволят сделать как интерьер, так и экстерьер по-настоящему оригинальными и неповторимыми, солидными и внушительными.
                </p>
                <RouterLink to="/about" class="why-us__container__info__button">
                    ПОДРОБНЕЕ
                </RouterLink> 
            </div>

            <div class="why-us__container__items-swiper">
                <h3 class="why-us__container__items-swiper__title-sale">Акции</h3>
                <swiper class="why-us__container__items-swiper__swiper"
                    :modules="[Autoplay, Pagination]"
                    :slides-per-view="1"
                    :loop="true"
                    :autoplay="{
                    delay: 6000,
                    disableOnInteraction: false
                    }"
                    :pagination="{clickable: true}"
                >
                    <swiper-slide class="why-us__container__items-swiper__swiper__swiper-slide" v-for="card in cards" :key="card.id">
                        <div class="why-us__container__items-swiper__swiper__swiper-slide__cards">
                            <AppAboutUsCard
                                :image="card.image"
                                :title="card.title"
                                :description="card.description"
                                :button="card.button"
                            />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

import { RouterLink } from 'vue-router';

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import SaleIMG2 from '../assets/SaleIMG1.webp'
import SaleIMG1 from '../assets/SaleIMG2.webp'
import AppAboutUsCard from './AppAboutUsCard.vue';

const cards = ref([
    {
        id: 1,
        image: SaleIMG1,
        title: "До 15% на все кованые изделия",
        description: "Предлагаем нашим клиентам скидку в межсезонье — до 15 на все кованые изделия. Размер скидки варьируется в зависимости от стоимости заказа. Подробности уточняйте по телефону.",
    },
    {
        id: 2,
        image: SaleIMG2,
        title: "Скидки на розницу",
        description: "На все кованые изделия с декоративной ковкой скидки в зависимости от суммы заказа: От 600 рублей - 5% От 800 рублей - 7% От 1300 рублей - 10%",
    },
])
</script>

<style scoped lang="scss">
.why-us{
    font-family: "Roboto Condensed", sans-serif;
    background: linear-gradient(to right, rgba(255, 106, 0, 0) 50%, #3b2c20 50%), 
                linear-gradient(rgba(38, 28, 19, 0.7), rgba(38, 28, 19, 0.7));    

    &__container {
        max-width: 90rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 3rem 3rem;

        &__info{
            max-width: 20rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            &__title{
                font-family: "Kelly Slab", sans-serif;
                font-size: 2.5rem;
                color: #ffb833;
            }
            
            &__description{
                font-size: 1rem;
                color: #fff;
            }

            &__button{
                max-width: 1.2rem;
                width: 100%;
                font-size: 1.2rem;
                color: #ffb833;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }
        }

        &__items-swiper{

            &__title-sale{
                font-family: "Kelly Slab", sans-serif;
                color: #ff472b;
                font-size: 1.5rem;
                padding-left: 1rem;
            }

            &__swiper{
                max-width: 45rem;
                width: 100%;
                
                .swiper-pagination-bullet {
                    background: #ffb833;
                    opacity: 1;
                }
                
                .swiper-pagination-bullet-active {
                    background: #ff472b;
                }
    
                .swiper-button-next,
                .swiper-button-prev {
                    color: #ff472b;
                    transition: color 0.3s, transform 0.3s;
    
                    &:hover {
                        color: #ff5a41;
                        transform: scale(1.1);
                    }    
                }
    
                .why-us__container__swiper__swiper-slide__cards{
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
}

@media (max-width: 1000px) {
    .why-us{ 

        &__container {
            display: flex;
            flex-direction: column;
            padding: 0;

            &__info{
                max-width: 100%;
                background-color: #121212e6;
                padding: 2rem 3rem;
            }

            &__items-swiper{
                padding: 2rem 3rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .why-us{
        font-family: "Roboto Condensed", sans-serif;    

        &__container {
            display: flex;
            flex-direction: column;

            &__info{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 2rem 2rem;

                &__title{
                    font-size: 1.5rem;
                }
                
                &__description{
                    font-size: 0.8rem;
                }

                &__button{
                    font-size: 0.9rem;
                }
            }

            &__items-swiper{
                padding: 2rem 2rem;

                &__title-sale{
                    font-size: 1rem;
                }

                &__swiper{
                    max-width: 45rem;
                    width: 100%;
                }
            }
        }
    }   
}
</style>