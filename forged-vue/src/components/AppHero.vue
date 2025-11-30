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
            <button class="hero__container__request">
                Оставить заявку
            </button>
        </div>
    </section>
</template>

<script setup>

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
}

@media (max-width: 480px) {
    .hero__container{
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
}
</style>