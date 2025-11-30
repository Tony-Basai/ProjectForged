import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardsStore = defineStore('cards', () => {
    const favourite = ref(loadingFavourite());

    function addFavourite (id){
        if(favourite.value.includes(id)){
            favourite.value = favourite.value.filter((value) => value != id);
        } else{
            favourite.value.push(id);
        }

        saveFavourite();
    }

    function saveFavourite(){
        localStorage.setItem('save', JSON.stringify(favourite.value))
    }

    function loadingFavourite(){
        return JSON.parse(localStorage.getItem('save')) || [];
    }

    function isColorCard(id){
        return favourite.value.includes(id);
    }

    return{addFavourite, favourite, isColorCard}
});

