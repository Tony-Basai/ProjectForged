<template>
                <div class="card">
                    <img class="card__img" :src=" props.image " alt="">
                    <div class="card__info">
                        <h3 class="card__info__title">
                            {{ props.title }}
                        </h3>
                        <p class="card__info__description">
                            {{ props.description }}
                        </p>
                    </div>
                </div>
</template>

<script setup>
const props = defineProps({
    id: Number,
    image: String,
    title: String,
    description: String,
})
</script>

<style scoped lang="scss">
.card{
    max-width: 45rem;
    width: 100%;
    height: 35rem;
    padding: 1rem;
    font-family: "Roboto Condensed", sans-serif;

    &__img{
        max-width: 45rem;
        width: 100%;
        max-height: 25rem;
        height: 100%;
        position: relative;
        border-radius: 1rem;
    }
    
    &__info{
        max-width: 20rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        bottom: 0;
        right: 0.1rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: #ff472b;

        &__title{
            font-weight: 700;
            font-size: 1.7rem;
            line-height: 1.2;
            color: #ffb833;
            text-transform: uppercase;
        }
        
        &__description{
            color: #fff;
        }        
    }    
}

@media (max-width: 480px) {
    .card{
        height: 20rem;
        
        &__info{
            max-width: 15rem;
            width: 100%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            top: 10rem;
            right: 0;
            padding: 0.5rem;
            border-radius: 1rem;

            &__title{
                font-weight: 700;
                font-size: 0.8rem;
                text-transform: uppercase;
            }
            
            &__description{
                color: #fff;
                font-size: 0.7rem;
            }        
        }    
    }
}
</style>