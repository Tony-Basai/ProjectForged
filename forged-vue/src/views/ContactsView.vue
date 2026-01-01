<template>
  <section class="contacts">
    <div class="contacts__container">
      <div class="contacts__container__header">
        <h2 class="contacts__container__header__title">Контакты</h2>
        <h3 class="contacts__container__header__path-section">
          <RouterLink to="/" class="contacts__container__header__path-section__link-home">
            Главная
          </RouterLink>
          \ Контакты
        </h3>
      </div>
      <div class="contacts__container__info">
        <div class="contacts__container__info__contacts-card">
            <div class="contacts__container__info__contacts-card__items">
                <h5 class="contacts__container__info__contacts-card__items__title">Как с нами связаться:</h5>
                <a class="contacts__container__info__contacts-card__items__tel-numb" href="tel:+375298374277">+375 (29) 837-42-77</a>
                <a class="contacts__container__info__contacts-card__items__tel-numb" href="tel:+375297787490">+375 (29) 778-74-90</a>
                <a class="contacts__container__info__contacts-card__items__mail" href="mailto:support@example.com">
                    support@example.com
                </a>
                <h5 class="contacts__container__info__contacts-card__items__title">Адрес:</h5>
                <h4 class="contacts__container__info__contacts-card__items__address">
                    Беларусь, Гродненская обл., г. Гродно
                </h4>
                <h5 class="contacts__container__info__contacts-card__items__title">Соцсети:</h5>
                <div class="contacts__container__info__contacts-card__items__box-network">
                    <a class="contacts__container__info__contacts-card__items__box-network__social-network" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img class="contacts__container__info__contacts-card__items__box-network__social-network__img" src="../assets/InstagramIcon.svg" alt="Forged instagram">
                    </a>
                    <a class="contacts__container__info__contacts-card__items__box-network__social-network" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <img class="contacts__container__info__contacts-card__items__box-network__social-network__img" src="../assets/FacebookIcon.svg" alt="Forged facebook">
                    </a>
                    <a class="contacts__container__info__contacts-card__items__box-network__social-network" href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                      <img class="contacts__container__info__contacts-card__items__box-network__social-network__img" src="../assets/TwitterIcon.svg" alt="Forged twitter">
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.contacts{
  font-family: "Roboto Condensed", sans-serif;
  background: rgba(255, 255, 255, 0.8);
  color: #000;

  &__container{
    max-width: 90rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;

    &__header{
      background-color: #ffffffe7;
      padding: 2rem 3rem;

      &__title{
        font-family: "Kelly Slab", sans-serif;
        color: #000;
        font-size: 2.5rem;
        text-align: center;
      }

      &__path-section{
        color: #6e6e6e;

        &__link-home{
          color: #ff472b;

          &:hover{
            text-decoration: none;
          }
        }
      }
    }

    &__info{
      padding: 0 3rem 3rem;
      
      &__contacts-card{
        max-width: 25rem;
        width: 100%;
        background-color: #fff;
        border-radius: 1rem;

        &__items{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem;

          &__title{
            font-size: 1rem;
            font-family: "Kelly Slab", sans-serif;
            color: #ff472b;
          }
  
          &__tel-numb, &__mail{
            max-width: 9rem;
            width: 100%;
            font-weight: bold;
            color: #000;
            text-decoration: none;

            &:hover{
              color: #ffb833;
            }
          }

          &__address{
            font-weight: bold;
          }

          &__box-network{
            display: flex;
            justify-content: center;
            gap: 1rem;

            &__social-network{
              &__img{
                max-width: 3rem;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .contacts{

    &__container{
      gap: 1rem;

      &__header{
        padding: 2rem 2rem;

        &__title{
          font-size: 1.5rem;
        }

        &__path-section{
          font-size: 1rem;
        }      
      }


      &__info{
        padding: 0 2rem 2rem;
        
        &__contacts-card{
          &__items{
            gap: 0.3rem;
            padding: 1rem;

            &__title{
              font-size: 0.7rem;
            }
    
            &__tel-numb, &__mail{
              font-size: 0.9rem;
            }

            &__address{
              font-size: 0.9rem;
            }

            &__box-network{
              gap: 0.5rem;

              &__social-network{
                &__img{
                  max-width: 1.8rem;
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }  
}
</style>