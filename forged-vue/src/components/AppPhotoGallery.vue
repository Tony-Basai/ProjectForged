<template>
    <section class="photo-gallery">
        <div class="photo-gallery__container">
            <div class="photo-gallery__container__advantages">
                <div class="photo-gallery__container__advantages__items">
                    <p class="photo-gallery__container__advantages__items__number">01</p>
                    <p class="photo-gallery__container__advantages__items__text">
                        Современные технологии
                    </p>
                </div>
                <div class="photo-gallery__container__advantages__items">
                    <p class="photo-gallery__container__advantages__items__number">02</p>
                    <p class="photo-gallery__container__advantages__items__text">
                        Широкий ассортимент
                    </p>
                </div>
                <div class="photo-gallery__container__advantages__items">
                    <p class="photo-gallery__container__advantages__items__number">03</p>
                    <p class="photo-gallery__container__advantages__items__text">
                        Акции и скидки
                    </p>
                </div>
                <div class="photo-gallery__container__advantages__items">
                    <p class="photo-gallery__container__advantages__items__number">04</p>
                    <p class="photo-gallery__container__advantages__items__text">
                        Опыт
                    </p>
                </div>
                <div class="photo-gallery__container__advantages__items">
                    <p class="photo-gallery__container__advantages__items__number">05</p>
                    <p class="photo-gallery__container__advantages__items__text">
                        Низкие цены
                    </p>
                </div>
            </div>

            <div class="photo-gallery__container__items-swiper">
                <h3 class="photo-gallery__container__items-swiper__title">Фотогалерея</h3>
                <swiper class="photo-gallery__container__items-swiper__swiper"
                    :modules="[Autoplay, Pagination]"
                    :loop="true"
                    :autoplay="{
                    delay: 6000,
                    disableOnInteraction: false
                    }"
                    :pagination="{clickable: true}"
                    :breakpoints="{
                        320: {
                            slidesPerView: 1,
                            },
                        480: {
                            slidesPerView: 2.5,
                            },
                        768: {
                            slidesPerView: 3,
                            },
                        1024: {
                            slidesPerView: 4.5,
                            }
                    }"
                >
                    <swiper-slide class="photo-gallery__container__items-swiper__swiper__swiper-slide" v-for="(photo, index) in photos" :key="photo.id" @click="openFullscreen(index)">
                        <div class="photo-gallery__container__items-swiper__swiper__swiper-slide__cards">
                            <AppPhotoGalleryCard
                                :image="photo.image"
                            />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div v-if="isModalOpen" class="photo-gallery__container__modal" @click.self="isModalOpen = false">
                <button class="photo-gallery__container__modal__close-button" @click="isModalOpen = false">×</button>
                <swiper
                    :modules="[Pagination, Navigation, Keyboard]"
                    :initial-slide="activeIndex"
                    :slides-per-view="1"
                    navigation
                    :keyboard="true"
                    :pagination="{clickable: true}"
                    class="photo-gallery__container__modal__fullscreen-swiper"
                >
                    <swiper-slide v-for="photo in photos" :key="photo.id">
                        <img :src="photo.image" class="photo-gallery__container__modal__fullscreen-img" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import AppPhotoGalleryCard from './AppPhotoGalleryCard.vue'

import Signboard from "../assets/Signboard.webp"
import GatesImg from "../assets/GatesImg.webp"
import BenchImg from "../assets/BenchImg.webp"
import BarbecuesImg from "../assets/BarbecuesImg.webp"
import TablesImg from "../assets/TablesImg.webp"
import RailingsImg from "../assets/RailingsImg.webp"
import BedImg from "../assets/BedImg.webp"

const photos = ref([
    {
        id: 1,
        image: Signboard
    },
    {
        id: 2,
        image: GatesImg
    },
    {
        id: 3,
        image: BenchImg
    },
    {
        id: 4,
        image: BarbecuesImg
    },
    {
        id: 5,
        image: TablesImg
    },
    {
        id: 6,
        image: RailingsImg
    },
    {
        id: 7,
        image: BedImg
    },
])

const isModalOpen = ref(false)
const activeIndex = ref(0)

const openFullscreen = (index) => {
  activeIndex.value = index
  isModalOpen.value = true
}

watch(isModalOpen, (val) => {
  if (val) {
    document.body.classList.add('body-lock')
  } else {
    document.body.classList.remove('body-lock')
  }
})
</script>

<style scoped lang="scss">
.photo-gallery{
    background: linear-gradient(to right, rgba(255, 106, 0, 0) 50%, #3b2c20 50%), 
                linear-gradient(rgba(255, 184, 51, 0.8), rgba(255, 184, 51, 0.8));

    &__container{
        max-width: 90rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 3rem 3rem;
        
        &__advantages{
            display: flex;
            flex-direction: column;

            &__items{
                width: 21rem;
                position: relative;

                &__number{
                    font-family: "Kelly Slab", sans-serif;
                    font-size: 5rem;
                    color: #ffb833;
                    position: relative;
                    z-index: 1;
                }

                &__text{
                    font-family: "Roboto Condensed", sans-serif;
                    font-size: 1rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    color: #fff;
                    position: absolute;
                    z-index: 2;
                    bottom: 2.75rem;
                    left: 2.5rem;
                }
            }
        }

        &__items-swiper{

            &__title{
                font-family: "Kelly Slab", sans-serif;
                color: #fff;
                font-size: 1.5rem;
                padding-left: 1rem;
            }

            &__swiper{
                max-width: 50rem;
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

        &__modal {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;

            &__close-button {
                position: absolute;
                top: 25px;
                right: 35px;
                font-size: 3rem;
                color: #fff;
                background: transparent;
                border: none;
                cursor: pointer;
                z-index: 10000;
                transition: 0.2s;
                
                &:hover {
                    transform: scale(1.15);
                }
            }

            &__fullscreen-swiper {
                width: 90vw;
                height: 90vh;
            
                &__swiper-button-next,
                &__swiper-button-prev {
                    color: #fff;
                    transition: 0.3s;
                }
            
                &__swiper-button-next:hover,
                &__swiper-button-prev:hover {
                    transform: scale(1.2);
                }
            
                &__swiper-pagination-bullet {
                    background: #fff;
                }
            }
        
            &__fullscreen-img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}

@media (max-width: 1206px) {
    .photo-gallery{

        &__container{
            display: flex;
            flex-direction: column;
            padding: 0;

            
            &__advantages{
                display: flex;
                flex-direction: column;
                background-color: rgba(255, 71, 43);
                padding: 2rem 3rem;
            }

            &__items-swiper{
                background-color: #3b2c20;
                padding: 2rem 3rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .photo-gallery{
        height: auto;

        &__container{
            display: flex;
            flex-direction: column;
            padding: 0;
            
            &__advantages{
                display: flex;
                flex-direction: column;
                background-color: rgb(255, 71, 43);
                padding: 2rem 2rem;

                &__items{
                    width: 21rem;

                    &__number{
                        font-size: 3rem;
                    }

                    &__text{
                        font-size: 0.5rem;
                        bottom: 1.7rem;
                        left: 1.5rem;
                    }
                }
            }

            &__items-swiper{
                padding: 2rem 2rem;
                background-color: #3b2c20;

                &__title{
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>