<template>
    <section class="hero">
        <div class="hero__container">
            <h2 class="hero__container__title">
                Производство и продажа кованых изделий
            </h2>
            <div class="hero__container__contact-items">
                <a class="hero__container__contact-items__button-call" href="tel:+375298374277">
                    <img class="hero__container__contact-items__button-call__icon" src="../assets/PhoneIcon.svg" alt="Button call">
                </a>
                <a class="hero__container__contact-items__button-number" href="tel:+375298374277">+375 (29) 837-42-77</a>
                <a class="hero__container__contact-items__button-number" href="tel:+375297787490">+375 (29) 778-74-90</a>
                <h5 class="hero__container__contact-items__location">
                    Беларусь, Гродненская обл., г. Гродно
                </h5>
            </div>
            <button class="hero__container__request" @click="openModal">
                Оставить заявку
            </button>
        </div>

        <div v-if="modalOpen" class="hero__modal" @click="closeModal">
            <div class="hero__modal__window" @click.stop>
                <button class="hero__modal__window__close-button" @click="closeModal">×</button>
                <h2 class="hero__modal__window__title">Оформление заявки</h2>
                <div class="hero__modal__window__items">
                    <label class="hero__modal__window__items__title-input" for="user-name">Укажите свое имя:</label>
                    <input class="hero__modal__window__items__input" v-model="name" type="text" id="user-name" placeholder="Ваше имя">
                </div>
                <div class="hero__modal__window__items">
                    <label class="hero__modal__window__items__title-input" for="phone-number">Введите ваш номер телефона:<span class="input-necessarily">*</span></label>
                    <input class="hero__modal__window__items__input" v-model="phone" type="tel" id="phone-number" name="phone" placeholder="+375 (__) ___-__-__">
                </div>
                <div class="hero__modal__window__items">
                    <label class="hero__modal__window__items__title-input" for="user-email">Введите вашу эл.почту:<span class="input-necessarily">*</span></label>
                    <input class="hero__modal__window__items__input" v-model="email" type="email" id="user-email" name="email" placeholder="name@email.com">
                </div>
                <div class="hero__modal__window__items">
                    <label class="hero__modal__window__items__title-input" for="comment">Комментарий к заявке:</label>
                    <textarea class="hero__modal__window__items__input-comment" v-model="comment" type="text" id="comment" name="user-comment" placeholder="Ваш комментраий к заказу"></textarea>
                </div>
                <button class="hero__modal__window__button-order" @click="confirmOrder">
                    Отправить заявку
                </button>
                <p v-if="formError" class="hero__modal__window__form-error">
                    {{ formError }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const modalOpen = ref(false);

const name = ref('');
const phone = ref('');
const email = ref('');
const comment = ref('');
const formError = ref('');

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

        name.value = '';
        phone.value = '';
        email.value = '';
        comment.value = '';
        formError.value = '';

    }, 1000);
}
</script>

<style scoped lang="scss">
.hero{
    position: relative;
    background-image: url(../assets/HeroImg.webp);
    background-size: cover;
    background-position: center;
    font-family: "Roboto Condensed", sans-serif;
    overflow: hidden;

    &::after{
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.6);
        pointer-events: none;
        z-index: 1;
    }

    &__container{
        position: relative;
        max-width: 90rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        margin: 0 auto;
        padding: 6rem 3rem;
        z-index: 2;

        &__title{
            max-width: 35.125rem;
            width: 100%;
            font-family: "Kelly Slab", sans-serif;
            text-align: center;
            font-size: 3.75rem;
            line-height: 1.1;
            color: #ffb833;
        }

        &__contact-items{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            &__button-call{
            
                &__icon{
                    width: 3rem;
                    background-color: #ff472b;
                    border-radius: 1.5rem;
                    padding: 0.5rem;

                    &:hover{
                        background-color: #ffb833;
                    }
                }
            }

            &__button-number{
                font-family: "Kelly Slab", sans-serif;
                font-size: 1.9375rem;
                text-decoration: none;
                color: #fff;
            }

            &__location{
                font-size: 1.0625rem;
                line-height: 1.2;
                color: #ffffffd9;
            }
        }

        &__request{
            padding: 2rem 5rem;
            color: #fff;
            background-color: #ff472b;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            font-weight: bold;
            cursor: pointer;
            border: none;

            &:hover{
                background-color: #ff5a41;
            }
        }
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
                color: #ffb833;
                border-bottom: 0.1rem solid #ff472b;
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

            &__button-order{
                font-family: "Kelly Slab", sans-serif;
                font-weight: bold;
                letter-spacing: 0.1rem;
                border: none;
                padding: 1rem;
                background-color: #ff472b;
                color: #fff;
                cursor: pointer;
                -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);

                &:hover{
                    background-color: #ff5a41;
                }

                &:active{
                    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                }
            }

            &__form-error{
                color: #ff472b; 
                text-align: center;
            }
        }
    }
}

@media (max-width: 480px) {
    .hero{
        &__container{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
    
            &__title{
                font-size: 2.5rem;
            }
    
            &__contact-items{
                
                &__button-number{
                    font-size: 1.5rem;
                }
            }
            &__request{
                padding: 1rem 2.5rem;
            }
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