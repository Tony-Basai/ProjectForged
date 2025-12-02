<template>
  <section class="catalog">
    <div class="catalog__container">
      <div class="catalog__container__items">
        <div class="catalog__container__items__box-header">
          <h2 class="catalog__container__items__box-header__title">Каталог кованных изделий от <span class="title-span">ForgedBas</span></h2>
          <h3 class="catalog__container__items__box-header__path-section">
            <RouterLink to="/" class="catalog__container__items__box-header__path-section__link-home">
              Главная
            </RouterLink>
            \ Каталог
          </h3>
        </div>
        <div class="catalog__container__items__box-serch">
          <div class="catalog__container__items__box-serch__dropdown" @click="toggleDropdown">
            <div class="catalog__container__items__box-serch__dropdown__selected">
              {{ selectedCategoryName }}
              <span class="catalog__container__items__box-serch__dropdown__selected__arrow" :class="{ 'open': dropdownOpen }"></span>
            </div>
            <ul v-if="dropdownOpen" class="catalog__container__items__box-serch__dropdown__list">
              <li class="catalog__container__items__box-serch__dropdown__list__button-catecory" v-for="category in categories" 
                :key="category.key"
                @click.stop="selectCategory(category)"
                :class="{ active: selectedCategory === category.key }"
              >
                {{ category.name }}
              </li>
            </ul>
          </div>
          <form class="catalog__container__items__box-serch__form" @submit.prevent>
            <div class="catalog__container__items__box-serch__form__serch-items">
              <input v-model="searchQuery" @keyup.enter="applySearch" class="catalog__container__items__box-serch__form__serch-items__input-text" type="text" id="query" name="query" placeholder="Введите название изделия">
              <button class="catalog__container__items__box-serch__form__serch-items__input-button" @click="applySearch">
                <img class="catalog__container__items__box-serch__form__serch-items__input-button__serch-icon" src="../assets/searchIcon.svg" alt="">
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="catalog__container__cards">
        <AppCatalogCard
          v-for="product in filteredProducts" 
          :key="product.id"
          :id="product.id"
          :image="product.image"
          :name="product.name"
          :clock="product.clock"
          :price="product.price"
        />
      </div>

      <div class="catalog__container__empty" v-if="showEmpty">
        <h3>По вашему запросу ничего не найдено..</h3>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { RouterLink } from 'vue-router';

import AppCatalogCard from '@/components/AppCatalogCard.vue';

import Signboard from "../assets/Signboard.webp"
import GatesImg from "../assets/GatesImg.webp"
import BenchImg from "../assets/BenchImg.webp"
import BarbecuesImg from "../assets/BarbecuesImg.webp"
import TablesImg from "../assets/TablesImg.webp"
import RailingsImg from "../assets/RailingsImg.webp"
import BedImg from "../assets/BedImg.webp"

const categories = [
  {
    key: '',
    name: 'Все'
  },
  {
    key: 'Вывеска',
    name: 'Вывески'
  },
  {
    key: 'Ворота',
    name: 'Ворота'
  },
  {
    key: 'Скамейка',
    name: 'Скамейки'
  },
  {
    key: 'Мангал',
    name: 'Мангалы'
  },
  {
    key: 'Перила',
    name: 'Перила'
  },
  {
    key: 'Стол',
    name: 'Столы'
  },
  {
    key: 'Кровать',
    name: 'Кровати'
  },
]

const products = ref([
  {
    id: 1,
    image: Signboard,
    name: "Кованая вывеска",
    category: "Вывеска",
    clock: 7,
    description: "Кованые вывески могут иметь различные формы и размеры. Они могут быть односторонними или двусторонними, устанавливаться на стену здания или на отдельную опору",
    price: 250
  },
  {
    id: 2,
    image: GatesImg,
    name: "Кованые ворота",
    category: "Ворота",
    clock: 30,
    description: "Изготовим ворота на заказ. У нас возможно купить ворота любой формы, габаритов и стиля. На нашем производстве большие цеха и свои дизайнеры и кузнецы",
    price: 950
  },
  {
    id: 3,
    image: BenchImg,
    name: "Кованая скамейка",
    category: "Скамейка",
    clock: 14,
    description: "Кованые скамейки и лавочки с деревянным или металлическим сиденьем для сада на заказ по индивидуальному дизайну. Изготавливаем в ваших размерах",
    price: 500
  },
  {
    id: 4,
    image: BarbecuesImg,
    name: "Кованый мангал",
    category: "Мангал",
    clock: 10,
    description: "Кованые мангалы на заказ производим из высокопрочной стали А3, толщиной 3-4 мм, что позволяет избежать деформации и прогорания изделия. Надёжность, высокая прочность.Уникальный кованый дизайн – даже серийные изделия отличаются",
    price: 300
  },
  {
    id: 5,
    image: TablesImg,
    name: "Кованый стол",
    category: "Стол",
    clock: 14,
    description: "Прочное, долговечное и уникальное изделие ручной работы, идеально подходящее для вашего интерьера. Его можно изготовить в любой форме (круглой, прямоугольной, овальной) и с различными вариантами столешниц (дерево, стекло, камень, металл). Такие столы подходят для дома, дачи, кафе или ресторана",
    price: 650
  },
  {
    id: 6,
    image: RailingsImg,
    name: "Кованые перила",
    category: "Перила",
    clock: 60,
    description: "Перила, изготовленные способом горячей ковки, – прочные, надежные, долговечные металлоконструкции с эксклюзивной эстетикой",
    price: 1200
  },
  {
    id: 7,
    image: BedImg,
    name: "Кованая кровать",
    category: "Кровать",
    clock: 30,
    description: "Эксклюзивная мебель ручной работы или по индивидуальному эскизу, отличающаяся высокой долговечностью, оригинальным дизайном и прочностью. Её изготавливают с учётом точных размеров спального места, выбранного дизайна (узоров, спинки), а также требований к материалам и отделке, что обеспечивает комфорт, безопасность и эстетическое соответствие интерьеру",
    price: 1000
  },
]);

