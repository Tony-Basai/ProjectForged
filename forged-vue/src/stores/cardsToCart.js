import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const cardsToCart = defineStore('cart', () => {
    const cardsCountArr = ref(getCartImmediately());

    const count = computed(() => {
        let result = 0;
        if(cardsCountArr.value.length){
            for(const card of cardsCountArr.value){
                result += +card.count || 0;
            }
        }
        return result;
    })

    const totalPrice = computed(() => {
        let result = 0;
        if(cardsCountArr.value.length){
            for(const card of cardsCountArr.value){
                result += card.total;
            }
        }
        return result;
    })

    function removeFromCart(id) {
        cardsCountArr.value = cardsCountArr.value.filter(item => item.id !== id);
        saveCart();
    }

    function getCartImmediately(){
        return JSON.parse(localStorage.getItem('cardsCountArr')) || [];
    }

    function saveCart(){
        localStorage.setItem('cardsCountArr', JSON.stringify(cardsCountArr.value));
    }

    function isCardInCart(id){
        if (cardsCountArr.value.find((value) => value.id == id)){
            return true;
        }else{
            return false;
        }
    }

    function addToCart(id, count, title, price, image){
        if (!id || !count || !title || !price || !image) {
            console.warn("addToCart вызван с некорректными аргументами", {
                id, count, title, price, image
            });
            return;
        }

        if (cardsCountArr.value.find((value) => value.id == id)){
            cardsCountArr.value = cardsCountArr.value.filter((value) => value.id != id);
        } else{
            cardsCountArr.value.push(
                {
                    id,
                    count: +count,
                    title,
                    price: +price,
                    image,
                    total: +count * +price
                }
            );
        }

        saveCart();
    }

    function changeCountCart(count, id){
        const changeCount = cardsCountArr.value.find((value) => value.id == id)
        changeCount.count = count
        changeCount.total = count * changeCount.price
        
        saveCart()
    }

    return {
        addToCart,
        removeFromCart,
        isCardInCart,
        changeCountCart,
        cardsCountArr,
        count,
        totalPrice
    }
});
