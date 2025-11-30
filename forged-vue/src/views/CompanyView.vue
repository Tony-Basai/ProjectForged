<template>
  <section class="about-company">
    <div class="about-company__container">
      <div class="about-company__container__header-box">
        <h2 class="about-company__container__header-box__title">Производство и продажа кованых изделий</h2>
        <h3 class="about-company__container__header-box__path-section">
          <a class="about-company__container__header-box__path-section__link-home" href="http://localhost:5173/">Главная </a>
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

      </div>
    </div>
  </section>
</template>

<script setup>

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
      padding: 2rem 3rem;

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
    }
  }
}
</style>