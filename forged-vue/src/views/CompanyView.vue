<template>
  <section class="about-company">
    <div class="about-company__container">
      <div class="about-company__container__header-box">
        <h2 class="about-company__container__header-box__title">Производство и продажа кованых изделий</h2>
        <h3 class="about-company__container__header-box__path-section">
          <RouterLink to="/" class="about-company__container__header-box__path-section__link-home">
            Главная
          </RouterLink>
          \ О нас
        </h3>
      </div>
      <div class="about-company__container__info">
        <img class="about-company__container__info__img" src="../assets/office.jpg" alt="Офис компании кованных изделий">
        <div class="about-company__container__info__items">
          <p class="about-company__container__info__items__text">
            <span class="about-company__container__info__items__text__span-name">ForgedBas</span> — профессиональная компания по производству и продаже кованых изделий любого уровня сложности. Мы создаём долговечные, эстетичные и функциональные решения, которые становятся украшением частных домов, коммерческих объектов и общественных пространств. Уже многие годы мы специализируемся на художественной ковке, объединяя традиционные ремесленные техники с современными технологиями обработки металла.
          </p>
          <p class="about-company__container__info__items__title-list">
            Мы изготавливаем широкий ассортимент кованой продукции:
          </p>
          <ul class="about-company__container__info__items__list-box">
            <li class="about-company__container__info__items__list-box__list">- ворота и калитки;</li>
            <li class="about-company__container__info__items__list-box__list">- ограждения и перила;</li>
            <li class="about-company__container__info__items__list-box__list">- уличные и интерьерные элементы;</li>
            <li class="about-company__container__info__items__list-box__list">- кованую мебель и декор;</li>
            <li class="about-company__container__info__items__list-box__list">- беседки, козырьки, мангалы и садовые конструкции;</li>
            <li class="about-company__container__info__items__list-box__list">- изделия по индивидуальным чертежам и эскизам.</li>
          </ul> 
          <p class="about-company__container__info__items__text">
            Каждый проект создаётся мастерами с опытом, проходит многоэтапный контроль качества и адаптируется под архитектуру объекта и пожелания заказчика.
          </p>
          <p class="about-company__container__info__items__text">
            Мы стремимся делать кованые изделия, которые сочетают красоту, практичность и долговечность.
            <span class="about-company__container__info__items__text__span-name-bottom">ForgedBas</span> — это команда профессионалов, превращающих металл в искусство и создающих решения, которые служат десятилетиями и формируют эстетическое пространство вокруг вас.
          </p>
        </div>
      </div>
      <div class="about-company__container__info__reviews">
        <h3 class="about-company__container__info__reviews__title">Отзывы наши клинтов:</h3>
        <swiper
          :modules="[Autoplay, Pagination]"
          :loop="true"
          :autoplay="{
            delay: 6000,
            disableOnInteraction: false
          }"
        :pagination="{clickable: true}"
        class="about-company__container__info__reviews__swiper"
        >
          <swiper-slide v-for="review in reviews" :key="review.id" class="about-company__container__info__reviews__swiper__swiper-slide">
            <img :src="review.image" class="about-company__container__info__reviews__swiper__swiper-slide__img"/>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Review1 from '../assets/review1.png' 
import Review2 from '../assets/review2.png' 
import Review3 from '../assets/review3.png' 
import Review4 from '../assets/review4.png' 

const reviews = ref([
  {
    id: 1,
    image: Review1
  },
  {
    id: 2,
    image: Review2
  },
  {
    id: 3,
    image: Review3
  },
  {
    id: 4,
    image: Review4
  },
])
</script>

<style scoped lang="scss">
.about-company{
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

    &__header-box{
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
      padding: 2rem 3rem 0rem;

      &__img{
        width: 25rem;
        float: left;
        margin-right: 5rem;
      }

      &__items{

        &__text{
          margin-bottom: 3rem;
          font-size: 1.4rem;

          &__span-name{
            font-size: 1.8rem;
            font-weight: bold;
            color: #ff472b;
          }

          &__span-name-bottom{
            font-weight: bold;
            color: #ff472b;
          }
        }

        &__title-list{
          margin-bottom: 2rem;
          font-size: 1.4rem;
          margin-top: 5rem;
        }

        &__list-box{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          list-style: none;
          font-size: 1.3rem;
          margin-bottom: 2rem;

          &__list{
            max-width: 33rem;
            width: 100%;
          }
        }
      }

      &__reviews{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding-bottom: 2rem;

        &__title{
          font-family: "Kelly Slab", sans-serif;
          color: #000;
          font-size: 2.5rem;
        }

        &__swiper{
          background-color: #fff;
          max-width: 30rem;
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
          
          &__swiper-slide{
            &__img{
              max-width: 30rem;
              width: 100%;
            }
          }
        }        
      }
    }
  }
}

@media (max-width: 560px) {
  .about-company__container__info__reviews{
    &__swiper{
      background-color: #fff;
      max-width: 27rem;
      width: 100%;
                          
      &__swiper-slide{
        &__img{
          max-width: 27rem;
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .about-company{
    &__container{
      &__header-box{
        &__title{
          font-size: 1.5rem;
        }

        &__path-section{
          font-size: 1rem;
        }
      }

      &__info{
        padding: 1rem 2rem;

        &__img{
          max-width: 25rem;
          width: 100%;
          margin-right: 0rem;
        }

        &__items{
          &__text{
            margin-bottom: 1rem;
            font-size: 1rem;

            &__span-name{
              font-size: 1.1rem;
            }
          }

          &__title-list{
            margin-bottom: 0.5rem;
            font-size: 1rem;
            margin-top: 0rem;
          }

          &__list-box{
            gap: 0.5rem;
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
        }
    
        &__reviews{
          &__title{
            font-size: 1rem;
          }

          &__swiper{
            max-width: 20rem;
            width: 100%;
                                
            &__swiper-slide{
              &__img{
                max-width: 20rem;
                width: 100%;
              }
            }
          }
        }        
      }
    }
  } 
}
</style>