const appliedSearsh = ref('');
const searchQuery = ref('');
const selectedCategory = ref('');

function applySearch(){
  appliedSearsh.value = searchQuery.value;
}

const filteredProducts = computed(() =>{
  return products.value.filter(item => {

    const categoryOk = selectedCategory.value 
      ? item.category === selectedCategory.value
      : true

    const query = appliedSearsh.value.toLowerCase() 

    const searchOk = item.name.toLowerCase().includes(query)

    return categoryOk && searchOk
  })
})

function filterByCategory(category) {
    selectedCategory.value = category
    applySearch();
}

const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function selectCategory(cat) {
  filterByCategory(cat.key);
  dropdownOpen.value = false;
}

const selectedCategoryName = computed(() => {
  const c = categories.find(c => c.key === selectedCategory.value);
  return c ? c.name : 'Все категории';
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('.catalog__container__items__box-serch__dropdown');
  if (!target) dropdownOpen.value = false;
});

const showEmpty = ref(false);
let emptyTimer = null;

watch(filteredProducts, (newList) =>{
  clearTimeout(emptyTimer)

  if(newList.length === 0 && appliedSearsh.value){
    emptyTimer = setTimeout(() =>{
      showEmpty.value = true
    }, 500)
  }else{
    showEmpty.value = false
  }
});
</script>

<style scoped lang="scss">
.catalog{
  background: rgba(255, 255, 255, 0.8);
  
  &__container{
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;

    &__items{
      background-color: #ffffffe7;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 3rem;

      &__box-header{
        max-width: 90rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &__title{
          font-family: "Kelly Slab", sans-serif;
          color: #000;
          font-size: 2.5rem;
          text-align: center;

          .title-span{
            color: #ff472b;
          }
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

      &__box-serch{
        max-width: 50rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        &__dropdown{
          position: relative;
          width: 10rem;
          user-select: none;
          cursor: pointer;
          font-weight: bold;
  
          &__selected {
            padding: 0.8rem;
            background-color: #ffb833;
            border-radius: 1rem;
            color: #fff;
            box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
  
            &__arrow {
              width: 0;
              height: 0;
              border-left: .4rem solid transparent;
              border-right: .4rem solid transparent;
              border-top: .5rem solid #fff;
              transition: 0.2s;
              
              &.open {
                transform: rotate(180deg);
              }
            }
          }
  
          &__list{
            position: absolute;
            top: calc(100% + .3rem);
            width: 100%;
            background: #fff;
            color: #6e6e6e;
            border-radius: 1rem;
            box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.2);
            overflow: hidden;
            z-index: 20;
  
            &__button-catecory {
              padding: 0.8rem;
              cursor: pointer;
  
              &:hover {
                background: #ffb833;
                color: #fff;
              }
  
              &.active {
                background: #ff472b !important;
                color: #fff;
              }
            }
          }
        }

        &__form{
          max-width: 30rem;
          width: 100%;
  
          &__serch-items{
            display: flex;
            align-items: center;
            position: relative;
  
            &__input-text{
              width: 100%;
              padding: 1rem;
              border-radius: 2rem;
              border: none;
              position: relative;
              outline: none;
              -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
              -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
              box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
            }
  
            &__input-button{
              padding: 0.4rem 0.5rem;
              border-radius: 2rem;
              border: none;
              background-color: hsl(0, 0%, 94%);
              position: absolute;
              right: 0.3rem;
              cursor: pointer;
  
              &__serch-icon{
                width: 1.5rem;
              }
            }
          }
        }
      }

      &__category{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;

        &__button{
          max-width: 6rem;
          width: 100%;
          padding: 1rem;
          border-radius: 2rem;
          border: none;
          background-color: #ffb833;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
          -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);

          &:hover{
            background-color: #ffbf48;
            -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
          }

          &.active{
            background-color: #ff472b;

            &:hover{
              background-color: #ff5a41;
            }
          }
        }
      }
    }

    &__cards{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 3rem 3rem;
    }
  }
}

.catalog__container__empty{
  height: 20rem;
  font-size: 1.5rem;
  color: #6e6e6e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 3rem 6rem;
}

@media (max-width: 767px){
  
}
</style>
