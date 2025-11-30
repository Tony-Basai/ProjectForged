<template>
    <nav class="nav">
        <div class="nav__container">
            <div class="nav__container__items">
                <div class="nav__container__items__contacts">
                    <RouterLink class="nav__container__contacts__logo" to="/">
                        <img alt="forged logo" class="nav__container__contacts__logo__img" src="@/assets/logo.png" width="125" height="125"/>
                    </RouterLink>
                    <a class="nav__container__contacts__social-network" href="https://www.instagram.com/"><img class="nav__container__contacts__social-network__img" src="../assets/InstagramIcon.svg" alt="Forged instagram"></a>
                    <a class="nav__container__contacts__social-network" href="https://www.facebook.com/"><img class="nav__container__contacts__social-network__img" src="../assets/FacebookIcon.svg" alt="Forged facebook"></a>
                    <a class="nav__container__contacts__social-network" href="x.com"><img class="nav__container__contacts__social-network__img" src="../assets/TwitterIcon.svg" alt="Forged twitter"></a>
                </div>
                <h4 class="nav__container__items__name-activity">Кованые изделия</h4>
                <p class="nav__container__items__schedule">Каждый день <span class="schedule-span">с 10.00 до 18.00</span></p>
            </div>
        
            <button class="nav__container__burger" @click="toggleMenu">
                <span class="nav__container__burger__line" :class="{'open': isOpen}"></span>
                <span class="nav__container__burger__line" :class="{'open': isOpen}"></span>
                <span class="nav__container__burger__line" :class="{'open': isOpen}"></span>
            </button>

            <div class="nav__container__bottom-items" :class="{ 'active': isOpen }">
                <div class="nav__container__bottom-items__buttons">
                    <RouterLink @click="toggleMenu" class="nav__container__bottom-items__buttons__button" v-for="router in routers" :key="router.name" 
                        :to="router.to"    
                    >
                    {{ router.name }}
                    </RouterLink>
                </div>
                <div class="nav__container__bottom-items__basket">
                    <RouterLink class="nav__container__bottom-items__basket__purchases" to="/catalog/shoping" @click="toggleMenu">
                        <svg class="nav__container__bottom-items__basket__purchases__shopping-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="nav__container__bottom-items__basket__purchases__shopping-img__fill" fill-rule="evenodd" clip-rule="evenodd" d="M5.5 21C5.5 19.6193 6.61929 18.5 8 18.5C9.38071 18.5 10.5 19.6193 10.5 21C10.5 22.3807 9.38071 23.5 8 23.5C6.61929 23.5 5.5 22.3807 5.5 21ZM8 19.5C7.17157 19.5 6.5 20.1716 6.5 21C6.5 21.8284 7.17157 22.5 8 22.5C8.82843 22.5 9.5 21.8284 9.5 21C9.5 20.1716 8.82843 19.5 8 19.5Z" fill="#fff"/>
                            <path class="nav__container__bottom-items__basket__purchases__shopping-img__fill" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 21C17.5 19.6193 18.6193 18.5 20 18.5C21.3807 18.5 22.5 19.6193 22.5 21C22.5 22.3807 21.3807 23.5 20 23.5C18.6193 23.5 17.5 22.3807 17.5 21ZM20 19.5C19.1716 19.5 18.5 20.1716 18.5 21C18.5 21.8284 19.1716 22.5 20 22.5C20.8284 22.5 21.5 21.8284 21.5 21C21.5 20.1716 20.8284 19.5 20 19.5Z" fill="#fff"/>
                            <path class="nav__container__bottom-items__basket__purchases__shopping-img__fill" fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5H4.58051C5.33783 5.79147 6.10333 10.0643 6.74931 14.3709C6.93288 15.5947 7.98416 16.5 9.22165 16.5H19.3597C20.5514 16.5 21.5774 15.6588 21.8111 14.4903L23.2503 7.29417C23.436 6.36599 22.726 5.5 21.7795 5.5H7.16046C6.8575 5.5 6.57797 5.58901 6.34436 5.74093L5.49239 0.913107C5.45023 0.674179 5.24262 0.5 5 0.5H1ZM6.666 7.07417C6.62065 6.77187 6.85478 6.5 7.16046 6.5H21.7795C22.095 6.5 22.3316 6.78866 22.2698 7.09806L20.8305 14.2942C20.6903 14.9953 20.0747 15.5 19.3597 15.5H9.22165C8.47916 15.5 7.84839 14.9568 7.73825 14.2225L6.666 7.07417Z" fill="#fff"/>
                        </svg>
                        <p class="nav__container__bottom-items__basket__purchases__quantity">{{ shoppingCard.count }}</p>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

