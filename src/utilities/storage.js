

function addToStorage(id){
    let mealCart = JSON.parse(localStorage.getItem('meal-cart') || '{}');

    let quantity = mealCart[id];
    if(!quantity){
        mealCart[id] = 1;
    }else{
        mealCart[id] += 1;
    }
    
    localStorage.setItem('meal-cart', JSON.stringify(mealCart));
}


function getStoredCart(){
    let mealCart = JSON.parse(localStorage.getItem('meal-cart') || '{}');
    return mealCart;
}






export{
    addToStorage,
    getStoredCart
}