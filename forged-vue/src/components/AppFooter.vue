<template>
    <section class="footer">
        <div class="footer__container">
            <h2 class="footer__container__title">
                Наши контакты
            </h2>
            <div class="footer__container__contact-items">
                <a class="footer__container__contact-items__button-number" href="tel:+375298374277">+375 (29) 837-42-77</a>
                <a class="footer__container__contact-items__button-number" href="tel:+375297787490">+375 (29) 778-74-90</a>
                <h5 class="footer__container__contact-items__location">
                    Беларусь, Гродненская обл., г. Гродно
                </h5>
                <a class="footer__container__contact-items__mail" href="mailto:support@example.com">
                    support@example.com
                </a>
            </div>
            <div class="footer__container__contact-items">
                <h5 class="footer__container__contact-items__title-network">
                    Мы в социальных сетях
                </h5>
                <div class="footer__container__contact-items__box-network">
                    <a class="footer__container__contact-items__box-network__social-network" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img class="footer__container__contact-items__box-network__social-network__img" src="../assets/InstagramIcon.svg" alt="Forged instagram"></a>
                    <a class="footer__container__contact-items__box-network__social-network" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img class="footer__container__contact-items__box-network__social-network__img" src="../assets/FacebookIcon.svg" alt="Forged facebook"></a>
                    <a class="footer__container__contact-items__box-network__social-network" href="https://www.x.com" target="_blank" rel="noopener noreferrer"><img class="footer__container__contact-items__box-network__social-network__img" src="../assets/TwitterIcon.svg" alt="Forged twitter"></a>
                </div>
            </div>
            <div class="footer__container__copyright">
                <p class="footer__container__copyright__text">© 2018 – {{ new Date().getFullYear() }} MyCompany. Все права защищены.</p>
                <button class="footer__container__copyright__button-up" @click="scrollToTop" aria-label="Наверх"></button> 
            </div>
        </div>
    </section>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
.footer{
    position: relative;
    background-image: url(../assets/FooterImg.webp);
    background-size: cover;
    background-position: center;
    font-family: "Roboto Condensed", sans-serif;
    overflow: hidden;

    &::after{
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(18, 8, 0, 0.8);
        box-shadow: inset 0 0 100px rgba(18, 8, 0, 0.8);
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
        padding: 6rem 3rem 0;
        z-index: 2;

        &__title{
            font-family: "Kelly Slab", sans-serif;
            text-align: center;
            font-size: 1.5rem;
            line-height: 1.1;
            color: #ffb833;
        }

        &__contact-items{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            &__button-number{
                font-family: "Kelly Slab", sans-serif;
                font-size: 1.5rem;
                text-decoration: none;
                color: #fff;
            }

            &__location{
                font-size: 1.0625rem;
                line-height: 1.2;
                color: #ffffffd9;
            }

            &__mail{
                font-family: "Kelly Slab", sans-serif;
                font-size: 1.2rem;
                color: #ff472b;
            }

            &__title-network{
                font-family: "Kelly Slab", sans-serif;
                text-align: center;
                font-size: 1.5rem;
                line-height: 1.1;
                color: #fff;
            }

            &__box-network{
                display: flex;
                gap: 2rem;

                &__social-network{
                    &__img{
                        max-width: 3rem;
                        width: 100%;
                    }
                }
            }
        }

        &__copyright{
            max-width: 90rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-top: 0.0625rem dashed #ffffff1a;
            padding: 2rem 0 4rem;

            &__text{
                color: #fff;
            }

            &__button-up{
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 3rem;
                height: 3rem;
                border: none;
                border-radius: 50%;
                background-color: #ff472b;
                color: #fff;
                cursor: pointer;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                box-shadow: 0px 5px 10px 2px rgba(255, 184, 51, 0.2);

                &::before{
                    content: "";
                    width: 10px;
                    height: 10px;
                    border-left: 3px solid #fff;
                    border-top: 3px solid #fff;
                    transform: rotate(45deg);
                    margin-top: 4px;
                }

                &:hover{
                    background-color: #e63f26;
                    transform: translateY(-5px);
                    box-shadow: 0px 5px 10px 2px rgba(255, 71, 43, 0.2);
                }
            }
        }
    }
}

@media (max-width: 480px) {
    .footer{

        &__container{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            &__title{
                font-size: 1rem;
            }

            &__contact-items{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;

                &__button-number{
                    font-size: 1.5rem;
                }

                &__location{
                    font-size: 0.7rem;
                }

                &__mail{
                    font-size: 0.8rem;
                }

                &__title-network{
                    font-size: 1rem;
                }

                &__box-network{
                    display: flex;
                    gap: 1rem;

                    &__social-network{
                        &__img{
                            max-width: 2rem;
                            width: 100%;
                        }
                    }
                }
            }

            &__copyright{
                display: flex;
                justify-content: center;
                padding: 1rem 0 2rem;

                &__text{
                    font-size: 0.6rem;
                }

                &__button-up{
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 3rem;
                    height: 3rem;
                    border: none;
                    border-radius: 50%;
                    background-color: #ff472b;
                    color: #fff;
                    cursor: pointer;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    box-shadow: 0px 5px 10px 2px rgba(255, 184, 51, 0.2);

                    &::before{
                        content: "";
                        width: 10px;
                        height: 10px;
                        border-left: 3px solid #fff;
                        border-top: 3px solid #fff;
                        transform: rotate(45deg);
                        margin-top: 4px;
                    }

                    &:hover{
                        background-color: #e63f26;
                        transform: translateY(-5px);
                        box-shadow: 0px 5px 10px 2px rgba(255, 71, 43, 0.2);
                    }
                }
            }
        }
    }
}
</style>