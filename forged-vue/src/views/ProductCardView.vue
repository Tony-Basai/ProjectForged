<template>
  <section class="product">
    <div class="product__container">
      <div v-if="product" class="product__container__card">
        <div class="product__container__card__box-header">
          <h2 class="product__container__card__box-header__name">{{ product.name }}</h2>
          <h3 class="product__container__card__box-header__path-section">
            <RouterLink to="/catalog" class="product__container__card__box-header__path-section__link-home">
              Каталог 
            </RouterLink>
            \ {{ product.name }}
          </h3>
        </div>
        <div class="product__container__card__info">
          <img class="product__container__card__info__img" :src=" product.image " :alt=" product.name ">
          <div class="product__container__card__info__items">
              <p class="product__container__card__info__items__description">{{ product.description }}</p>
              <div class="product__container__card__info__items__order">
                  <p class="product__container__card__info__items__order__price">{{ product.price }} <span class="span-price">руб.</span></p>
                  <div class="product__container__card__info__items__order__buttons">
                    <button @click="toCard" class="product__container__card__info__items__order__buttons__button" :class="{ 'delete': cardToCart.isCardInCart(id) }">
                      {{ cardToCart.isCardInCart(id) ? 'Удалить' : 'Заказать' }}
                    </button>
                    <button @click="cardsStore.addFavourite(product.id)" class="product__container__card__info__items__order__buttons__favourite">
                      <svg class="product__container__card__info__items__order__buttons__favourite__img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path class="product__container__card__info__items__order__buttons__favourite__img__hover-red" :class="{'favourite': cardsStore.isColorCard(product.id)}" d="M17.3653 1C15.1604 1 13.2067 2.07706 12 3.73408C10.7933 2.07706 8.84098 1 6.63474 1C2.9706 1 0 3.9706 0 7.63474C0 13.2098 12 22.2004 12 22.2004C12 22.2004 24 13.2098 24 7.63474C24 3.9706 21.0294 1 17.3653 1Z" fill="#ffb833"/>
                      </svg>
                    </button>
                  </div>
              </div>
              <div v-if="cardToCart.isCardInCart(id)" class="product__container__card__info__items__buttons">
                <button @click="decrement()" class="product__container__card__info__items__buttons__button">&minus;</button>
                <p class="product__container__card__info__items__buttons__counter">{{ count }}</p>
                <button @click="increment()" class="product__container__card__info__items__buttons__button">+</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { cardsToCart } from '@/stores/cardsToCart';
import { RouterLink } from 'vue-router';

function decrement(){
        if(count.value > 1){
            count.value--;
            cardToCart.changeCountCart(count.value, +id);
        }else{
            return;
        }
    }

    function increment(){
        count.value++;
        cardToCart.changeCountCart(count.value, +id);
    }

const route = useRoute();
const id = route.params.id;

import { useCardsStore } from '@/stores/useCardsStore';

const cardsStore = useCardsStore();

import Signboard from "../assets/Signboard.webp"
import GatesImg from "../assets/GatesImg.webp"
import BenchImg from "../assets/BenchImg.webp"
import BarbecuesImg from "../assets/BarbecuesImg.webp"
import TablesImg from "../assets/TablesImg.webp"
import RailingsImg from "../assets/RailingsImg.webp"
import BedImg from "../assets/BedImg.webp"

const product = ref(0)

const products = [
  {
    id: 1,
    image: Signboard,
    name: "Кованая вывеска",
    category: "Вывеска",
    description: "Кованые вывески могут иметь различные формы и размеры. Они могут быть односторонними или двусторонними, устанавливаться на стену здания или на отдельную опору",
    price: 250
  },
  {
    id: 2,
    image: GatesImg,
    name: "Кованые ворота",
    category: "Ворота",
    description: "Изготовим ворота на заказ. У нас возможно купить ворота любой формы, габаритов и стиля. На нашем производстве большие цеха и свои дизайнеры и кузнецы",
    price: 950
  },
  {
    id: 3,
    image: BenchImg,
    name: "Кованая скамейка",
    category: "Скамейка",
    description: "Кованые скамейки и лавочки с деревянным или металлическим сиденьем для сада на заказ по индивидуальному дизайну. Изготавливаем в ваших размерах",
    price: 500
  },
  {
    id: 4,
    image: BarbecuesImg,
    name: "Кованый мангал",
    category: "Мангал",
    description: "Кованые мангалы на заказ производим из высокопрочной стали А3, толщиной 3-4 мм, что позволяет избежать деформации и прогорания изделия. Надёжность, высокая прочность.Уникальный кованый дизайн – даже серийные изделия отличаются",
    price: 300
  },
  {
    id: 5,
    image: TablesImg,
    name: "Кованый стол",
    category: "Стол",
    description: "Прочное, долговечное и уникальное изделие ручной работы, идеально подходящее для вашего интерьера. Его можно изготовить в любой форме (круглой, прямоугольной, овальной) и с различными вариантами столешниц (дерево, стекло, камень, металл). Такие столы подходят для дома, дачи, кафе или ресторана",
    price: 650
  },
  {
    id: 6,
    image: RailingsImg,
    name: "Кованые перила",
    category: "Перила",
    description: "Перила, изготовленные способом горячей ковки, – прочные, надежные, долговечные металлоконструкции с эксклюзивной эстетикой",
    price: 1200
  },
  {
    id: 7,
    image: BedImg,
    name: "Кованая кровать",
    category: "Кровать",
    description: "Эксклюзивная мебель ручной работы или по индивидуальному эскизу, отличающаяся высокой долговечностью, оригинальным дизайном и прочностью. Её изготавливают с учётом точных размеров спального места, выбранного дизайна (узоров, спинки), а также требований к материалам и отделке, что обеспечивает комфорт, безопасность и эстетическое соответствие интерьеру",
    price: 1000
  },
]

  product.value = products.find(p => p.id === Number(id))

  const cardToCart = cardsToCart();

  const count = ref(1)

  const existCard = cardToCart.cardsCountArr.find(item => item.id == id)

  if (existCard) {
    count.value = existCard.count;
  }

  const inCart = ref(false);

  function toCard(){
    if(cardToCart.isCardInCart(id)){
      cardToCart.removeFromCart(+id);
      count.value = 1;
    }else{
      count.value = 1;
      cardToCart.addToCart(+id, count.value, product.value.name, product.value.price, product.value.image);
    }
  }