import { RouterLink } from 'vue-router'
import { cardsToCart } from '@/stores/cardsToCart';

const shoppingCard = cardsToCart(); 

const isOpen = ref(false)

const routers = [
    {
        to: '/',
        name: 'Главная'
    },
    {
        to: '/about',
        name: 'О компании'
    },
    {
        to: '/catalog',
        name: 'Каталог'
    },
    {
        to: '/contacts',
        name: 'Контакты'
    }
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.nav{
    background-color: #1c1712;
    font-family: "Roboto Condensed", sans-serif;

    &__container{
        max-width: 90rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 0 3rem;

        &__items{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.0625rem dashed #ffffff1a;

            &__contacts{
                display: flex;
                align-items: center;
                gap: 1rem;
                
                .nav__container__contacts__social-network__img{
                    max-width: 2rem;
                    width: 100%;
                }
            }

            &__name-activity{
                font-family: "Kelly Slab", sans-serif;
                font-size: 1.625rem;
                line-height: 1.2;
                color: #fff;
            }

            &__schedule{
                color: rgba(255, 255, 255, 0.7);

                .schedule-span{
                    font-family: "Kelly Slab", sans-serif;
                    font-size: 1.2rem;
                    color: #ffb833;
                }
            }
        }

        &__burger {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 2rem;
            height: 1.5rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;

            &__line {
                display: block;
                height: 3px;
                background: #fff;
                border-radius: 2px;
                transition: all 0.3s ease;
            }

            &__line.open:nth-child(1) {
                transform: rotate(45deg) translate(10px, 10px);
            }
            
            &__line.open:nth-child(2) {
                opacity: 0;
            }
            
            &__line.open:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }

        &__bottom-items{
            display: flex;
            justify-content: space-between;
        
            &__buttons{
                display: flex;
                justify-content: center;
                gap: 0.2rem;
    
                &__button{
                    padding: 1.5rem 1rem;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    line-height: 1.4;
                    letter-spacing: 0.125rem;
                    color: #fff;
                    transition: color 0.3s, box-shadow 0.3s;
    
                    &:hover{
                        color: #ff472b;
                        box-shadow: inset 0 -1px 0 #ff472b;
                    }
                }
            }

            &__basket{
                display: flex;

                &__purchases{
                    padding: 1rem 1rem;
                    border: none;
                    background: none;
                    cursor: pointer;
                    position: relative;

                    &:hover{
                        box-shadow: inset 0 -1px 0 #ff472b;
                    }

                    &__quantity{
                        width: 1.15rem;
                        border-radius: 2rem;
                        background-color: #ffb833;
                        color: #fff;
                        font-size: 0.7rem;
                        text-align: center;
                        position: absolute;
                        top: 0.5rem;
                        left: 1.8rem;
                    }
                }
            }
        }
    }
}
.nav__container__bottom-items__basket__purchases__shopping-img:hover{
   
    .nav__container__bottom-items__basket__purchases__shopping-img__fill{
        fill: #ff472b;
    }
}

@media (max-width: 835px) {
    .nav__container__contacts__social-network{
        display: none;
    }
}

@media (max-width: 767px) {
    .nav__container{
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }

    .nav__container__items{
        display: flex;
        justify-content: start;
        gap: 4rem;
        width: 100%;
        border-bottom: none;
    }

    .nav__container__items__schedule{
        width: 9.5rem;
    }

    .nav__container__items__name-activity{
        display: none;
    }    

    .nav__container__burger {
        margin-left: 0;
        display: flex;
    }

    .nav__container__bottom-items {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        background-color: #1c1712;;
        gap: 1rem;
        padding: 1rem 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        z-index: 999;
    }

    .nav__container__bottom-items.active {
        max-height: 100vh; 
    }

    .nav__container__bottom-items__buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .nav__container__bottom-items__basket {
        align-self: center;
    }
}

@media (max-width: 480px) {
    .nav__container{
        height: 5rem;
    }
    
    .nav__container__items__schedule{
        display: none;
    }    
}
</style>
