<template>
    <section class="shopping">
        <div class="shopping__container">
            <div class="shopping__container__header">
                <h2 class="shopping__container__header__title">Корзина</h2>
                <h3 class="shopping__container__header__path-section">
                    <RouterLink to="/catalog" class="shopping__container__header__path-section__link-catalog">
                    Каталог 
                    </RouterLink>
                    \ Корзина
                </h3>
            </div>
            <div v-if="shoppingProduct.cardsCountArr.length === 0" class="shopping__container__basket-empty">
                <h3 class="shopping__container__basket-empty__title">Товаров пока нет</h3>
                <p class="shopping__container__basket-empty__description">
                    Для выбора изделий перейдите в <RouterLink class="shopping__container__basket-empty__description__link-catalog" to="/catalog">каталог</RouterLink>
                </p>
            </div>
            
            <div v-else class="shopping__container__basket">
                <div class="shopping__container__basket__elements">
                    <div class="shopping__container__basket__elements__product-card" v-for="card in shoppingProduct.cardsCountArr" :key="card.id">
                        <img class="shopping__container__basket__elements__product-card__image" :src="card.image" :alt="card.title">
                        <div class="shopping__container__basket__elements__product-card__items">
                            <h3 class="shopping__container__basket__elements__product-card__items__name">{{ card.title }}</h3>
                            <div class="shopping__container__basket__elements__product-card__items__order-info">
                                <div class="shopping__container__basket__elements__product-card__items__order-info__buttons">
                                    <button @click="decrement(card)" class="shopping__container__basket__elements__product-card__items__order-info__buttons__button">&minus;</button>
                                    <p class="shopping__container__basket__elements__product-card__items__order-info__buttons__counter">{{ card.count }}</p>
                                    <button @click="increment(card)" class="shopping__container__basket__elements__product-card__items__order-info__buttons__button">+</button>
                                </div>
                                <p class="shopping__container__basket__elements__product-card__items__order-info__total">× {{ card.price }}</p>
                                <p class="shopping__container__basket__elements__product-card__items__order-info__total">= {{ card.total }} руб.</p>
                                <button @click="remove(card.id)" class="shopping__container__basket__elements__product-card__items__order-info__button-deleted">
                                    <svg class="shopping__container__basket__elements__product-card__items__order-info__button-deleted__img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="shopping__container__basket__elements__product-card__items__order-info__button-deleted__img__fill" fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z" fill="#414141"/>
                                        <path class="shopping__container__basket__elements__product-card__items__order-info__button-deleted__img__fill" fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C9.17157 2.5 8.5 3.17157 8.5 4V6C8.5 6.27614 8.27614 6.5 8 6.5C7.72386 6.5 7.5 6.27614 7.5 6V4C7.5 2.61929 8.61929 1.5 10 1.5H14C15.3807 1.5 16.5 2.61929 16.5 4V6C16.5 6.27614 16.2761 6.5 16 6.5C15.7239 6.5 15.5 6.27614 15.5 6V4C15.5 3.17157 14.8284 2.5 14 2.5H10ZM5 5.5C5.27614 5.5 5.5 5.72386 5.5 6V20C5.5 20.8284 6.17157 21.5 7 21.5H17C17.8284 21.5 18.5 20.8284 18.5 20V6C18.5 5.72386 18.7239 5.5 19 5.5C19.2761 5.5 19.5 5.72386 19.5 6V20C19.5 21.3807 18.3807 22.5 17 22.5H7C5.61929 22.5 4.5 21.3807 4.5 20V6C4.5 5.72386 4.72386 5.5 5 5.5Z" fill="#414141"/>
                                        <path class="shopping__container__basket__elements__product-card__items__order-info__button-deleted__img__fill" fill-rule="evenodd" clip-rule="evenodd" d="M10 10.5C10.2761 10.5 10.5 10.7239 10.5 11V17C10.5 17.2761 10.2761 17.5 10 17.5C9.72386 17.5 9.5 17.2761 9.5 17V11C9.5 10.7239 9.72386 10.5 10 10.5Z" fill="#414141"/>
                                        <path class="shopping__container__basket__elements__product-card__items__order-info__button-deleted__img__fill" fill-rule="evenodd" clip-rule="evenodd" d="M14 10.5C14.2761 10.5 14.5 10.7239 14.5 11V17C14.5 17.2761 14.2761 17.5 14 17.5C13.7239 17.5 13.5 17.2761 13.5 17V11C13.5 10.7239 13.7239 10.5 14 10.5Z" fill="#414141"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shopping__container__basket__payment-window">
                    <h3 class="shopping__container__basket__payment-window__title">Сумма заказа</h3>
                    <p class="shopping__container__basket__payment-window__count">Количетво изделий: {{ shoppingCard.count }}</p>
                    <p class="shopping__container__basket__payment-window__product" v-for="card in shoppingProduct.cardsCountArr" :key="card.id">
                        {{ card.title }}: {{ card.count }} - {{ card.total }} руб.
                    </p>
                    <h3 class="shopping__container__basket__payment-window__invoice-total">
                        Итого: {{ shoppingProduct.totalPrice }} руб.
                    </h3>
                    <button class="shopping__container__basket__payment-window__button" @click="openModal">К оформлению</button>
                </div>            
            </div>
        </div>

        <div v-if="orderСonfirmed" class="shopping__order-confirmed">
            Заказ оформлен!
        </div>

        <div v-if="modalOpen" class="shopping__modal" @click="closeModal">
            <div class="shopping__modal__window" @click.stop>
                <button class="shopping__modal__window__close-button" @click="closeModal">×</button>
                <h2 class="shopping__modal__window__title">Оформление заказа</h2>
                <div class="shopping__modal__window__items">
                    <label class="shopping__modal__window__items__title-input" for="user-name">Укажите свое имя:</label>
                    <input class="shopping__modal__window__items__input" type="text" id="user-name" placeholder="Ваше имя">
                </div>
                <div class="shopping__modal__window__items">
                    <label class="shopping__modal__window__items__title-input" for="phone-number">Введите ваш номер телефона:<span class="input-necessarily">*</span></label>
                    <input class="shopping__modal__window__items__input" v-model="phone" type="tel" id="phone-number" name="phone" placeholder="+375 (__) ___-__-__">
                </div>
                <div class="shopping__modal__window__items">
                    <label class="shopping__modal__window__items__title-input" for="user-email">Введите вашу эл.почту:<span class="input-necessarily">*</span></label>
                    <input class="shopping__modal__window__items__input" v-model="email" type="email" id="user-email" name="email" placeholder="name@email.com">
                </div>
                <div class="shopping__modal__window__items">
                    <label class="shopping__modal__window__items__title-input" for="comment">Комментарий к заказу:</label>
                    <textarea class="shopping__modal__window__items__input-comment" type="text" id="comment" name="user-comment" placeholder="Ваш комментраий к заказу"></textarea>
                </div>
                <div class="shopping__modal__window__product-order">
                    <p class="shopping__modal__window__product-order__info">
                        Количетво изделий: {{ shoppingCard.count }}
                    </p>
                    <p class="shopping__modal__window__product-order__info">
                        Ваш заказ на сумму: {{ shoppingProduct.totalPrice }} руб.
                    </p>
                </div>
                <button class="shopping__modal__window__button-order" @click="confirmOrder">
                    Оформить заказ на {{ shoppingProduct.totalPrice }} руб.
                </button>
                <p v-if="formError" class="shopping__modal__window__form-error">
                    {{ formError }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { cardsToCart } from '../stores/cardsToCart';
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const shoppingProduct = cardsToCart();

const shoppingCard = cardsToCart();

const modalOpen = ref(false);

const orderСonfirmed = ref(false);

const phone = ref('');
const email = ref('');
const formError = ref('');

function decrement(card){
    if(card.count > 1){
        shoppingProduct.changeCountCart(card.count - 1, card.id);
    }else{
        return;
    }
}

function increment(card){
    shoppingProduct.changeCountCart(card.count + 1, card.id);
}

function remove(id){
    shoppingProduct.cardsCountArr = shoppingProduct.cardsCountArr.filter(card => card.id !== id);
    localStorage.setItem('cardsCountArr', JSON.stringify(shoppingProduct.cardsCountArr));
}

function openModal() {
  modalOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOpen.value = false;
  document.body.style.overflow = '';
}

function onKey(e) {
  if (e.key === 'Escape') closeModal();
}

onMounted(() => window.addEventListener('keydown', onKey));
onUnmounted(() => window.removeEventListener('keydown', onKey));

function confirmOrder() {
    
    formError.value = "";

    const phoneRegex = /^\+?\d[\d\(\)\ -]{9,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phone.value.trim()) {
        formError.value = "Введите номер телефона.";
        return;
    }

    if (!phoneRegex.test(phone.value.trim())) {
        formError.value = "Неверный формат номера телефона.";
        return;
    }

    if (!email.value.trim()) {
        formError.value = "Введите email.";
        return;
    }

    if (!emailRegex.test(email.value.trim())) {
        formError.value = "Неверный формат email.";
        return;
    }

    setTimeout(() => {

        closeModal();

        shoppingProduct.cardsCountArr = [];
        shoppingProduct.totalPrice = 0;
        shoppingCard.count = 0;
        localStorage.removeItem('cardsCountArr');

        orderСonfirmed.value = true;

        setTimeout(() => {
            orderСonfirmed.value = false;
        }, 3000);
    }, 2000);
}
</script>

<style scoped lang="scss">
.shopping{
    background: rgba(255, 255, 255, 0.8);

    &__container{
        max-width: 90rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 0 auto;

        &__header{
            background-color: #ffffffe7;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 3rem;

            &__title{
                font-family: "Kelly Slab", sans-serif;
                font-size: 2.5rem;
                color: #000;
                text-align: center;
            }

            &__path-section{
                color: #6e6e6e;
                left: 0;

                &__link-catalog{
                    color: #ff472b;
                    
                    &:hover{
                    text-decoration: none;
                    }
                }
            }
        }

        &__basket-empty{
            height: 20rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            align-items: center;
            padding: 3rem;

            &__title{
                font-family: "Kelly Slab", sans-serif;
                font-size: 2.5rem;
                color: #000;
            }

            &__description{
                font-family: "Roboto Condensed", sans-serif;
                color: #555555;
                font-size: 2rem;

                &__link-catalog{
                    color: #ff472b;
                    
                    &:hover{
                    text-decoration: none;
                    }
                }
            }
        }

        &__basket{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
            padding: 0 3rem 3rem;

            &__elements{
                max-width: 50rem;
                width: 100%;
                border: 0.1rem solid #555555;
                border-radius: 1rem;
                padding: 0.3rem;


                &__product-card{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2rem;
                    padding: 0.5rem;
                    border-bottom: 0.0625rem dashed #555555;
    
                    &:last-child{
                        border-bottom: none;
                    }
                    
                    &__image{
                        max-width: 15rem;
                        width: 100%;
                        max-height: 10rem;
                        height: 100%;
                        border-radius: 1rem;
                        border: 0.1rem solid #555555 ;
                    }
    
                    &__items{
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
    
                        &__name{
                            font-family: "Kelly Slab", sans-serif;
                            font-size: 1.5rem;
                            color: #000;
                        }
        
                        &__order-info{
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;
                            gap: 2.5rem;
    
                            &__buttons{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                gap: 2rem;
        
                                &__button{
                                    border-radius: 2rem;
                                    font-size: 1.5rem;
                                    font-weight: bold;
                                    border: none;
                                    background-color: rgb(65, 194, 65);
                                    color: #fff;
                                    cursor: pointer;
                                    padding: 0.1rem 0.5rem;
                                    -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                                    -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                                    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                        
                                    &:hover{
                                        background-color: rgb(97, 206, 97);
                                    }
                        
                                    &:active{
                                        -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                                        -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                                        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                                    }
                                }
                                
                                &__counter{
                                    font-family: "Roboto Condensed", sans-serif;
                                    color: #000;
                                    font-size: 1.2rem;
                                }
                            }
            
                            &__total{
                                font-family: "Kelly Slab", sans-serif;
                                color: #000;
                                font-size: 1.2rem;
                            }
                            
                            &__button-deleted{
                                width: 2rem;
                                border: none;
                                background: none;
                                cursor: pointer;
                                
                                .shopping__container__basket__elements__product-card__items__order-info__button-deleted__img:hover{
                                
                                    .shopping__container__basket__elements__product-card__items__order-info__button-deleted__img__fill{
                                        fill: #ff472b;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &__payment-window{
                font-family: "Kelly Slab", sans-serif;
                color: #000;
                font-size: 1.3rem;
                max-width: 23rem;
                width: 100%;
                max-height: 30rem;
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                border: 0.1rem solid rgba(0, 128, 0);
                border-radius: 1rem;
                padding: 1rem;
                overflow-x: auto;

                &__title{
                    font-family: "Kelly Slab", sans-serif;
                    color: rgba(0, 128, 0);
                    font-size: 1.4rem;
                    text-align: center;
                    border-bottom: 0.1rem solid rgba(0, 128, 0);
                }

                &__product{
                    padding-left: 1rem;

                }

                &__invoice-total{
                    border-top: 0.1rem solid rgba(0, 128, 0);
                    border-bottom: 0.1rem solid rgba(0, 128, 0);
                }

                &__button{
                    font-family: "Kelly Slab", sans-serif;
                    font-weight: bold;
                    letter-spacing: 0.1rem;
                    border: none;
                    border-radius: 1rem;
                    padding: 1rem;
                    background-color: rgb(66, 192, 66);
                    color: #fff;
                    cursor: pointer;
                    -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                    -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);

                    &:hover{
                        background-color: rgb(97, 206, 97);
                    }

                    &:active{
                        -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                        -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    }
                }
            }
        }
    }

    &__order-confirmed {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgb(65, 194, 65);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-size: 1.2rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: fadeIn 0.3s ease;
    }

    &__modal{
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        

        &__window {
            max-width: 30rem;
            width: 100%;
            font-family: "Kelly Slab", sans-serif;
            position: fixed;
            background: #fff;
            color: #000;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
            animation: pop 0.2s ease;
            z-index: 999;

            &__close-button {
                position: absolute;
                top: 1rem;
                right: 1rem;
                padding: 0rem 0.5rem;
                background: #ff472b;
                color: #fff;
                border: none;
                border-radius: 1rem;
                cursor: pointer;
                font-size: 1.2rem;
                font-family: "Kelly Slab", sans-serif;
                z-index: 1000;

                &:hover {
                    background: #ff5a41;
                }
            }

            &__title {
                font-size: 1.7rem;
                text-align: center;
                color: rgba(0, 128, 0);
                border-bottom: 0.1rem solid rgba(0, 128, 0);
            }

            &__items{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                &__title-input{
                    font-size: 1.1rem;

                    .input-necessarily{
                        color: #ff472b;
                    }
                }
    
                &__input{
                    font-family: "Kelly Slab", sans-serif;
                    padding: 0.1rem;
                }
    
                &__input-comment{
                    width: 100%;
                    height: 5rem;
                    padding: 0.1rem;
                    font-family: "Kelly Slab", sans-serif;
                    resize: none;
                }
            }

            &__product-order{
                border-top: 0.1rem solid rgba(0, 128, 0);
                border-bottom: 0.1rem solid rgba(0, 128, 0);
                padding: 0.5rem 0;
            
                &__info{
                    font-size: 1.3rem;
                }
                
            }
            
            &__button-order{
                font-family: "Kelly Slab", sans-serif;
                font-weight: bold;
                letter-spacing: 0.1rem;
                border: none;
                border-radius: 1rem;
                padding: 1rem;
                background-color: rgb(66, 192, 66);
                color: #fff;
                cursor: pointer;
                -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);

                &:hover{
                    background-color: rgb(97, 206, 97);
                }

                &:active{
                    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                }
            }

            &__form-error{
                color: red; 
                text-align: center;
            }
        }
    }
}

@media (max-width: 767px){
    .shopping{
        &__container{
            &__header{
                padding: 2rem 3rem;
            }

            &__basket-empty{
                &__title{
                    font-size: 2rem;

                }

                &__description{
                    font-size: 1.2rem;
                }
            }

            &__basket{
                display: flex;
                justify-content: center;                
            }
        }

        &__modal{
            
            &__window {

                &__title {
                    font-size: 1.5rem;
                }

                &__items{

                    &__title-input{
                        font-size: 0.8rem;
                    }
                }

                &__product-order{
                
                    &__info{
                        font-size: 1.1rem;
                    }
                    
                }
            }
        }
    }
}

@media (max-width: 735px) {
    .shopping__container__basket__elements{
        max-width: 23rem;
        width: 100%;

        &__product-card{
            display: flex;
            justify-content: center;

            &__items{
                text-align: center;
            }
        }
    }
}

@media (max-width: 480px) {
    .shopping{

        &__container{

            &__header{
                padding: 2rem 3rem;

                &__title{
                    font-size: 1.5rem;
                }

                &__path-section{
                    font-size: 0.9rem;
                }
            }

            &__basket-empty{
                gap: 1rem;

                &__title{
                    font-size: 1.5rem;

                }

                &__description{
                    font-size: 1rem;
                }
            }

            &__basket{
                &__elements{
                    &__product-card{
                        gap: 1rem;
    
                        &__items{
                            gap: 1rem;
        
                            &__name{
                                font-size: 1rem;
                            }
            
                            &__order-info{
                                gap: 2rem;
        
                                &__buttons{
                                    gap: 1.5rem;
            
                                    &__button{
                                        font-size: 1.4rem;
                                        padding: 0rem 0.4rem;
                                    }

                                    &__counter{
                                        font-size: 1rem;
                                    }
                                }
                
                                &__total{
                                    font-size: 1rem;
                                }
                                
                                &__button-deleted{
                                    width: 1.5rem;
                                }
                            }
                        }
                    }
                }

                &__payment-window{
                    font-size: 1rem;

                    &__title{
                        font-size: 1.2rem;
                    }
                }
            }
        }

        &__order-confirmed {
            font-size: 1rem;
        }

        &__modal{            
            &__window {
                max-width: 25rem;
                width: 100%;

                &__title {
                    font-size: 1.3rem;
                }

                &__items{
                    &__title-input{
                        font-size: 0.8rem;
                    }
                }

                &__product-order{
                    &__info{
                        font-size: 1rem;
                    }
                    
                }
            }
        }
    }
}
</style> 