</script>

<style scoped lang="scss">
.product{
  background: rgba(255, 255, 255, 0.8); 

  &__container{
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;

    &__card{
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &__box-header{
        background-color: #ffffffe7;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 3rem;


        &__name{
          font-family: "Kelly Slab", sans-serif;
          font-size: 2.5rem;
          color: #000;
          text-align: center;
        }

        &__path-section{
          color: #6e6e6e;
          left: 0;

          &__link-home{
            color: #ff472b;
            
            &:hover{
              text-decoration: none;
            }
          }
        }
      }
      
      &__info{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        padding: 0 3rem 3rem;

        &__img{
          max-width: 30rem;
          width: 100%;
        }
  
        &__items{
          max-width: 40rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0.5rem;
  
          &__description{
            font-family: "Roboto Condensed", sans-serif;
            font-size: 1rem;
            color: #000;
          }
  
          &__order{
            display: flex;
            flex-direction: column;
            gap: 2rem;
  
            &__price{
              font-family: "Kelly Slab", sans-serif;
              color: #ffb833;
              font-size: 2rem;
  
              .span-price{
                color: #ff472b;
              }
            }
            
            &__buttons{
              display: flex;
              justify-content: space-between;
              padding-left: 2rem;

              &__button{
                width: 6rem;
                padding: 1rem;
                border-radius: 2rem;
                background-color: #ffb833;
                color: #fff;
                font-weight: bold;
                border: none;
                cursor: pointer;
                -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
                box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
              }

              &__favourite{
                border: none;
                background: none;
                cursor: pointer;
              }
            }
          }
  
          &__buttons{
            display: flex;
            align-items: center;
            gap: 2rem;
  
            &__button{
              border-radius: 2rem;
              font-size: 1.5rem;
              font-weight: bold;
              border: none;
              background-color: #ffb833;
              color: #fff;
              cursor: pointer;
              padding: 0.5rem 0.9rem;
              -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
              -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
              box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  
              &:hover{
                background-color: #ffbf48;
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
        }
      }
    }
  }
}

@media (max-width: 900px){
  .product__container__card__info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

}

@media (max-width: 767px) {
  .product{ 
    &__container{
      &__card{
        gap: 1.5rem;

        &__box-header{
          padding: 2rem 3rem;

          &__name{
            font-size: 2rem;
          }

          &__path-section{
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media (max-width: 480px){
  .product{
    &__container{
      &__card{
        gap: 0.5rem;

        &__box-header{
          gap: 0.5rem;

          &__name{
            font-size: 1.5rem;
          }
        }
        
        &__info{
          gap: 0.5rem;
          padding: 0 3rem 1rem;
    
          &__items{
            gap: 0.5rem;
            padding: 0.5rem;
    
            &__description{
              font-size: 0.8rem;
            }
    
            &__order{
              gap: 0.5rem;
    
              &__price{
                font-size: 1.3rem;
              }
              
              &__buttons{
                display: flex;
                justify-content: space-between;
                padding-left: 1.4rem;
              }
            }
    
            &__buttons{    
              &__button{
                font-size: 1rem;
                padding: 0.4rem 0.7rem;
              }
    
              &__counter{
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }
}

.delete{
  background-color: #ff472b;
}

.product__container__card__info__items__order__buttons__favourite__img:hover{

    .product__container__card__info__items__order__buttons__favourite__img__hover-red{
        fill: #ff5a41;
    }
}

.favourite{
    fill: #ff472b;
}
</style>