

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

function decreaseDb(id){
    let mealCart = JSON.parse(localStorage.getItem('meal-cart') || '{}');
    let quantity = mealCart[id];
    if(quantity>0){
        mealCart[id] -= 1 ;
    }
    localStorage.setItem('meal-cart', JSON.stringify(mealCart));
}





export{
    addToStorage,
    decreaseDb,
    getStoredCart
}